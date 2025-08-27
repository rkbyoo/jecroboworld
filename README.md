# JEC RoboWorld - Official Website

A modern, responsive website for the JEC RoboWorld robotics club, built with React, TypeScript, and Tailwind CSS.

## 🤖 About JEC RoboWorld

JEC RoboWorld is the robotics club at Jorhat Engineering College, dedicated to pioneering the future of robotics through innovation, education, and competitive excellence. Founded in 2011 by the Team of Talented Individuals (TTI), we continue to inspire and nurture the next generation of robotics enthusiasts.

## ✨ Features

- **Modern Design**: Clean, professional interface with a robotics-themed yellow, black, grey, and white color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and hover effects
- **Multi-page Navigation**: Comprehensive navigation with dedicated pages for different sections
- **Alumni Management**: Dedicated alumni section with contact information
- **Event Showcase**: Dynamic events display with detailed information and image galleries
- **Team Profiles**: Member profiles with rounded image frames
- **Interactive Image Galleries**: 
  - **Card Swipe Animation**: Skipper UI-powered shuffling cards for event and achievement images
  - **Pinterest-style Gallery Grid**: Masonry layout for browsing multiple images
  - **Modal Image Viewer**: Full-screen image viewing with navigation
- **Timeline**: Interactive timeline of club milestones
- **Tutorials**: Educational resources and tutorials
- **Enhanced Media Support**: Multiple image support for events and achievements with optimized loading

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
- **Smooth Scrolling**: Lenis 1.3.8
- **Image Carousel**: Swiper.js for card swipe animations
- **Image Optimization**: Custom optimized image component with lazy loading


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
│   ├── demo/         # Demo components (CardSwipeDemo)
│   ├── layout/       # Layout components (Header, Footer)
│   ├── sections/     # Page sections (Hero, TeamsSection, etc.)
│   ├── ui/           # shadcn/ui components + custom UI components
│   │   ├── CardSwipe.tsx      # Skipper UI card swipe component
│   │   ├── ImageModal.tsx     # Full-screen image modal
│   │   └── ...               # Other UI components
│   ├── GalleryGrid.tsx       # Pinterest-style gallery component
│   └── OptimizedImage.tsx    # Optimized image component with lazy loading
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
   git clone https://github.com/JEC-RoboWorld/jecroboworld-website.git
   cd jecroboworld-website
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
   Navigate to `http://localhost:5173/` to view the website

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Pages

- **Home** (`/`) - Landing page with hero section and overview
- **Events** (`/events`) - Ongoing and past events
- **Team** (`/members`) - Current and past team members
- **Achievements** (`/achievements`) - Club accomplishments and awards
- **Timeline** (`/timeline`) - Club history and milestones
- **Gallery** (`/gallery`) - Photo gallery of activities
- **Alumni** (`/alumni`) - Alumni directory with contact information
- **Tutorials** (`/tutorials`) - Educational resources
- **About** (`/about`) - About the club and its mission

## 🎨 Design & UI Components

The website uses a consistent design system with:

