-- HireU initial Supabase schema
create extension if not exists "pgcrypto";

create type public.user_role as enum ('candidate', 'company', 'admin');
create type public.job_status as enum ('draft', 'pending_review', 'live', 'paused', 'closed');
create type public.application_status as enum ('submitted', 'in_review', 'assessment', 'interview', 'offer', 'rejected', 'withdrawn');

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role public.user_role not null default 'candidate',
  full_name text,
  headline text,
  country text,
  avatar_url text,
  skills text[] not null default '{}',
  english_level text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  slug text not null unique,
  website text,
  description text,
  logo_url text,
  verified boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  title text not null,
  slug text not null,
  description text not null,
  location text not null,
  mode text not null default 'remote',
  contract text not null default 'full_time',
  salary_text text,
  skills text[] not null default '{}',
  status public.job_status not null default 'draft',
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  expires_at timestamptz,
  unique(company_id, slug)
);

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  candidate_id uuid not null references auth.users(id) on delete cascade,
  status public.application_status not null default 'submitted',
  cover_note text,
  resume_path text,
  ai_context jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(job_id, candidate_id)
);

create table if not exists public.assessments (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references public.applications(id) on delete cascade,
  kind text not null,
  score numeric,
  status text not null default 'pending',
  response jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  plan text not null,
  amount_cents integer not null,
  status text not null default 'pending',
  stripe_checkout_session_id text unique,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.companies enable row level security;
alter table public.jobs enable row level security;
alter table public.applications enable row level security;
alter table public.assessments enable row level security;
alter table public.orders enable row level security;

create policy "Public can read live jobs" on public.jobs for select using (status = 'live');
create policy "Users can read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Candidates can read own applications" on public.applications for select using (auth.uid() = candidate_id);
create policy "Candidates can create applications" on public.applications for insert with check (auth.uid() = candidate_id);
create policy "Company owners can manage companies" on public.companies for all using (auth.uid() = owner_id);
create policy "Company owners can manage jobs" on public.jobs for all using (exists (select 1 from public.companies c where c.id = company_id and c.owner_id = auth.uid()));
