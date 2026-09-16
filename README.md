# Haythem Adnani — Portfolio

Personal portfolio for Haythem Adnani, Computer Science Engineering student at ENIT, focused on cybersecurity, artificial intelligence, security automation, and applied software engineering.

## Tech stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Main content

Portfolio content is centralized in:

```text
lib/portfolio-data.ts
```

The current CV is stored at:

```text
public/assets/haythem-adnani-resume.pdf
```

The hero portrait is stored at:

```text
public/assets/haythem-adnani-portrait.png
```

and update `PORTRAIT.current` in `lib/portfolio-data.ts` if you use another filename.

## Contact form

Copy `.env.example` to `.env.local` and configure the required environment variables.

## GitHub + Vercel

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Import the repository into Vercel. Future pushes to `main` can then trigger automatic deployments.
