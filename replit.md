# Vidhmahee Constructions Portfolio Website

## Overview

Vidhmahee Constructions is a professional construction company portfolio website built for showcasing construction services in Tiruchengode, Tamil Nadu. The application is a single-page, static business portfolio with animated entry sequences and smooth scrolling sections. It emphasizes visual appeal through animations, modern design patterns, and a clean blue-and-white color scheme to establish trust and professionalism.

The website features no database connectivity or dynamic content—it's purely presentational with sections for company information, projects, services, training programs, and contact details.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool

**Routing**: Wouter for client-side routing (lightweight alternative to React Router)

**UI Components**: shadcn/ui component library built on Radix UI primitives, providing accessible and customizable components

**Styling**: 
- Tailwind CSS with custom configuration for brand colors (Royal Blue #1E3A8A primary, Golden accents)
- CSS variables for theme consistency
- Custom spacing and border radius tokens
- Poppins font from Google Fonts

**Animations**: Framer Motion library for:
- Entry animation with double-door effect
- Scroll-triggered section reveals using `useInView` hook
- Smooth transitions and hover effects

**State Management**: 
- React hooks (useState, useEffect, useRef) for local component state
- Session storage for tracking entry animation completion
- TanStack Query (React Query) configured but not actively used for data fetching

**Component Structure**:
- Page-level: `Home.tsx` orchestrates all sections
- Section components: `HeroSection`, `AboutSection`, `ProjectsSection`, `ServicesSection`, `TrainingSection`, `Footer`
- Special components: `EntryAnimation` (double-door intro), `Navigation` (sticky header with smooth scrolling)

### Backend Architecture

**Server Framework**: Express.js running on Node.js

**Build System**: 
- Vite for frontend bundling
- esbuild for server-side code bundling (ESM format)
- TypeScript compilation without emit (type checking only)

**Development Setup**:
- HMR (Hot Module Replacement) through Vite middleware
- Custom logging middleware for API request tracking
- Replit-specific plugins for development (cartographer, dev-banner, runtime error overlay)

**Storage Interface**: 
- Abstract storage interface (`IStorage`) with in-memory implementation (`MemStorage`)
- User model with username/password fields (currently unused)
- Prepared for database integration but not connected

**Server Structure**:
- Static file serving in production
- API routes registered through `registerRoutes` function
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)

### Design System

**Color Palette**:
- Primary: Royal Blue (`hsl(var(--primary))` maps to #1E3A8A)
- Golden accents (`hsl(var(--golden))`)
- Neutral grays for backgrounds and text
- Semantic colors for destructive actions, muted elements, and accents

**Typography Hierarchy**:
- Hero/Headlines: 48-64px, Bold (700)
- Section Titles: 36-42px (text-4xl to text-5xl), SemiBold (600)
- Subheadings: 24-28px, Medium (500)
- Body Text: 16-18px, Regular (400)
- Navigation: 16px, Medium (500)

**Layout System**:
- Max-width container: 7xl (1280px)
- Section padding: py-20 desktop, py-12 mobile
- Consistent spacing using Tailwind's 4px-based scale
- Responsive grid layouts (1-3 columns based on viewport)

**Interactive Elements**:
- Hover effects with elevation overlays (`--elevate-1`, `--elevate-2`)
- Button variants: default, outline, secondary, ghost
- Smooth 0.3s transitions on interactive elements
- 2px bottom border on navigation hover

## External Dependencies

### UI Component Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- **shadcn/ui**: Pre-styled component system built on Radix UI with Tailwind CSS integration
- **Lucide React**: Icon library for consistent iconography

### Animation & Interaction
- **Framer Motion**: Declarative animation library for React with scroll-triggered animations
- **Embla Carousel**: Carousel/slider functionality (imported but may not be actively used)

### Form Management
- **React Hook Form**: Form state management with validation
- **Hookform Resolvers**: Integration layer for schema validation
- **Zod**: TypeScript-first schema validation (via drizzle-zod)

### Styling & Utilities
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **class-variance-authority (CVA)**: Variant-based component styling
- **clsx** & **tailwind-merge**: Conditional className utilities

### Database Layer (Configured but Not Connected)
- **Drizzle ORM**: TypeScript ORM configured for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **drizzle-zod**: Schema validation integration
- Database schema defined in `shared/schema.ts` with users table

### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **Vite**: Fast build tool with HMR
- **esbuild**: Fast bundler for production builds
- **Replit plugins**: Development experience enhancements (cartographer, dev-banner, runtime error modal)

### Font Assets
- **Google Fonts (Poppins)**: Primary typeface loaded via link tag in `index.html`

### Image Assets
- Local images stored in `attached_assets/generated_images/` directory
- Company logo, team photos, project images, and hero backgrounds

### Session Management
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)
- Browser sessionStorage for entry animation state

### Miscellaneous
- **date-fns**: Date utility library
- **cmdk**: Command menu component
- **Wouter**: Lightweight client-side routing
- **nanoid**: Unique ID generation
- **react-icons**: Additional icon sets (FontAwesome for social media icons)