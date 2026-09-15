---
title: "README"
created: 2026-03-27
tags: [Work]
---

# Congenial Broccoli - Portfolio Site

A personal portfolio and blog built with [Astro](https://astro.build), [React](https://reactjs.org), and [Tailwind CSS](https://tailwindcss.com). Created with [Google Antigravity](https://antigravity.google). The goal is to explore how AI tools can accelerate the creation of modern, production-ready web applications while maintaining design quality and code standards.

## 🚀 Features

- **Performance**: Static site generation (SSG) for blazing fast load times.
- **Styling**: Brutalist design aesthetic using Tailwind CSS.
- **Content**: Markdown-based content collections for Projects and Writing.
- **Deployment**: Optimized for Cloudflare Pages.

## 🛠️ Tech Stack

- **Framework**: Astro 5
- **UI Integrations**: React 18
- **Styling**: Tailwind CSS
- **Adapter**: @astrojs/cloudflare

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally, before deploying |

## 📦 Deployment

This project is a static Astro site hosted on **GitHub Pages**
(`https://jimmyliuzg.github.io/`).

Deploys run automatically via `.github/workflows/deploy.yml`
(build + `actions/deploy-pages`) on every push to `main`.