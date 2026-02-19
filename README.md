# RamRamGroup Corporate Website

A modern, production-ready corporate website for RamRamGroup built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![RamRamGroup Website](./public/og-image.jpg)

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Rich Animations**: Smooth page transitions and micro-interactions with Framer Motion
- **Contact Form**: Client-side form with EmailJS integration
- **Responsive Design**: Full mobile, tablet, and desktop support
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Meta tags, Open Graph, sitemap, and robots.txt
- **Performance**: Optimized images, lazy loading, and code splitting
- **Dark Theme**: Stunning futuristic dark theme with aurora effects

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with global metadata
│   ├── page.tsx             # Homepage
│   ├── about/page.tsx       # About Us page
│   ├── contact/page.tsx     # Contact page
│   ├── realestate/page.tsx  # Real Estate vertical
│   ├── restaurant/page.tsx  # Restaurant vertical
│   ├── salon/page.tsx       # Salon vertical
│   ├── education/page.tsx   # Education vertical
│   ├── cafe/page.tsx        # Café vertical
│   ├── agriculture/page.tsx # Agriculture vertical
│   ├── sitemap.ts           # Dynamic sitemap generation
│   └── robots.ts            # Robots.txt configuration
├── components/
│   ├── Navbar.tsx           # Global navigation
│   ├── Footer.tsx           # Global footer
│   ├── HeroVideoLayer.tsx   # Hero section with video
│   ├── VerticalCard.tsx     # Business vertical cards
│   ├── VerticalGallery.tsx  # Media gallery with lightbox
│   ├── ServiceCard.tsx      # Service display cards
│   ├── MotionWrapper.tsx    # Animation wrapper
│   ├── SectionHeading.tsx   # Section headings
│   ├── ContactForm.tsx      # Contact form with EmailJS
│   ├── StatsCounter.tsx     # Animated statistics
│   ├── TestimonialsCarousel.tsx # Testimonials slider
│   └── VerticalPageTemplate.tsx # Template for vertical pages
├── lib/
│   ├── animations.ts        # Framer Motion variants
│   └── fetchImages.ts       # Image utilities
├── styles/
│   └── globals.css          # Global styles and theme
└── public/
    └── [assets]             # Static assets
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [EmailJS](https://www.emailjs.com/) | Email integration |

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ramramgroup/website.git
   cd ramramgroup-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone (optional)
   - `{{message}}` - Message content
4. Copy your credentials to `.env.local`

## 🏗️ Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Static Export (Optional)
```bash
npm run build
# Output in .next folder
```

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Node.js Server
1. Build the project: `npm run build`
2. Start: `npm start`
3. Use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start npm --name "ramramgroup" -- start
   ```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🎨 Customization

### Theme Colors
Edit `src/styles/globals.css` to customize the color palette:

```css
:root {
  --accent-cyan: #00f5d4;
  --accent-blue: #3a86ff;
  --accent-purple: #8338ec;
  --accent-pink: #ff006e;
}
```

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Use existing components or create new ones

### Adding New Components
1. Create component in `src/components/`
2. Export and import where needed
3. Add animation variants in `src/lib/animations.ts`

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| Mobile | < 640px |
| Tablet | 640px - 1024px |
| Desktop | > 1024px |

## ♿ Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management
- Reduced motion support
- Screen reader compatible
- Color contrast compliance

## 🔍 SEO Features

- Dynamic meta tags per page
- Open Graph and Twitter cards
- Automatic sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Image alt texts

## 📊 Performance

- Lazy loading images and videos
- Code splitting with Next.js
- Optimized fonts (next/font)
- Compressed assets
- Preload critical resources

## 📄 License

This project is proprietary. All rights reserved by RamRamGroup.

## 📞 Support

For support or inquiries:
- Email: support@ramramgroup.com
- Phone: +91 22 1234 5678

---

Built with ❤️ by RamRamGroup Development Team
