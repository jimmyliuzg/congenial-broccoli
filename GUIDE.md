# Website Guide Book

Welcome to your portfolio website! This is an **Astro**-based site with a brutalist design aesthetic. Here's everything you need to know to customize and maintain it.

---

## 📁 Project Structure Overview

```
congenial-broccoli/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Nav.astro      # Navigation bar
│   │   └── Footer.astro   # Footer component
│   ├── content/           # Content collections (your posts!)
│   │   ├── config.ts      # Content schema definitions
│   │   ├── projects/      # Project markdown files
│   │   └── writing/       # Blog post markdown files
│   ├── layouts/           # Page layouts
│   │   └── BaseLayout.astro  # Main layout wrapper
│   ├── pages/             # Route pages (URLs)
│   │   ├── index.astro    # Homepage (/)
│   │   ├── about.astro    # About page (/about)
│   │   ├── projects.astro # Projects listing (/projects)
│   │   ├── writing.astro  # Writing listing (/writing)
│   │   ├── contact.astro  # Contact page (/contact)
│   │   ├── projects/[slug].astro  # Individual project pages
│   │   └── writing/[slug].astro   # Individual blog post pages
│   └── styles/
│       └── global.css     # Global CSS (Tailwind imports)
├── public/                # Static assets (images, favicon, etc.)
├── tailwind.config.cjs    # Tailwind CSS configuration
├── astro.config.mjs       # Astro configuration
└── package.json           # Dependencies and scripts
```

---

## 🎨 Design & Styling

### Primary Styling Files

#### 1. **`tailwind.config.cjs`** - Main Design Configuration
This is your **primary design control center**. Here you can:

- **Change Colors**: Edit the `brutal` color palette:
  ```javascript
  colors: {
    brutal: {
      bg: '#FFFFFF',           // Light mode background
      text: '#000000',         // Light mode text
      'dark-bg': '#0A0A0A',    // Dark mode background
      'dark-text': '#F5F5F5',  // Dark mode text
    },
  }
  ```

- **Change Fonts**: Modify the font families:
  ```javascript
  fontFamily: {
    mono: ['Courier Prime', 'monospace'],  // Monospace font
    sans: ['Inter', 'sans-serif'],         // Sans-serif font
  }
  ```

- **Add Custom Colors**: Add new color schemes or extend existing ones

#### 2. **`src/layouts/BaseLayout.astro`** - Global Layout & Fonts
- Controls the overall page structure (HTML, head, body)
- Contains Google Fonts imports (Courier Prime & Inter)
- Manages dark mode toggle functionality
- Sets global body classes and styling

#### 3. **`src/styles/global.css`** - Global Styles
- Currently just imports Tailwind CSS
- Add custom CSS here if you need styles that Tailwind can't handle

#### 4. **Individual Page Files** - Page-Specific Styling
Each page in `src/pages/` uses Tailwind utility classes directly:
- `index.astro` - Homepage styling
- `about.astro` - About page styling
- `projects.astro` - Projects listing styling
- `writing.astro` - Writing listing styling

**To change styling on a specific page**, edit the Tailwind classes in that page's `.astro` file.

#### 5. **Component Files** - Reusable Component Styling
- `src/components/Nav.astro` - Navigation bar styling
- `src/components/Footer.astro` - Footer styling (update social links and copyright name here)

---

## ✍️ Adding New Content

### Adding New Blog Posts (Writing)

1. **Create a new markdown file** in `src/content/writing/`
   - Filename: `your-post-name.md` (the filename becomes the URL slug)
   - Example: `my-awesome-post.md` → URL: `/writing/my-awesome-post`

2. **Add frontmatter** at the top of the file:
   ```markdown
   ---
   title: "Your Post Title"
   description: "A brief description of your post"
   date: 2026-01-20
   ---
   ```

3. **Write your content** in Markdown below the frontmatter:
   ```markdown
   ## Introduction
   Your content here...
   
   ## Section 1
   More content...
   ```

4. **View your post**: Navigate to `/writing/your-post-name` in your browser

**Example**: See `src/content/writing/example-post.md` for reference

---

