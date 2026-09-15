---
title: "Mantissa"
description: "Open-source retirement planning engine — test readiness, spending plans, and tax-aware withdrawals under uncertain markets. Interactive web viewer runs the full engine in your browser via Pyodide."
date: 2026-09-15
category: "technical"
tags: ["Python", "Pyodide", "Monte Carlo", "Retirement Planning"]
demoUrl: "https://jimmyliuzg.github.io/mantissa/"
githubUrl: "https://github.com/jimmyliuzg/mantissa"
---

## Overview
Mantissa is an open-source, Python-based retirement planning engine for testing retirement readiness, spending plans, tax-aware withdrawals, and major financial decisions under uncertain markets.

It models household cash flow, account balances, taxes, investment returns, healthcare, Social Security, equity compensation, and retirement risks across deterministic projections, stress scenarios, historical sequences, and Monte Carlo simulations.

## Key Features
- **Account modeling** — Taxable, traditional, Roth, HSA, cash, real-estate, and more
- **Tax-aware withdrawals** — Roth conversion plans, RMDs, capital gains, tax lots, QCD concepts
- **Uncertainty done three ways** — Deterministic stress paths, historical return sequences, Monte Carlo
- **Spending strategies** — Fixed, dynamic, guardrail, percentage-of-portfolio, floor/ceiling
- **Decision traces** — Scenario comparison, sensitivity analysis, charts, PDF/Markdown reports, reproducibility metadata

## Web Viewer
The browser-based viewer runs the full engine client-side via Pyodide — plans never leave your device. Drop in a JSON config, edit typed fields, and watch deterministic projections + Monte Carlo KPIs update live. Deployed to GitHub Pages on every push to `main`.

> Planning software, not tax, legal, investment, or fiduciary advice.
