---
title: "bibcli"
description: "Search library catalogs and check per-branch availability from your terminal — a single command over the public BiblioCommons API. JSON by default, agent-friendly."
date: 2026-08-21
category: "technical"
tags: ["Python", "CLI", "BiblioCommons", "JSON"]
githubUrl: "https://github.com/jimmyliuzg/bibcli"
---

## Overview
Wanted an easier way for an AI agent to search libraries. `bibcli` turns the public BiblioCommons catalog API into a single command: search, get per-branch availability, list branches. No scraping. No auth. Works with any BiblioCommons library.

```bash
bibcli search "the manager's path" --lib aclibrary
bibcli status S163C2272584 --lib aclibrary
bibcli branches --lib aclibrary
```

## Key Features
- **Search** — Smart, title, author, subject, or keyword; ISBN works too
- **Availability** — Per-copy branch, call number, due date, and status
- **Details** — Full record metadata for one or many records
- **Multi-library** — One config entry per library; defaults ship for AC Library, SFPL, Boston Public, Chicago Public, and more
- **Holds & checkouts** — List, place, cancel, and renew with a library card
- **Agent-friendly** — Stable JSON output, retries with backoff, no interactive prompts
