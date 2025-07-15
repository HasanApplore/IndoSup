import { db } from './db';
import { adminUsers } from '@shared/schema';
import { eq } from 'drizzle-orm';

async function initializeDatabase() {
  try {
    // Check if admin user already exists
    const existingAdmin = await db.select().from(adminUsers).where(eq(adminUsers.email, 'admin@indosup.com'));
    
    if (existingAdmin.length === 0) {
      // Create default admin user
      await db.insert(adminUsers).values({
        email: 'admin@indosup.com',
        password: 'admin123',
        name: 'IndoSup Administrator',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      });
      
      console.log('✓ Default admin user created successfully');
    } else {
      console.log('✓ Admin user already exists');
    }
    
    console.log('✓ Database initialization complete');
  } catch (error) {
    console.error('✗ Database initialization failed:', error);
  }
}

// Run initialization if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  initializeDatabase();
}

export { initializeDatabase };