# Jimmy's Portfolio Website
This website was built as an experiment in AI-assisted development. The goal was to explore how AI tools can accelerate the creation of modern, production-ready web applications while maintaining design quality and code standards.

## ✨ Features
- Brutalist Design: Bold borders, high contrast, monospace typography
- Content Collections: Markdown-based blog posts and project showcases
- Dark Mode: Seamless theme switching with persistent user preference
- Responsive: Mobile-first design that works on all devices
- Fast: Built with Astro for speed
- Type-Safe: Content schemas validated with Zod

## 📂 Project Structure
'''
src/
├── components/       # Reusable UI components (Nav, Footer)
├── content/          # Markdown content collections
│   ├── projects/    # Project case studies
│   └── writing/     # Blog posts
├── layouts/         # Page layouts and templates
├── pages/           # Route-based pages
│   ├── index.astro
│   ├── about.astro
│   ├── projects/[slug].astro
│   └── writing/[slug].astro
└── styles/          # Global styles and Tailwind config
'''

## 🎨 Customization
The site's visual design is controlled through tailwind.config.cjs. Key customization points:
- Colors: Edit the color palette for light/dark modes
- Fonts: Modify fontFamily settings (currently using Courier Prime and Inter)
- Content: Add markdown files to src/content/projects/ or src/content/writing/
- For detailed customization instructions, see GUIDE.md.

## 🛠️ Tech Stack
- Astro - Static site framework
- Tailwind CSS - Utility-first CSS framework
- TypeScript - Type safety
- Zod - Content schema validation
- Claude Models through Cursor/Perplexity