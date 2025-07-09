# IndoSup - Next.js-Style React Application

## Overview

IndoSup is a modern web application built with React, JavaScript, and configured following Next.js patterns. It features a responsive design with Tailwind CSS, custom color theme, and Google Fonts integration. The application is designed with a clean, centered homepage displaying the "Welcome to IndoSup" message.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with JavaScript (Next.js-style patterns)
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom IndoSup color theme
- **Color Theme**: 
  - Primary: #FFC600 (bright yellow)
  - Secondary: #FFFFFF (white)
  - Accent: #031D33 (dark blue)
  - Neutral Dark: #222629 (dark gray)
  - Neutral Base: #919191 (medium gray)
- **Typography**: Inter and Plus Jakarta Sans fonts from Google Fonts
- **Responsive Design**: 12-column grid system with breakpoints at 640px, 768px, 1024px, and 1280px
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-backed sessions via connect-pg-simple
- **Development**: tsx for TypeScript execution

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database
- **ORM**: Drizzle ORM with type-safe queries
- **Schema Management**: Drizzle Kit for migrations
- **Session Storage**: PostgreSQL-backed sessions
- **Development Storage**: In-memory storage interface for development

## Key Components

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Schema Location**: `shared/schema.ts`
- **Validation**: Zod schemas for type safety
- **Migrations**: Stored in `./migrations` directory

### Frontend Components
- **Home Page**: Landing page with full-screen hero section and additional content sections
- **App Component**: Main application component following Next.js patterns
- **Design System**: Comprehensive UI/UX framework with consistent typography, spacing, and component styling
  - Typography hierarchy using modular 1.25x scale with H1-H4 headings
  - 12-column responsive grid system with breakpoints
  - Balanced spacing system with section-padding and content-spacing utilities
  - Consistent component styling with card-base, btn-primary, and btn-secondary classes
  - Font preloading for performance optimization
- **Hero Section**: Full-screen animated hero with background video, floating elements, and prominent CTA
  - Heading: "Revolutionizing Construction Procurement"
  - Subtext: "End-to-End Digital Sourcing for Modern Infrastructure"
  - Two CTA buttons: "Explore Solutions" and "Get a Quote"
  - Framer Motion animations with staggered content reveal
  - Construction industry background video with fallback animated gradient
  - Scroll indicator with bounce animation
  - Enhanced content overlay with proper readability
- **Who We Are Section**: Feature showcase with animated cards
  - Centered section heading: "Who We Are"
  - 4 feature cards: Sourcing, Procurement, Quality Assurance, Delivery
  - Each card includes icon, title, and descriptive text
  - White background with rounded corners and shadow effects
  - Yellow hover effects with lift animation and border highlights
  - Staggered reveal animations on scroll
