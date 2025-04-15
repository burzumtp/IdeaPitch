# IdeaPitch

# 🚀 IdeaPitch – Showcase Your Startup Vision

IdeaPitch is a modern platform where aspiring founders can pitch their startup ideas to attract attention from potential investors, mentors, and entrepreneurs. Authenticated via GitHub, users can publish and showcase their ideas in a dynamic, developer-centric environment.

---

## 📸 Demo

> https://idea-pitch.vercel.app/

---

## ✨ Features

- 🔐 **GitHub Authentication** – Seamless login using GitHub OAuth.
- 🧠 **Pitch Creation** – Users can write and publish detailed startup pitches.
- 📡 **Sanity CMS** – Fully integrated headless CMS for storing user-submitted ideas.
- 🧱 **React + Next.js** – Built using the latest Next.js features, including:
  - ⚡ Partial Pre-rendering (PPR)
  - 🔀 Parallel Routing
- 💅 **shadcn/ui** – Elegant, customizable component library for modern UI.
- ✅ **Zod Validation** – Schema-based form validation.
- 🔠 **TypeScript** – Type-safe development experience across the stack.

---

## 🛠️ Tech Stack

| Tech            | Description                       |
| --------------- | --------------------------------- |
| React & Next.js | Frontend framework                |
| TypeScript      | Static typing                     |
| Sanity.io       | Headless CMS (Backend service)    |
| shadcn/ui       | Modern and reusable UI components |
| Zod             | Schema validation for user input  |
| OAuth (GitHub)  | Authentication system             |

---

## 🚧 Project Structure

. ├── components # UI components ├── pages # App routes (includes parallel routes) ├── app # App router (Next.js 13+ features) ├── sanity # Sanity schema and config ├── lib # Utility functions, API handlers ├── types # TypeScript types ├── zod-schemas # Form validation schemas
