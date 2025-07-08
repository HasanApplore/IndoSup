# IndoSup - Full Stack Web Application

## Overview

IndoSup is a full-stack web application built with React, TypeScript, and Express.js. It's a modern web platform featuring a responsive design with shadcn/ui components, PostgreSQL database integration via Drizzle ORM, and a clean architecture separating client and server concerns.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom IndoSup brand colors
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Animation**: Framer Motion for smooth animations
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
- **Home Page**: Landing page with hero section and feature highlights
- **UI Components**: Comprehensive set of shadcn/ui components
- **Custom Hooks**: Mobile detection, toast notifications
- **Responsive Design**: Mobile-first approach with Tailwind CSS

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

## User Preferences

Preferred communication style: Simple, everyday language.