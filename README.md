# Raxio Nexus

Premium marketing site + inquiry API for Raxio software and technology services.

**Project title:** Nexus — short, brand-friendly, and a fit for connected products, teams, and cloud delivery.

## Recommended stack

This MVP uses the stack you preferred. It is the right default for a brochure site that still needs a real inquiry pipeline:

| Layer | Choice | Why |
| --- | --- | --- |
| Frontend | React + Vite + Tailwind CSS | Fast local DX, small production bundle, easy component reuse |
| Backend | Node.js + Express | Simple REST surface for one core write path (contact form) |
| Database | MongoDB Atlas | Flexible documents for inquiries; no schema migrations for MVP |
| Email | Nodemailer / SMTP | Optional in MVP; form still persists if SMTP is not configured |
| Frontend host | Vercel or Netlify | Static CDN, HTTPS, preview deploys |
| Backend host | Render or Railway | Persistent Node process, env vars, health checks |
| DNS / TLS | Registrar + host | HTTPS certificates issued automatically on both hosts |

A static-only site (Astro/Next) would be slightly cheaper to operate, but it would not give you a first-party API, stored leads, or email notifications without a third-party form product. Keep this stack.

## Architecture

```
Browser  →  Vite/React (Vercel/Netlify)
                │  POST JSON
                ▼
         Express API (Render/Railway)
                │
        ┌───────┴────────┐
        ▼                ▼
  MongoDB Atlas     SMTP inbox
  (inquiries)       (optional notify)
```

Frontend and backend stay separate. Secrets live only in host environment variables.

## Folder structure

```
.
├── frontend/                 React + Vite app
│   ├── public/               robots.txt, sitemap.xml, favicon
│   └── src/
│       ├── components/       reusable UI
│       ├── data/             nav, services, portfolio
│       ├── lib/              API client
│       └── pages/            Home, case study, legal
└── backend/                  Express API
    └── src/
        ├── config/           Mongo connection
        ├── models/           Inquiry schema
        ├── routes/           REST handlers
        └── services/         email notifications
```

## MVP priority (Phase 1)

1. Responsive shell (navbar, mobile menu, footer)
2. Hero + About + Services + Why + Process + Portfolio
3. Contact form with client + server validation
4. Persist inquiries in MongoDB
5. Optional email notification
6. SEO basics (title, description, OG, robots, sitemap)
7. Privacy / Terms routes
8. Production deploy of frontend and API

## Local development

```bash
cd backend
copy .env.example .env
# set MONGODB_URI
npm install
npm run dev

cd ../frontend
copy .env.example .env
npm install
npm run dev
```

Frontend: http://localhost:5173  
API health: http://localhost:5000/health  

Leave `VITE_API_URL` empty in local `.env` so Vite proxies `/api` to the backend.

## Cloud deployment

1. **Domain / DNS**  
   Point `www` and apex to the frontend host (Vercel/Netlify). Add `api.Raxio.com` as a CNAME to the backend host.

2. **SSL**  
   Enable the host-managed certificate. Force HTTPS.

3. **MongoDB Atlas**  
   Create a cluster, database user, and IP allowlist (`0.0.0.0/0` only if the host has no static IP; prefer the host egress IPs). Connection string goes in `MONGODB_URI`.

4. **Backend env**  
   `PORT`, `MONGODB_URI`, `CLIENT_ORIGIN` (comma-separated production frontend URLs), SMTP fields, `NOTIFY_EMAIL`.

5. **Frontend env**  
   `VITE_API_URL=https://api.Raxio.com` (no trailing slash).

6. **CORS**  
   Backend allows only `CLIENT_ORIGIN`. Do not use `*` in production.

7. **CI/CD**  
   Connect the Git repo. Frontend builds on push to `main`. Backend auto-deploys from the `backend/` directory. Preview deploys stay on feature branches.

8. **Backups**  
   Atlas continuous backup / snapshot schedule. Export inquiries periodically if needed.

9. **Monitoring**  
   Backend `/health` for uptime checks. Atlas alerts for disk/connections. Frontend host analytics later (Phase 2).

10. **Scale later**  
    Add a CDN cache for the static site, move the API behind a process manager, and introduce a queue if email volume grows.

## Security

- No API keys or Mongo URIs in source
- Helmet, JSON size limit, rate limiting on `/api/inquiries`
- Server-side validation with express-validator
- CORS allowlist

## Phase map

- **Phase 1 (this repo):** marketing site + inquiry API + SEO + deploy
- **Phase 2:** richer motion, long-form case studies, blog, testimonials, CMS, analytics
- **Phase 3:** client dashboard, lead CRM, email workflows, observability
