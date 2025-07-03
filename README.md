# Portfolio

A sleek, dark-themed portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and modern UI components.

![Portfolio Preview](https://raw.githubusercontent.com/nayandas69/modern-portfolio/refs/heads/main/public/Demo.png?auto=compress&cs=tinysrgb&w=1200)

## Features

- [x] **Modern Dark Theme** - Sleek dark color palette with gradient accents
- [x] **Responsive Design** - Optimized for all devices and screen sizes
- [x] **Smooth Animations** - Powered by Framer Motion for fluid interactions
- [x] **Interactive Components** - Custom cursor, particle background, hover effects
- [x] **Project Showcase** - Filterable project gallery with detailed modals
- [x] **Experience Timeline** - Interactive vertical timeline with animations
- [x] **Contact Form** - Validated contact form with React Hook Form
- [x] **Performance Optimized** - Fast loading with modern build tools
- [x] **Accessibility Ready** - WCAG compliant with proper semantic markup
- [x] **SEO Friendly** - Optimized meta tags and structure

## Tech Stack

| Technology | Purpose | Version |
|-----------|----------|---------|
| React | Frontend Framework | ^19.1.0 |
| TypeScript | Type Safety | ~5.8.3 |
| Tailwind CSS | Styling | ^3.4.0 |
| Framer Motion | Animations | ^11.0.0 |
| Phosphor React | Icons | ^1.4.1 |
| React Hook Form | Form Handling | ^7.48.2 |
| Vite | Build Tool | ^7.0.0 |

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nayandas69/modern-portfolio.git
   cd modern-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

> [!TIP]
> Use `npm run build` to create a production build and `npm run preview` to preview it locally.

## Customization Guide

### Personal Information

Update your personal details in the following components:

#### Hero Section (`src/components/Hero.tsx`)
```typescript
// Update name, title, and description
<h1>Your Name</h1>
<h2>Your Professional Title</h2>
<p>Your professional description...</p>

// Update profile image
<img src="your-profile-image-url" alt="Your Name" />
```

#### Contact Information (`src/components/Contact.tsx`)
```typescript
const contactInfo = [
  {
    icon: Envelope,
    label: 'Email',
    value: 'your-email@example.com',
    href: 'mailto:your-email@example.com',
  },
  // Update phone and location
];
```

### Projects Data

Modify your projects in `src/components/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Brief description',
    longDescription: 'Detailed description...',
    image: 'project-image-url',
    technologies: ['React', 'Node.js', 'etc'],
    category: 'web', // web, mobile, design, ai
    githubUrl: 'your-github-repo-url',
    liveUrl: 'your-live-demo-url',
    featured: true, // or false
  },
  // Add more projects...
];
```

### Experience Timeline

Update your work experience in `src/components/Experience.tsx`:

```typescript
const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Your Company',
    position: 'Your Position',
    duration: '2022 - Present',
    location: 'City, State',
    description: ['Achievement 1', 'Achievement 2'],
    logo: 'company-logo-url',
    current: true,
  },
  // Add more experiences...
];
```

### Color Scheme

Customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
    500: '#your-primary-color',
  },
  accent: {
    // Your accent color palette
    500: '#your-accent-color',
  },
}
```

### Social Links

Update social media links in:
- `src/components/Hero.tsx` (Hero social links)
- `src/components/Footer.tsx` (Footer social links)

```typescript
const socialLinks = [
  { icon: GithubLogo, href: 'your-github-url', label: 'GitHub' },
  { icon: LinkedinLogo, href: 'your-linkedin-url', label: 'LinkedIn' },
  { icon: TwitterLogo, href: 'your-twitter-url', label: 'Twitter' },
];
```

## Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

> [!NOTE]
> For GitHub Pages, you may need to configure the base URL in `vite.config.ts` for proper asset loading.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

The project includes:
- **ESLint** - Code linting and formatting
- **TypeScript** - Type checking
- **Prettier** - Code formatting (recommended to add)

> [!CAUTION]
> Always test your changes in both development and production builds before deploying.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Pexels](https://pexels.com) for stock images
- [Phosphor Icons](https://phosphoricons.com) for beautiful icons
- [Framer Motion](https://framer.com/motion) for smooth animations
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling

## Support

If you have any questions or need help customizing the portfolio:

- Email: alex@example.com
- GitHub Issues: [Create an issue](https://github.com/nayandas69/modern-portfolio/issues)

⭐ **Star this repository if it helped you build an amazing portfolio!**
