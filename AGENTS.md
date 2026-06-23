# HIKARI Arts AGENTS.md

## Project Overview

HIKARI Arts is an international music education platform.

The product is not only a course-management system. It also supports teacher operations, student growth, international education planning, and music therapy certification.

When working on this project, AI agents must understand the product context before changing code. Prefer small, well-scoped changes that match the existing architecture.

## Product Modules

- Student management
- Course management
- Teacher management
- International education planning
- Music therapy certification

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase

## Project Structure

- All API routes must live under `app/api/`.
- All pages and routes must live under `app/`.
- All shared UI and feature components must live under `components/`.

Follow the existing folder structure before creating new directories. Do not introduce a new architectural pattern unless the project already uses it or the user explicitly requests it.

## TypeScript Rules

- New features must include TypeScript types.
- Avoid `any` unless there is a clear reason and no practical safer type.
- Reuse existing types before creating new ones.
- Keep database-related types aligned with Supabase schemas and existing project conventions.

## API Rules

- New API endpoints must be placed under `app/api/`.
- Do not delete existing API routes.
- Do not change existing API behavior unless the task explicitly requires it.
- Keep request and response shapes typed.
- Validate required request inputs before using them.

## UI Rules

- Use Tailwind CSS and shadcn/ui components consistently.
- Match the existing visual style before adding new UI patterns.
- Prefer reusable components in `components/` when UI is shared across pages.
- Keep pages focused on composition and routing logic.

## Supabase And Database Rules

- Do not modify existing database migration files.
- Do not rewrite migration history.
- Do not change environment variable files or production configuration.
- When database behavior is needed, follow the existing Supabase client and query patterns in the codebase.

## Forbidden Changes

Do not make these changes unless the user explicitly asks:

- Modify database migrations.
- Delete existing API routes.
- Modify environment variables or env files.
- Replace the current tech stack.
- Perform broad refactors unrelated to the requested task.

## Completion Checks

Before considering work complete, run:

```bash
pnpm lint
pnpm typecheck
```

If either command fails, fix the issue or clearly report why it could not be fixed.

## Git And Change Discipline

- Keep changes focused on the requested feature or fix.
- Do not mix unrelated cleanup with feature work.
- Preserve existing user changes.
- Explain any assumptions when product requirements are unclear.

