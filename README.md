# Module Labs

A custom studio website built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, and lazy-loaded Three.js scenes.

## Run locally

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The static production output is `dist/`. Site identity is in `.openai/hosting.json`.

## Content and contact configuration

Edit `src/data.ts` for projects, all pricing packages, services, FAQ answers, email, WhatsApp number (international digits), and social URLs. The email is taken from the supplied Module Labs reference. WhatsApp and social profiles are intentionally unconfigured until real destinations are supplied. WhatsApp entry points open the contact dialog with email as the current contact method; social labels show “Soon.” The project enquiry form opens a prefilled email draft and does not send or store messages.

All eight portfolio entries are clearly labeled studio concepts, not commissioned client work. Three original image assets were generated for these studies. Replace them and the associated descriptions with real client work when available.

## Structure

The page is assembled from separate navigation, hero, portfolio, services, pricing, FAQ, final CTA, footer, and dialog components in `src/components/`. `Scene.tsx` contains the small hero module and final orbit. Motion respects reduced-motion preferences; WebGL rendering pauses offscreen or when the document is hidden and uses a capped pixel ratio. Mobile uses a static accent.

## Verification

Production TypeScript and Vite build. Browser checks cover pricing tabs, accordion behavior, project/contact dialogs, keyboard dismissal, demo cart state, responsive navigation, and mobile overflow.
