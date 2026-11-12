# WDGLOW

Christmas light installation site for Westerly, Rhode Island, and Connecticut, with a private admin for leads, customers, quotes, jobs, and the season schedule.

## Run locally

```bash
npm install
npx prisma db push
npx tsx prisma/seed.ts
npm run dev
```

Public site: http://localhost:3000

Admin: http://localhost:3000/admin

The admin email and temporary password are in `.env` as `ADMIN_EMAIL` and `ADMIN_PASSWORD`. Change the password in Settings after the first login, and add the public phone number and street address there before launch.

Set `NEXT_PUBLIC_SITE_URL` to the real domain before deploying so canonical links, the sitemap, and social cards use it.
