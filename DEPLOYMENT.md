# HireU deployment

HireU is configured as a Vite SPA for Vercel with Supabase providing authentication, Postgres data, Storage and row-level security. The public UI runs in mock mode when the Supabase variables are absent, so the product can be reviewed before provisioning external resources.

## Vercel

Import `https://github.com/rafaelchat/hireu` into Vercel. The repository contains `vercel.json` with `pnpm build:static`, `dist/public` and an SPA rewrite for deep links.

## Supabase

Create a Supabase project through the Vercel Marketplace or the Supabase dashboard, run `supabase/schema.sql` in the SQL Editor, then add the public project URL and publishable key as Vercel environment variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

The app detects these variables at runtime. Without them, authentication and persistence show honest mock-mode feedback instead of pretending to be connected. Server-only values such as `SUPABASE_SECRET_KEY` and `SUPABASE_DB_URL` must never be prefixed with `VITE_`.

## Current screens

Public: home, job search, job details, apply, how it works, pricing and sign in. Candidate: overview, applications, profile and settings. Company: overview, post a job, candidate review and settings.

Real Stripe checkout, production email delivery, ATS ingestion and AI scoring should be enabled only after the Vercel/Supabase credentials and billing provider are configured.