- **Stats Section**: Animated counter showcase with company metrics
  - 4 animated counters: 400+ Vendors, 350+ Distributors, 25+ States Served, 10K+ Deliveries
  - Dark background (#222629) with white text and yellow numeric counters (#FFC600)
  - Spring-based counter animations that trigger on scroll into view
  - Staggered animations with hover effects and decorative elements
- **India Map Section**: Visual representation of pan-India presence
  - Heading: "Pan-India Reach with Local Expertise"
  - Custom SVG India map with animated location markers
  - 12 major cities highlighted with pulsing yellow markers
  - Interactive hover effects and smooth animations
  - Legend and coverage statistics display
  - White background with shadow for map container
- **Navbar Component**: Sticky responsive navigation with IndoSup logo, main navigation links, dropdown menu for "Our Business" (Steel/Non-Steel), and "Get a Quote" CTA button
- **Navigation Features**: 
  - Dark accent background (#031D33) with white text
  - Yellow hover underlines (#FFC600)
  - Mobile-friendly hamburger menu
  - Dropdown functionality with click-outside-to-close
  - Smooth transitions and animations
- **UI Components**: Comprehensive set of shadcn/ui components
- **Custom Hooks**: Mobile detection, toast notifications
- **Responsive Design**: Mobile-first approach with Tailwind CSS and 12-column grid

### Backend Services
- **Storage Interface**: Abstract storage layer with memory and database implementations
- **Route Registration**: Centralized route management
- **Error Handling**: Global error handling middleware
- **Development Tools**: Request logging and Vite integration

## Data Flow

1. **Client Requests**: Frontend makes API calls via TanStack Query
2. **Express Middleware**: Handles JSON parsing, CORS, and logging
3. **Route Processing**: Routes prefixed with `/api` handled by Express
4. **Storage Layer**: Abstract storage interface handles data operations
5. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
6. **Response**: JSON responses sent back to client

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI primitives
- **Styling**: Tailwind CSS
- **Build Tools**: Vite, esbuild
- **Development**: Replit integration with cartographer plugin

### Key Libraries
- **Frontend**: React, TanStack Query, Wouter, Framer Motion
- **Backend**: Express.js, Drizzle ORM, connect-pg-simple
- **Validation**: Zod for schema validation
- **Utilities**: date-fns, clsx, class-variance-authority

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle Kit handles schema migrations

### Environment Configuration
- **Development**: `NODE_ENV=development` with tsx
- **Production**: `NODE_ENV=production` with compiled JavaScript
- **Database**: `DATABASE_URL` environment variable required

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `db:push`: Push database schema changes

## Changelog

Changelog:
- July 08, 2025. Initial setup
- July 08, 2025. Converted to Next.js-style React application with custom color theme and Google Fonts integration
- July 08, 2025. Added sticky responsive navbar with IndoSup logo, navigation links, dropdown menu, and mobile hamburger menu
- July 08, 2025. Created full-screen hero section with background video, Framer Motion animations, and construction procurement messaging
- July 08, 2025. Added "Who We Are" section with 4 animated feature cards for Sourcing, Procurement, Quality Assurance, and Delivery
- July 08, 2025. Created stats section with 4 animated counters showcasing company metrics and achievements
- July 08, 2025. Added India map section with animated markers showing pan-India presence across major cities
- July 08, 2025. Created client logos carousel with hover effects and testimonials slider with auto-advancing functionality
- July 08, 2025. Added company initiatives section with image cards, hover effects, and "Read More" functionality
- July 08, 2025. Created full-width CTA banner with construction background, "Let's Build the Future Together" headline, and yellow contact button with hover invert effect
- July 08, 2025. Added About Us page with Mission/Vision/Values cards, horizontal timeline (2020-2025), leadership team profiles, and alternating dark/light sections with scroll animations
- July 08, 2025. Created Solutions page showcasing 5 key services (Multi-site Procurement, SKU Price Accuracy, Supply Chain Delays, GST Compliance, Order Management) with icons, animations, and alternating layouts
- July 08, 2025. Added Products pages with Steel and Non-Steel categories, each containing detailed subpages with product information, specifications, and catalog download functionality
- July 08, 2025. Created Media & Resources page with tabbed layout featuring Media Coverage, Awards, Newsletters, Blogs, and Case Studies sections with search and filter functionality
- July 08, 2025. Added Careers page with job listings, department/location filters, application modal with resume upload, and "Life at IndoSup" team culture section
- July 08, 2025. Created Catalogues page with filterable and searchable product catalog downloads, grid layout with hover effects, and detailed PDF specifications
- July 08, 2025. Added Contact page with comprehensive contact form, office location cards, direct contact links, embedded Google Map, and social media icons with hover effects
- July 08, 2025. Created responsive footer with 4 columns (Quick Links, Product Categories, Social Media, Newsletter), dark background, yellow hover effects, and legal links
- July 08, 2025. Updated hero section to remove overlay text and implement YouTube video background with sound support, maintaining responsive design and fallback animations
- July 08, 2025. Fixed hero video positioning to avoid navbar overlap and properly fit screen dimensions, updated to use specific construction industry demo video
- July 08, 2025. Fixed navbar issues: converted mobile menu anchor tags to proper Link components, fixed mobile dropdown routing, linked mobile CTA button to contact page
- July 09, 2025. Integrated high-quality partner logos (KSB, SAIL, Vedanta, Finolex, APL Apollo, Ashirvad, Havells, Polycab) into trusted partners section with proper Vite asset imports for optimal bundling
- July 09, 2025. Enhanced testimonials section by removing progress bar and pagination dots, added gradient background with decorative elements, improved quote styling with large quotation marks, enhanced star ratings and client information layout, upgraded navigation arrows with better hover effects
- July 09, 2025. Reduced testimonials section size by 30% with compact layout, smaller fonts, and improved proportions while maintaining functionality
- July 09, 2025. Updated testimonials section with #041d33 border color, more prominent rounded corners, removed testimonial numbers, and added elegant navigation dots
- July 09, 2025. Significantly reduced footer height (60% reduction) by compressing padding, margins, font sizes, and spacing while maintaining all functionality and visual appeal
- July 09, 2025. Implemented comprehensive design system optimization with consistent typography hierarchy, 12-column responsive grid, balanced spacing system, enhanced component styling, font preloading for performance, and unified visual elements across all sections following modern UI/UX standards

## User Preferences

Preferred communication style: Simple, everyday language.