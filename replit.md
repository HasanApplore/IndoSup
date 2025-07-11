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
- **Hero Section**: Full-screen animated hero with background video, floating elements, and prominent CTA
  - Heading: "Revolutionizing Construction Procurement"
  - Subtext: "End-to-End Digital Sourcing for Modern Infrastructure"
  - Two CTA buttons: "Explore Solutions" and "Get a Quote"
  - Framer Motion animations with staggered content reveal
  - Construction industry background video with fallback animated gradient
  - Scroll indicator with bounce animation
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
- July 09, 2025. Reduced all section heights by additional 10% for more compact layout: decreased padding from py-8 md:py-12 to py-6 md:py-10, and further reduced to py-5 md:py-8 for testimonials section
- July 09, 2025. Removed testimonials navigation dots and increased testimonials card width from max-w-3xl to max-w-4xl with improved quote text width to max-w-2xl
- July 09, 2025. Applied final homepage polish: improved text sizing consistency, reduced CTA banner elements, optimized spacing in initiatives cards, and enhanced overall visual hierarchy
- July 09, 2025. Removed navigation arrows from "Our Trusted Partners" section and reduced auto-change timing from 4 seconds to 2 seconds for faster transitions
- July 09, 2025. Completely recreated testimonials section with modern UI/UX design: added sliding animations, star ratings, client avatars, project details, backdrop blur effects, and interactive navigation while maintaining current dimensions
- July 09, 2025. Final homepage polish and testimonials enhancements: removed title quote icon, centered testimonial quote icon with increased size, repositioned navigation arrows above testimonial cards, removed star ratings, added hover effects to testimonial cards, increased spacing between quote icon and content, enhanced "Why Choose IndoSup?" card hover effects (scale 1.08, y -12px)
- July 10, 2025. Applied unified background theme across entire homepage: added overall `bg-gradient-to-br from-gray-50 to-white` to homepage container, removed individual section backgrounds to inherit from main theme, added missing sections (IndiaMapSection, InitiativesSection, CTABanner) to complete homepage layout, ensured consistent visual flow while preserving navbar, hero, stats, and footer unique backgrounds
- July 10, 2025. Simplified homepage layout: removed Pan India section (IndiaMapSection), Contact Us section (CTABanner), and Our Key Initiatives section (InitiativesSection) to create a more focused user experience with core sections: Hero, Why Choose IndoSup, Stats, Trusted Partners, and Testimonials
- July 10, 2025. Updated homepage background color to #fbf5e8 (warm off-white) while preserving navbar, hero, statistics, and footer sections with their original backgrounds for visual contrast and hierarchy
- July 10, 2025. Enhanced homepage background with subtle gradient from #fbf5e8 to #f8f2e0 for improved visual depth and warmth
- July 10, 2025. Updated homepage background gradient to transition from #fbf5e8 to white for cleaner, more modern appearance
- July 10, 2025. Added new partner logos: Asian Paints, Tata Steel, Berger Paints, and Vectus to trusted partners section, replaced old Havells logo with new high-quality version
- July 10, 2025. Completely redesigned About Us page with new content structure: "What Is IndoSup?" section with 2-column layout, leadership profiles for Ashmit Sharma (CEO), Akshaj Sharma (COO), and Shivank Saxena (CFO), vision and mission sections with quote styling, and comprehensive Strength & Values section with animated icons and hover effects
- July 10, 2025. Updated "What Is IndoSup?" section with Mission & Vision background styling, reduced theoretical content by 40%, removed single image and star decoration, implemented multi-image carousel with 4 construction-themed images, auto-advancing functionality, navigation arrows, and dot indicators
- July 10, 2025. Enhanced Leadership section with demo avatar images, reduced size by 40%, replaced LinkedIn buttons with clean icons, applied consistent background gradient matching page theme, and improved visual hierarchy and alignment
- July 11, 2025. Applied unified background theme styling across all pages: updated all pages to use `bg-gradient-to-br from-[#fbf5e8] to-white` background gradient matching homepage design, ensuring consistent visual experience and brand cohesion throughout the entire application

## User Preferences

Preferred communication style: Simple, everyday language.