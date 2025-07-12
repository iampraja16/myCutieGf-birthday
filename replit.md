# Birthday Website Project

## Overview

This is a romantic single-page application (SPA) built for a girlfriend's birthday celebration. The project uses React.js with TypeScript, Tailwind CSS for styling, and includes modern web technologies to create an immersive romantic experience. The website features multiple pages showcasing different aspects of the relationship, from a photo gallery to love letters and future dreams.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom romantic color palette
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion and GSAP for smooth animations
- **State Management**: TanStack Query (React Query) for server state

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Module System**: ES Modules
- **Development**: Vite for development server and build tooling
- **TypeScript**: Full TypeScript support across frontend and backend

### Build System
- **Frontend Build**: Vite with React plugin
- **Backend Build**: esbuild for server bundling
- **Development**: Hot Module Replacement (HMR) via Vite
- **Production**: Optimized builds with code splitting

## Key Components

### Page Structure
The application uses a multi-page SPA structure with the following routes:
- **Home** (`/`) - Landing page with interactive photo and typing animation
- **Gallery** (`/gallery`) - Masonry grid photo gallery with hover effects
- **Letter** (`/letter`) - Love letter with typing animation effect
- **Timeline** (`/timeline`) - Relationship milestone timeline
- **Reasons** (`/reasons`) - Reasons for loving with animated cards
- **Wishes** (`/wishes`) - Future dreams and aspirations

### Core Components
- **Navbar**: Fixed navigation with glassmorphism effect
- **FloatingHearts**: Animated heart elements floating across the screen
- **FallingPetals**: Animated flower petals falling from top
- **TypingText**: Custom typing animation component
- **InteractivePhoto**: Grayscale-to-color photo with custom cursor text

### Design System
- **Typography**: Playfair Display for headings, Inter for body text
- **Color Palette**: Dusty pink, blush, cream, lavender romantic colors
- **Effects**: Glassmorphism, soft shadows, blur effects, gradient backgrounds
- **Animations**: Smooth transitions, hover effects, and entrance animations

## Data Flow

### State Management
- **Client State**: React hooks for local component state
- **Server State**: TanStack Query for API data management (prepared for future use)
- **Animation State**: Framer Motion and GSAP handle animation states

### Component Communication
- Props drilling for simple data passing
- Context API available through UI components
- Event-driven interactions for animations

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **UI Library**: Radix UI primitives, Shadcn/ui components
- **Animations**: Framer Motion, GSAP
- **TypeScript**: Full TypeScript support
- **Build Tools**: Vite, esbuild

### Database Integration (Prepared)
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: Neon Database (serverless PostgreSQL)
- **Migrations**: Drizzle Kit for schema management
- **Session Store**: PostgreSQL session storage ready

### Development Tools
- **Runtime**: tsx for TypeScript execution
- **Linting**: TypeScript compiler for type checking
- **Development Server**: Vite dev server with HMR
- **Replit Integration**: Custom Replit plugins for development

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server on port 5173
- **Backend Development**: Express server with tsx for TypeScript
- **Hot Reload**: Full HMR for React components and styles

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Serving**: Express serves both API routes and static frontend assets
- **Environment**: Production mode with optimized builds

### Database Configuration
- **Connection**: Environment variable `DATABASE_URL` for PostgreSQL
- **Schema**: Shared schema in `/shared/schema.ts`
- **Migrations**: Automatic migration support with Drizzle

### Key Features for Romantic Theme
- **Interactive Elements**: Hover effects, custom cursors, animated transitions
- **Visual Effects**: Floating hearts, falling petals, glassmorphism
- **Typography Animation**: Typing effects for romantic messages
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Performance**: Optimized images, lazy loading, smooth animations

The architecture prioritizes user experience with smooth animations, romantic aesthetics, and interactive elements while maintaining clean, maintainable code structure.