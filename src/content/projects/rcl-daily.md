---
title: "RCL Daily"
description: "A minimalist Progressive Web App for daily liturgical readings from the Revised Common Lectionary with offline Bible access"
date: 2026-01-23
category: "personal"
tags: ["Astro", "React", "TypeScript", "PWA", "IndexedDB"]
demoUrl: "https://lectionary-daily.pages.dev/"
githubUrl: "https://github.com/jimmyliuzg/lectionary_daily"
---

## Overview
RCL Daily is a clean, distraction-free Progressive Web App designed for liturgical reading. It provides immediate access to daily readings from the Revised Common Lectionary while silently hydrating a full offline-capable Berean Standard Bible in the background.

## Key Features
- **Today View**: Instant access to current day's readings with swipe/scroll navigation for adjacent days
- **Full Bible Access**: Complete Berean Standard Bible with book/chapter navigation and search
- **Liturgical Calendar**: Visual calendar for selecting readings by specific dates
- **Offline-First**: Service Worker caching and IndexedDB storage for complete offline capability
- **Typography-Focused**: Minimalist design prioritizing readability across light and dark modes

## Technical Implementation
- **Frontend**: Astro 5 with React 18 and TypeScript
- **Data Storage**: IndexedDB with background hydration strategy
- **PWA Features**: Service Worker for offline functionality and installability
- **Deployment**: Cloudflare Pages with edge optimization
- **Bible Data**: Berean Standard Bible (public domain)

## Design Philosophy
Built with a "Database-in-a-Worker" strategy, RCL Daily prioritizes immediate access to readings while progressively enhancing with full Bible data in the background. The interface is intentionally minimal, removing all distractions to focus solely on the text.
