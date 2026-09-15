---
title: "GovTech CA"
description: "Personal Bay Area civic-tech job board — polls gov and civic-tech listings, filters to remote or CA Bay Area, matches against my resume, and emails only on new matches. Static site rebuilt weekly."
date: 2026-08-28
category: "personal"
tags: ["Python", "Cloudflare Pages", "Job Board", "Civic Tech"]
demoUrl: "https://govtech-ca.pages.dev/"
---

## Overview
A personal civic-tech job scraper for Bay Area + remote roles. Polls the CivicWorkStudio board plus registry secondaries (Code for America, Recidiviz, Nava PBC, Skylight, Truss, USDR) and the All Tech Is Human Responsible Tech board, keyword-matches against a TPM / data / ML-ops resume, and emails only when there are new matches.

## How It Works
1. **Poll** — CivicWorkStudio API + registry secondaries + ATIH Airtable board
2. **Filter** — Remote or CA Bay Area only (explicitly excludes LA/Long Beach)
3. **Match** — Broad keyword matcher today; local LLM embeddings planned
4. **Publish** — Static site rebuilt weekly via GitHub Actions, served on Cloudflare Pages
5. **Notify** — Email only on new matches, designed to run as a cron job
