---
title: "The Infrastructure Beneath the Work"
description: "Today was about fixing the things that let the real work happen."
date: 2026-08-01
theme: "The Infrastructure Beneath the Work"
tags: ["infrastructure", "debugging", "open-source", "financial-engineering", "usb-hardware"]
---

There's a particular irony to discovering that your entire test suite has been silently broken since the last major refactor. Twenty-two test files, all failing at import time, because one eager import chain reaches for a PDF library that isn't installed. The tests don't crash with a helpful error — they just never collect. You run `pytest` and the number that matters most is the one you never see: zero. *Everything passes* because nothing runs.

This was the starting point for a marathon session on a financial planning engine — a retirement simulator that models taxes, RMDs, healthcare costs, and portfolio projections across decades. The project had accumulated an audit's worth of findings: two critical correctness bugs, five high-priority issues, and a handful of medium-severity problems. But none of the fixes could be verified because the test infrastructure was dead. **The first act of repair was always going to be unblocking the tests.**

The fix was a classic Python pattern — lazy imports with `try/except ImportError` around the optional dependencies. Ten minutes of work, but it unlocked everything that followed. Suddenly 22 test files collected. Suddenly you could see which tests passed, which failed, and most importantly, which ones *didn't exist yet*. The audit had identified critical bugs: RMD surpluses vanishing into the void, pre-tax accounts being forced into distributions based on the wrong spouse's age, bond returns double-counting inflation in real-dollar mode. Each fix required understanding not just what was broken, but *why the code believed it was doing the right thing*. The RMD surplus code had a docstring that described a redistribution algorithm — a feature the code never actually implemented. **The documentation was aspirational.** The implementation was a cap-and-discard.

By the end of the session, 435 tests were passing. Critical bugs had owner-aware account models, proper surplus handling, and allocation-aware deterministic projections. The optimizer's feasibility evaluation was wired into candidate selection. It was the kind of progress that feels invisible from the outside — no new features, no flashy UI — but the engine underneath was fundamentally more correct. The kind of work where "the spreadsheet doesn't change" is actually the point.

---

A completely different kind of infrastructure problem surfaced in the afternoon: a gaming mouse that couldn't stay connected. The wireless receiver was enumerating, working briefly, then disappearing from the USB bus — cycling through device numbers like a restless commuter changing trains. Twenty-six disconnect cycles in five minutes. The dmesg log was a wall of `USB disconnect` and `new high-speed USB device` lines, each one a tiny drama of enumeration and abandonment.

The root cause was almost elegant in its simplicity: **USB auto-suspend was set to two seconds.** The kernel's power management was putting the wireless receiver to sleep after two seconds of idle time, which caused it to drop off the bus, which triggered a re-enumeration, which woke it up, which started the cycle again. The fix was a single udev rule — two lines of text that told the kernel "don't put this particular device to sleep." But finding those two lines required tracing through USB topology, checking power management states, counting dmesg events, and cross-referencing against a decade-old GitHub repository about PixArt mouse quirks. The infrastructure problem was invisible until someone looked at the logs.

---

The day's third act was almost the opposite — not fixing infrastructure, but *installing* it. A code knowledge graph tool got wired up across the development environment: installed via package manager, connected to three different AI coding agents, and initialized against the financial planning project. The index built in 164 milliseconds — 61 files parsed into 1,265 nodes and 3,328 edges. What used to require file-by-file exploration now resolves in a single tool call. It's the kind of upgrade that doesn't change what you can build, but changes how fast you can understand what you've already built.

**Every session today was, at its core, about the same thing: making the existing work visible and correct.** The test suite that wasn't running, the USB device that couldn't stay connected, the codebase that agents had to rediscover from scratch each time. None of these were features. None of them would show up in a product roadmap. But they're the reason the real work can happen at all — the plumbing beneath the kitchen, the foundation beneath the house. Fix the tests, fix the hardware, install the graph, and then — and only then — can you do the thing you actually sat down to do.
