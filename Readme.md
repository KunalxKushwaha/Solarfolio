# Cosmic Portfolio — a 3D interactive universe

A cinematic portfolio built with Next.js 15, React Three Fiber, GSAP, Lenis and Tailwind. Each section of the site is a planet in a solar system, and scrolling flies the camera from planet to planet.

## Stack

Next.js 15 (App Router) · TypeScript · TailwindCSS · Three.js · @react-three/fiber · @react-three/drei · @react-three/postprocessing · GSAP · Framer Motion · Lenis · React Icons · custom GLSL shaders.

## Getting started

```bash
git clone <this-repo>
cd cosmic-portfolio
cp .env.example .env.local
npm install
npm run dev
```

Then open http://localhost:3000.

## Add your assets

Place these files in `public/`:

- `public/audio/ambient.mp3` — ambient space music (looped)
- `public/resume.pdf` — your resume
- `public/og.jpg` — social share image (1200×630)

## Customize your content

All content lives in `lib/data.ts` — edit `PROFILE`, `ABOUT`, `TECH`, `PROJECTS`, `EXPERIENCE`, `STRENGTHS`, `CERTIFICATIONS`, and `ACHIEVEMENTS`. Planet layout & colors are in `lib/planets.config.ts`.

## Wire the contact form

`components/sections/ContactPanel.tsx` currently fakes the submit. Swap in your endpoint (Resend, Formspree, a Next.js Route Handler, etc.).

## Deploy

Works out of the box on Vercel:

```bash
vercel
```

Or any Node host that supports Next.js 15.

## Performance notes

- Mobile devices automatically get lower particle counts and disable chromatic aberration.
- `AdaptiveDpr` scales the render resolution when the framerate drops.
- The WebGL scene is a dynamic import with `ssr: false` so it never blocks the initial HTML.
- All textures/geometries are procedural — no image downloads required.
- `prefers-reduced-motion` is respected via `globals.css`.

## Folder structure

See top of this file.

## License

MIT — do whatever you want, credit appreciated.
