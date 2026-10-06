## Database

Site content (bio, skills, experience, education, projects) lives in Postgres and is accessed through Prisma. Text fields are Markdown.

```bash
docker compose up -d   # local Postgres on port 5433
# .env: DATABASE_URL="postgresql://portfolio:portfolio@localhost:5433/portfolio"
pnpm db:migrate        # apply migrations
pnpm db:seed           # load the content in prisma/seed.ts (wipes and re-inserts)
pnpm db:studio         # browse/edit content
```

In production, set `DATABASE_URL` in Vercel to a hosted Postgres (e.g. Neon) and run `pnpm prisma migrate deploy` against it, then seed once. The home page revalidates hourly, so content edits show up without a redeploy.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
