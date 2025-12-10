# Portfolio - Md. Sawrab

A modern, responsive portfolio website showcasing my work as a Full Stack Developer and Android Developer. Built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- ⚡ **Next.js 15** with Turbopack for blazing-fast development
- 🎨 **TailwindCSS 4** for modern, responsive styling
- ✨ **Framer Motion** for smooth animations and transitions
- 🌓 **Dark Mode** support
- 📱 **Fully Responsive** - looks great on all devices
- 🎯 **SEO Optimized** with structured data
- 🚀 **Static Export** ready for GitHub Pages deployment

## 📦 Tech Stack

- **Framework:** Next.js 15.5.5
- **Language:** TypeScript
- **Styling:** TailwindCSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Fonts:** Montserrat & Open Sans

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/md-sawrab/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.tsx          # Hero section
│   │   │   ├── Skills.tsx        # Skills/Tech stack
│   │   │   ├── Experience.tsx    # Work experience
│   │   │   ├── Certificate.tsx   # Certifications
│   │   │   ├── Projects.tsx      # Project showcase
│   │   │   └── Contact.tsx       # Contact form
│   │   ├── ui/
│   │   │   └── SectionHeader.tsx # Reusable section header
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Footer.tsx            # Footer
│   │   └── ScrollToTop.tsx       # Scroll to top button
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
└── public/
    └── images/                   # Static images
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section:** Edit `src/app/components/home/Hero.tsx`
2. **Skills:** Modify `skillsData` in `src/app/components/home/Skills.tsx`
3. **Experience:** Update `experienceData` in `src/app/components/home/Experience.tsx`
4. **Certificates:** Edit `certificatesData` in `src/app/components/home/Certificate.tsx`
5. **Projects:** Modify `projects` array in `src/app/components/home/Projects.tsx`

### Social Links

Update social links in:
- `src/app/components/home/Hero.tsx`
- `src/app/components/Footer.tsx`

## 🚀 Deployment

### GitHub Pages

This project is configured for static export. To deploy:

1. Build the project:
```bash
npm run build
```

2. The static files will be in the `out` directory

3. Deploy to GitHub Pages or any static hosting service

### Vercel

Deploy with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/md-sawrab/Portfolio)

## 📧 Contact

- **Email:** techsohez@gmail.com
- **GitHub:** [@md-sawrab](https://github.com/md-sawrab)
- **LinkedIn:** [Md. Sawrab](https://www.linkedin.com/in/sohez/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Md. Sawrab
