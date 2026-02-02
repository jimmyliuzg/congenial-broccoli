---
title: "2026 Oscars Watch Party"
description: "An elegant, interactive web app for tracking Academy Award nominations and making predictions with dual password security"
date: 2026-01-30
category: "personal"
tags: ["Astro", "React", "TypeScript", "Framer Motion", "OMDb API"]
demoUrl: "https://oscars-2026.pages.dev/"
githubUrl: "https://github.com/jimmyliuzg/oscar2026"
---

## Overview
A sophisticated watch party companion for the 2026 Academy Awards featuring a glamorous design, complete nominations database, and interactive voting system with secure password-protected access.

## Key Features
- **Dual Password System**: Server-side validation with separate guest and public access levels
- **Rich Nominations Browser**: All 24 Oscar categories with integrated movie posters and trailers
- **Interactive Voting**: Full-screen step-by-step prediction interface with progress tracking
- **Party Management**: RSVP system and event details for private watch parties
- **Mobile-First Design**: Responsive and touch-friendly with smooth animations

## Technical Stack
- **Framework**: Astro 5 with server-side rendering
- **Interactive Components**: React 18 with TypeScript and Framer Motion
- **Forms**: React Hook Form with Web3Forms for submissions
- **External APIs**: OMDb API for movie posters and metadata
- **Security**: SHA-256 password hashing with server-side validation
- **Styling**: Tailwind CSS with custom golden/cream theme
- **Deployment**: Cloudflare Pages with environment variable protection

## Design Approach
The application embraces a "red carpet" aesthetic with warm golden accents, elegant serif typography, and smooth transitions. The design balances visual richness with functional clarity, making it both beautiful and highly usable for party attendees.

Security is implemented at the server level using Astro's middleware, ensuring password hashes never reach client-side code while maintaining a smooth user experience.
