# Portfolio - Harshita Verma

A modern, animated React single-page application (SPA) portfolio showcasing projects, skills, and experience. Built with trendy animations and responsive design, ready to deploy on GitHub Pages or any static hosting platform.

## ✨ Features

- **Modern Design**: Dark theme with gradient backgrounds and glassmorphism effects
- **Smooth Animations**: Framer Motion for elegant transitions and interactions
- **Scroll Animations**: AOS (Animate On Scroll) library for scroll-triggered effects
- **Responsive Layout**: Mobile-first design that works on all screen sizes
- **Profile Picture**: Beautiful profile image with floating animation
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Ready**: Optimized meta tags and semantic HTML
- **GitHub Pages Ready**: Pre-configured for deployment on GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download this repository**

   ```bash
   cd portfolio_harshita
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
portfolio_harshita/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Update Portfolio Content

Edit `src/data/portfolio.js` to customize:

- Personal information (name, title, bio)
- Skills and expertise
- Projects and work experience
- Education and certifications
- Contact details

### Update Profile Picture

1. Replace the image URL in `src/components/Hero.jsx` (line ~90)
2. Or add your image to `public/` folder and reference it

### Customize Colors & Animations

- **Colors**: Modify `tailwind.config.js`
- **Animations**: Edit `src/index.css` for keyframes
- **Animation Settings**: Adjust `tailwind.config.js` animation configurations

## 🚀 Deployment

### GitHub Pages

1. **Update `package.json`**:
   - Change `"homepage"` to your GitHub Pages URL
   - Example: `"https://yourusername.github.io/portfolio_harshita"`

2. **Build the project**:

   ```bash
   npm run build
   ```

3. **Deploy** (requires `gh-pages` package):
   ```bash
   npm run deploy
   ```

### Other Hosting Platforms

**Vercel** (Recommended):

1. Connect your repository to Vercel
2. Vercel automatically detects Vite and configures it
3. Deploy with zero configuration

**Netlify**:

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

**GitHub Actions** (Automated):
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "18"
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📦 Dependencies

- **React 18**: UI library
- **Vite**: Build tool & dev server
- **Framer Motion**: Advanced animations
- **Tailwind CSS**: Utility-first CSS framework
- **AOS**: Scroll animations
- **React Icons**: SVG icons
- **React Scroll**: Smooth scrolling

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Build and deploy to GitHub Pages
```

## 🎯 Performance Tips

- Images are lazy-loaded
- Code splitting enabled by default with Vite
- CSS is optimized with Tailwind's PurgeCSS
- Animations use GPU acceleration

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, improve, and submit pull requests.

## 💡 Tips

- Update `index.html` meta tags for better SEO
- Add Google Analytics for tracking
- Consider adding a blog section
- Add dark/light mode toggle
- Implement contact form backend integration

## 📞 Support

For issues or questions, please create an issue in the repository.

---

Built with ❤️ by Harshita Verma
