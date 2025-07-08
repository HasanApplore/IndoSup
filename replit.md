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
- **Home Page**: Clean, centered welcome page with "Welcome to IndoSup" message
- **App Component**: Main application component following Next.js patterns
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

## User Preferences

Preferred communication style: Simple, everyday language.