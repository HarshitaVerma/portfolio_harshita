# Setup Guide - Portfolio Harshita Verma

This guide will help you set up and customize your portfolio, and deploy it to the web.

## 📋 Prerequisites

Ensure you have the following installed on your computer:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for version control) - [Download here](https://git-scm.com/)

Verify installation:
```bash
node --version
npm --version
git --version
```

## ⚡ Quick Setup (5 minutes)

### Step 1: Navigate to Project Directory
```bash
cd path/to/portfolio_harshita
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

Open `http://localhost:5173` in your browser. You should see your portfolio!

### Step 4: Press Ctrl+C to Stop Server

---

## 🎨 Customization Guide

### Step 1: Update Your Information

Edit `src/data/portfolio.js`:

```javascript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Tagline",
  bio: "Your bio...",
  email: "your@email.com",
  phone: "+91 XXXXXXXXXX",
  location: "Your City, Country",
  // ... rest of data
}
```

### Step 2: Add Your Profile Picture

#### Option A: Use a URL
1. Find your profile picture URL
2. In `src/components/Hero.jsx`, update the image URL:
   ```jsx
   <img
     src="https://your-image-url.com/profile.jpg"
     alt={portfolioData.name}
   />
   ```

#### Option B: Use Local Image
1. Place your image in `public/` folder
2. Reference it in `src/components/Hero.jsx`:
   ```jsx
   <img
     src="/profile.jpg"
     alt={portfolioData.name}
   />
   ```

### Step 3: Update Your Skills

In `src/data/portfolio.js`, update the `skills` array:

```javascript
skills: [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "Tailwind CSS", "etc."]
  },
  // Add more categories...
]
```

### Step 4: Add Your Projects

In `src/data/portfolio.js`, update the `projects` array:

```javascript
projects: [
  {
    title: "Project Name",
    description: "What your project does",
    image: "https://image-url.com/project.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourname/project",
    features: ["Feature 1", "Feature 2"]
  },
  // Add more projects...
]
```

### Step 5: Update Experience & Education

Edit the `experience` and `education` arrays in `src/data/portfolio.js`.

### Step 6: Add Social Links

Update the `socialLinks` array:

```javascript
socialLinks: [
  { icon: 'FaGithub', url: 'https://github.com/yourname', label: 'GitHub' },
  { icon: 'FaLinkedin', url: 'https://linkedin.com/in/yourname', label: 'LinkedIn' },
  // ...
]
```

Available icons: `FaGithub`, `FaLinkedin`, `FaTwitter`, etc.

---

## 🎨 Customizing Appearance

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',      // Change primary color
      secondary: '#1F2937',    // Change secondary color
      accent: '#EC4899',       // Change accent color
    },
  },
},
```

### Modify Animations

Edit `src/index.css` to customize keyframe animations:

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

### Adjust Animation Speed

In components, modify `transition` duration:

```jsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.8 }}  // Change this value
```

---

## 📱 Testing Responsiveness

1. Open developer tools (F12)
2. Click the device toggle toolbar (Ctrl+Shift+M or Cmd+Shift+M)
3. Test on different screen sizes

---

## 🔗 Social Media Links

Update your social links in `src/data/portfolio.js`:

- GitHub: `https://github.com/yourname`
- LinkedIn: `https://linkedin.com/in/yourname`
- Twitter: `https://twitter.com/yourhandle`
- Portfolio: `https://yourportfolio.com`

---

## 🚀 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

Test production build locally:
```bash
npm run preview
```

---

## 📤 Deployment Options

### Option 1: GitHub Pages (Free)

**Prerequisites:**
- GitHub account
- Repository created

**Steps:**

1. Update `package.json` homepage:
```json
"homepage": "https://yourusername.github.io/portfolio_harshita"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

4. In GitHub repo settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Save

Your portfolio is now live at: `https://yourusername.github.io/portfolio_harshita`

### Option 2: Vercel (Recommended, Free)

1. Sign up at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel automatically detects Vite
5. Click "Deploy"

Your portfolio is live instantly!

### Option 3: Netlify (Free)

1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Deploy site"

### Option 4: Firebase Hosting (Free)

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase login
firebase init hosting
```

3. Build and deploy:
```bash
npm run build
firebase deploy
```

---

## 🔄 Automated Deployment with GitHub Actions

The `.github/workflows/deploy.yml` file automates deployment:

**Setup:**
1. Push code to GitHub
2. GitHub Actions automatically builds and deploys
3. Your site updates automatically on every push

**To enable:**
1. Go to GitHub repo Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages`

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Dependencies Issue
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
# Clear cache
rm -rf dist .vite
npm run build
```

### Images Not Showing
- Check image URL is correct
- Ensure image file is in `public/` folder
- For external URLs, check CORS permissions

---

## 📚 Useful Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)

---

## 💡 Pro Tips

1. **Optimize Images**
   - Use compressed images (use [TinyPNG](https://tinypng.com))
   - Use WebP format for better compression

2. **Add Favicon**
   - Create favicon at [favicon.io](https://favicon.io)
   - Place in `public/` folder
   - Update `index.html`: `<link rel="icon" href="/favicon.ico">`

3. **SEO Optimization**
   - Update meta tags in `index.html`
   - Add open graph tags for social sharing
   - Create `sitemap.xml` in `public/`

4. **Email Form**
   - Current form is static
   - Add backend (Firebase, Netlify Forms, etc.)
   - Or use services like [Formspree](https://formspree.io)

5. **Add Analytics**
   - Add Google Analytics to `index.html`
   - Track visitors and behavior

---

## 🎉 You're All Set!

Your portfolio is ready to customize and deploy. Start by editing `src/data/portfolio.js` with your information, then build and deploy!

Need help? Check the main `README.md` file.

Happy coding! 🚀
