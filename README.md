# IndoSup - Construction Procurement Platform

A modern, full-stack web application for construction procurement and supply chain management.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd Indosup
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env file with your database configuration
   # See Database Setup section below
   ```

4. **Set up database** (Choose one option)
   
   **Option A: Use Cloud Database (Recommended)**
   - Go to [Neon](https://neon.tech) or [Supabase](https://supabase.com)
   - Create a free account and new project
   - Copy the connection string to your `.env` file
   
   **Option B: Local PostgreSQL**
   - Install PostgreSQL on your machine
   - Create a database named `indosup`
   - Update `.env` with local connection details

5. **Run database migrations**
   ```bash
   npm run db:push
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   - Navigate to `http://localhost:3000`

## 📁 Project Structure

```
Indosup/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   └── assets/        # Static assets
├── server/                # Backend Express server
│   ├── routes.ts          # API routes
│   ├── db.ts             # Database configuration
│   └── init-db.ts        # Database initialization
├── shared/               # Shared TypeScript schemas
├── uploads/              # File uploads directory
└── dist/                 # Build output
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes
- `npm run check` - TypeScript type checking

## 🗄️ Database Setup

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@host:port/database_name

# Server Configuration
NODE_ENV=development
PORT=3000

# Admin Configuration
ADMIN_EMAIL=admin@indosup.com
ADMIN_PASSWORD=admin123
```

### Database Options

1. **Neon (Recommended - Free)**
   - Sign up at [neon.tech](https://neon.tech)
   - Create new project
   - Copy connection string to `.env`

2. **Supabase (Alternative - Free)**
   - Sign up at [supabase.com](https://supabase.com)
   - Create new project
   - Go to Settings > Database for connection string

3. **Local PostgreSQL**
   - Install PostgreSQL
   - Create database: `createdb indosup`
   - Use connection: `postgresql://postgres:password@localhost:5432/indosup`

## 🔧 Troubleshooting

### Common Issues

1. **"DATABASE_URL must be set"**
   - Ensure `.env` file exists and has correct DATABASE_URL
   - Check that dotenv is loading the file

2. **Port already in use**
   - Change PORT in `.env` file
   - Or kill process using the port

3. **Database connection failed**
   - Verify database URL is correct
   - Check if database server is running
   - Ensure SSL settings are correct for cloud databases

4. **Windows-specific issues**
   - Use `cross-env` for environment variables (already configured)
   - Use `localhost` instead of `0.0.0.0` for host binding

### Windows Setup

The project is configured to work on Windows:
- Uses `cross-env` for environment variables
- Uses `localhost` for server binding
- All npm scripts work on Windows PowerShell

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Environment Variables for Production

Set these environment variables in your production environment:
- `DATABASE_URL` - Production database connection
- `NODE_ENV=production`
- `PORT` - Production port (usually 3000 or 80)

## 📝 Features

- **Modern React Frontend** with TypeScript
- **Express.js Backend** with RESTful APIs
- **PostgreSQL Database** with Drizzle ORM
- **Admin Panel** for content management
- **File Upload** functionality
- **Responsive Design** for all devices
- **Contact Forms** and job applications
- **Product Catalog** management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.
