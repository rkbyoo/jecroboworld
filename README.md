# JEC RoboWorld - Official Website

A modern, responsive website for the JEC RoboWorld robotics club, Built with React, TypeScript, and Tailwind CSS.

##  About JEC RoboWorld

JEC RoboWorld is the robotics club at Jorhat Engineering College, dedicated to pioneering the future of robotics through innovation, education, and competitive excellence.

##  Features

- **Modern Design**: Clean, professional interface with a robotics-themed yellow, black, grey, and white color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and hover effects
- **Multi-page Navigation**: Comprehensive navigation with dedicated pages for different sections
- **Alumni Management**: Dedicated alumni section with contact information
- **Event Showcase**: Dynamic events display with detailed information
- **Team Profiles**: Member profiles with rounded image frames
- **Gallery**: Image gallery showcasing club activities and achievements
- **Timeline**: Interactive timeline of club milestones
- **Tutorials**: Educational resources and tutorials

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.19
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui with Radix UI primitives
- **Routing**: React Router DOM 6.30.1
- **State Management**: TanStack React Query 5.83.0
- **Icons**: Lucide React 0.462.0
- **Form Handling**: React Hook Form 7.61.1
- **Animations**: Tailwind CSS Animate
- **Charts**: Recharts 2.15.4

## 📁 Project Structure

```
src/
├── assets/           # Static assets (images, documents)
│   ├── alumni/       # Alumni photos
│   ├── event/        # Event images
│   ├── logo/         # Club logos
│   ├── members/      # Member photos
│   ├── projects/     # Project images
│   └── timeline/     # Timeline images
├── components/       # Reusable React components
│   ├── cards/        # Card components (AlumniCard, MemberCard, etc.)
│   ├── layout/       # Layout components (Header, Footer)
│   ├── sections/     # Page sections (Hero, TeamsSection, etc.)
│   └── ui/           # shadcn/ui components
├── data/             # JSON data files
│   ├── alumni.json   # Alumni information
│   ├── events.json   # Events data
│   ├── members.json  # Team members data
│   ├── teams.json    # Teams information
│   └── ...          # Other data files
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Page components
│   ├── HomePage.tsx
│   ├── AlumniPage.tsx
│   ├── TeamPage.tsx
│   ├── EventsPage.tsx
│   └── ...
└── styles/           # Global styles and CSS
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jecroboworld
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080/` to view the website

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

##  Pages

- **Home** (`/`) - Landing page with hero section and overview
- **Events** (`/events`) - Upcoming and past events
- **Team** (`/team`) - Current and past team members
- **Achievements** (`/achievements`) - Club accomplishments and awards
- **Timeline** (`/timeline`) - Club history and milestones
- **Gallery** (`/gallery`) - Photo gallery of activities
- **Alumni** (`/alumni`) - Alumni directory with contact information
- **Tutorials** (`/tutorials`) - Educational resources
- **About** (`/about`) - About the club and its mission

##  Design System

The website uses a consistent design system with:

- **Primary Color**: Yellow (#FFFF00) - Robotics theme
- **Secondary Colors**: Black, Grey, White
- **Typography**: Clean, modern fonts
- **Components**: Rounded corners, subtle shadows, smooth transitions
- **Responsive Breakpoints**: Mobile-first approach

##  Data Management

The website uses JSON files in the `src/data/` directory for content management:

- Easy to update without code changes
- Structured data format
- Supports dynamic content loading
- Maintainable by non-technical team members

## 🔧 Customization

### Adding New Members
1. Add member photo to `src/assets/members/`
2. Update `src/data/members.json` with member information

### Adding New Events
1. Add event images to `src/assets/event/`
2. Update `src/data/events.json` with event details

### Updating Alumni
1. Add alumni photos to `src/assets/alumni/`
2. Update `src/data/alumni.json` with contact information

## 🚀 Deployment

The project can be deployed to any static hosting service:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service of choice:
   - Vercel
   - Netlify
   - GitHub Pages
   - Firebase Hosting
   - AWS S3

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Contact