- **Primary Color**: Yellow (#FFFF00) - Robotics theme
- **Secondary Colors**: Black, Grey, White
- **Typography**: Clean, modern fonts
- **Components**: Rounded corners, subtle shadows, smooth transitions
- **Responsive Breakpoints**: Mobile-first approach

### 🖼️ Interactive Gallery Features

#### Card Swipe Animation (Skipper UI)
- **Component**: `CardSwipe.tsx`
- **Technology**: Swiper.js with card effect
- **Features**:
  - Automatic shuffling/rotation of images
  - Touch/swipe gestures on mobile
  - Smooth card stack animation
  - Configurable autoplay delay
  - Responsive design for all screen sizes

#### Pinterest-style Gallery Grid
- **Component**: `GalleryGrid.tsx`
- **Features**:
  - Masonry-style layout for optimal space usage
  - Click to view full-size images in modal
  - Category filtering support
  - Lazy loading for performance
  - Responsive grid columns

#### Enhanced Event & Achievement Cards
- **Image Count Badges**: Shows number of available images
- **Click Interaction**: Cards with multiple images are clickable
- **Modal Gallery**: Opens card swipe gallery when clicked
- **Optimized Loading**: Priority loading for visible images

## Data Management & Sample Updates

The website uses JSON files in the `src/data/` directory for content management. This makes it easy to update content without modifying code.

### 📝 How to Update Data for Upcoming Years

#### Adding New Events (`src/data/events.json`)
```json
{
  "id": 99,
  "eventName": "Your Event Name",
  "image": "/assets/event/your-event-image.jpg",
  "images": [
    "/assets/event/gallery-image-1.jpg",
    "/assets/event/gallery-image-2.jpg",
    "/assets/event/gallery-image-3.jpg"
  ],
  "description": "Event description here",
  "joiningUrl": "https://forms.google.com/your-form",
  "date": "2025-09-01",
  "status": "upcoming"  or "completed" or "ongoing"
}
```

**New Image Features:**
- `image`: Main cover image for the event card
- `images`: Array of additional images for the gallery (optional)
- Cards with multiple images show an image count badge
- Clicking on cards with images opens an interactive gallery with card swipe animation

#### Adding New Members (`src/data/members.json`)
```json
{
  "id": 99,
  "name": "Member Name",
  "role": "Position/Role",
  "photo": "assets/members/member-photo.jpg",
  "status": "current" or "alumni" 
}
```

#### Adding New Alumni (`src/data/alumni.json`)
```json
{
  "id": 99,
  "name": "Alumni Name",
  "phone": "+91-9876543210",
  "email": "email@example.com",
  "image": "/assets/alumni/alumni-photo.jpg",
  "batch": "2020-2024",
  "currentPosition": "Current Job Position"
}
```

#### Adding Timeline Events (`src/data/timeline.json`)
```json
{
  "id": 99,
  "year": "month and year",
  "eventName": "Event Name",
  "description": "Detailed description of the event",
  "photo": "/assets/timeline/event-photo.jpg"
}
```

#### Adding Achievements (`src/data/achievements.json`)
```json
{
  "id": 99,
  "eventName": "Competition Name",
  "location": "Venue/Institution",
  "position": "1st/2nd/3rd/Winner",
  "year": "2025",
  "description": "Achievement description",
  "images": [
    "/assets/achievements/achievement-image-1.jpg",
    "/assets/achievements/achievement-image-2.jpg",
    "/assets/achievements/achievement-image-3.jpg"
  ]
}
```

**New Image Features:**
- `images`: Array of images showcasing the achievement (optional)
- Achievement cards display image count when multiple images are available
- Interactive gallery with card swipe animation for viewing all achievement photos

### Asset Management

1. **Add images** to the appropriate folders in `src/assets/`
2. **Use consistent naming** (lowercase, hyphens for spaces)
3. **Optimize images** for web (compress before adding)
4. **Update paths** in JSON files to match asset locations

### 📸 Image Gallery Usage

#### For Events with Multiple Images:
1. Add main cover image to `image` field
2. Add gallery images to `images` array
3. Users can click the event card to open the interactive gallery
4. Card swipe animation automatically cycles through images

#### For Achievements with Photos:
1. Add all achievement photos to `images` array
2. Achievement cards show image count badge
3. Click to view all photos in card swipe gallery

#### Image Loading Optimization:
- **Lazy Loading**: Images load as they come into view
- **Priority Loading**: First few images load immediately
- **Responsive Images**: Optimized for different screen sizes
- **Preloading**: Gallery images preload for smooth experience

## Customization

### Quick Updates
- **Contact Information**: Update `src/data/footer.json` and `src/data/contact.json`
- **Social Links**: Modify `src/data/contact.json` and `src/data/footer.json`
- **Logo**: Replace files in `src/assets/logo/` directory

### Design Customization
- **Colors**: Modify `tailwind.config.js` for theme colors
- **Fonts**: Update font imports in CSS files
- **Layout**: Edit components in `src/components/layout/`

## 🚀 Deployment

The project can be deployed to any static hosting service:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service:
   - [Vercel](https://vercel.com/) (Recommended)
   - [Netlify](https://www.netlify.com/)
   - [GitHub Pages](https://pages.github.com/)
   - [Firebase Hosting](https://firebase.google.com/docs/hosting)

## Contributing

We welcome contributions from club members, alumni, and the open-source community! Here's how you can help:

### Types of Contributions

1. **Content Updates**
   - Add new events, achievements, or timeline entries
   - Update member information or alumni details
   - Fix typos or improve descriptions

2. **Bug Fixes**
   - Report and fix UI bugs
   - Resolve responsive design issues
   - Fix broken links or images

3. **Feature Enhancements**
   - Add new sections or pages
   - Improve existing components
   - Add animations or interactive elements

4. **Performance Improvements**
   - Optimize images and assets
   - Improve loading speeds
   - Code refactoring

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/jecroboworld-website.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   # or
   git checkout -b update/content-update
   ```

3. **Make your changes**
   - Follow the existing code style
   - Test your changes locally
   - Update documentation if needed

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new event for 2025"
   # or
   git commit -m "fix: resolve mobile navigation issue"
   # or
   git commit -m "update: add new alumni batch 2024"
   ```

5. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

### Contribution Guidelines

- **Code Style**: Follow existing TypeScript and React patterns
- **Commit Messages**: Use conventional commits (feat:, fix:, update:, docs:)
- **Testing**: Test your changes on different screen sizes
- **Documentation**: Update README.md if adding new features
- **Assets**: Optimize images before adding them

### Quick Content Updates

For club members who want to quickly update content:

1. **Navigate to the data file** you want to update
2. **Edit the JSON** following the existing format
3. **Add any required images** to the assets folder
4. **Create a pull request** with your changes

### 🎯 New Interactive Features Usage

#### Adding Image Galleries to Events:
```json
{
  "eventName": "Your Event",
  "image": "main-cover-image.jpg",
  "images": ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg"],
  // ... other fields
}
```

#### Adding Photos to Achievements:
```json
{
  "eventName": "Competition Name",
  "images": ["trophy-photo.jpg", "team-photo.jpg", "event-photo.jpg"],
  // ... other fields
}
```

#### Interactive Gallery Features:
- **Card Swipe**: Automatic shuffling with smooth animations
- **Touch Gestures**: Swipe on mobile devices
- **Click Navigation**: Click cards to navigate
- **Full Screen**: Modal view for detailed image viewing
- **Responsive**: Works on all device sizes

##  Contact & Support

### JEC RoboWorld Official Contacts
- **Email**: [robowjec@gmail.com](mailto:robowjec@gmail.com)
- **Address**: Jorhat Engineering College, Assam

### Social Media
- **Facebook**: [@jecroboworld](https://www.facebook.com/jecroboworld/)
- **Instagram**: [@roboworld_jec](https://www.instagram.com/roboworld_jec/)
- **LinkedIn**: [JEC RoboWorld](https://www.linkedin.com/company/jec-roboworld/posts/?feedView=all)

### Website Development
- **Developer**: [Rakib Hussain](https://www.linkedin.com/in/rkb16/)

For website-related issues, feature requests, or technical questions, please:
1. **Check existing issues** on GitHub
2. **Create a new issue** with detailed description

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

Special thanks to:
- **JEC RoboWorld Alumni** for their continuous support
- **Current Club Members** for content and feedback
- **Faculty Advisors** for their guidance
- **Open Source Community** for the amazing tools and libraries

---

**Built with ❤️ by Rakib Hussain for JEC RoboWorld**