### Adding New Projects

1. **Create a new markdown file** in `src/content/projects/`
   - Filename: `project-name.md` → URL: `/projects/project-name`

2. **Add frontmatter** with project details:
   ```markdown
   ---
   title: "Project Name"
   description: "Brief project description"
   date: 2026-01-20
   thumbnail: "/assets/project-image.png"  # Optional: path to image in public/
   tags: ["JavaScript", "React", "Design"]  # Optional: array of tags
   demoUrl: "https://your-demo-url.com"     # Optional: demo URL
   githubUrl: "https://github.com/you/repo" # Optional: GitHub URL
   liveUrl: "https://your-live-site.com"    # Optional: live site URL
   ---
   ```

3. **Write your project content** in Markdown:
   ```markdown
   ## Overview
   Project description...
   
   ## Technical Stack
   - Technology 1
   - Technology 2
   
   ## Key Features
   - Feature 1
   - Feature 2
   ```

4. **View your project**: Navigate to `/projects/project-name` in your browser

**Example**: See `src/content/projects/example-project.md` for reference

---

## 🔧 Other Important Files

### `src/content/config.ts`
- Defines the schema (structure) for your content collections
- If you want to add new fields to projects or writing posts, edit the schema here
- Uses Zod for validation

### `src/components/Nav.astro`
- Navigation menu
- Edit `navLinks` array to add/remove/modify navigation items
- Contains your site name/title (currently `[YOUR NAME]`)

### `src/components/Footer.astro`
- Footer component (appears on all pages)
- Update social media links (LinkedIn, GitHub, Email)
- Update copyright name

### `src/pages/index.astro`
- Homepage content
- Contains hero section, featured projects, and recent writing
- Edit the tagline, bio, and resume link here

### `src/pages/about.astro`
- About page content
- Edit your bio, skills, and timeline here

### `astro.config.mjs`
- Astro configuration
- Update `site: 'https://yourname.com'` with your actual domain when deploying

---

## 🚀 Development Commands

```bash
npm run dev      # Start development server (usually http://localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

---

## 🎯 Quick Customization Checklist

- [ ] Update your name in `src/components/Nav.astro` (line 14)
- [ ] Update social links in `src/components/Footer.astro` (LinkedIn, GitHub, Email)
- [ ] Update homepage content in `src/pages/index.astro` (tagline, bio, resume link)
- [ ] Update about page in `src/pages/about.astro` (bio, skills, timeline)
- [ ] Update contact page in `src/pages/contact.astro` (links, email, optional form)
- [ ] Change colors in `tailwind.config.cjs` if desired
- [ ] Update site URL in `astro.config.mjs`
- [ ] Add your projects to `src/content/projects/`
- [ ] Add your blog posts to `src/content/writing/`
- [ ] Replace favicon in `public/favicon.svg`
- [ ] Add images/assets to `public/` folder

---

## 💡 Design Philosophy

This site uses a **brutalist design** with:
- Bold borders (4px black/white)
- High contrast colors
- Monospace fonts
- Dark mode support
- Minimal, functional aesthetics

The design is controlled primarily through Tailwind CSS utility classes. To maintain the brutalist aesthetic, keep:
- Thick borders (`border-4`)
- High contrast
- Bold typography (`font-black`, `font-bold`)
- Simple, geometric layouts

---

## 📝 Content Schema Reference

### Writing Posts Schema
```typescript
{
  title: string        // Required
  description: string  // Required
  date: Date          // Required (format: YYYY-MM-DD)
}
```

### Projects Schema
```typescript
{
  title: string                    // Required
  description: string              // Required
  date: Date                       // Required (format: YYYY-MM-DD)
  thumbnail?: string               // Optional: image path
  tags?: string[]                 // Optional: array of tags
  demoUrl?: string                // Optional: must be valid URL
  githubUrl?: string              // Optional: must be valid URL
  liveUrl?: string                // Optional: must be valid URL
}
```

---

## 🆘 Need Help?

- **Astro Docs**: https://docs.astro.build
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Content Collections**: https://docs.astro.build/en/guides/content-collections/

---

Happy customizing! 🎨
