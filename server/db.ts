import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";
import { products, testimonials, announcements } from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Validate DATABASE_URL
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL environment variable is not set. Please configure it in your environment variables.",
  );
}

// Add better error handling for database connection
async function createDatabaseConnection() {
  try {
    console.log("Attempting to connect to database...");
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });

    // Test the connection
    await pool.query('SELECT 1');
    console.log("Database connection established successfully");

    return pool;
  } catch (error) {
    console.error("Failed to connect to database:", error);
    throw new Error("Could not establish database connection. Please check your DATABASE_URL and network connectivity.");
  }
}

// Initialize pool and db with better error handling
export const pool = await createDatabaseConnection();
export const db = drizzle({ client: pool, schema });

// Enhanced function to check and seed products if needed
export async function ensureProductsSeeded() {
  try {
    console.log("Checking database for existing products...");
    const productCount = await db.select().from(products);
    console.log(`Database check successful. Found ${productCount.length} products.`);

    if (productCount.length === 0) {
      console.log('No products found. Running seed data...');

      try {
        // Execute seed data directly
        await db.insert(products).values([
          {
            name: 'Modern Leather Watch',
            description: 'Elegant timepiece crafted from genuine leather and stainless steel. Features precision quartz movement, water resistance up to 30m, and a sleek minimalist design perfect for both casual and formal occasions.',
            price: 29900,
            imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
            category: 'Accessories'
          },
          {
            name: 'Premium Laptop Bag',
            description: 'Professional laptop bag made from premium water-resistant canvas. Features multiple compartments, padded laptop sleeve, and genuine leather accents. Perfect for the modern professional on the go.',
            price: 19900,
            imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
            category: 'Bags'
          },
          {
            name: 'Minimalist Desk Lamp',
            description: 'Contemporary LED desk lamp with adjustable brightness levels and color temperature. The slim profile and premium aluminum construction make it perfect for any modern workspace.',
            price: 12900,
            imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
            category: 'Lighting'
          }
        ]);

        console.log('Successfully seeded products table.');

        // Add testimonials if none exist
        const testimonialCount = await db.select().from(testimonials);
        if (testimonialCount.length === 0) {
          await db.insert(testimonials).values([
            {
              author: 'Sarah Johnson',
              role: 'Interior Designer',
              content: 'Hobe Design\'s attention to detail and quality is unmatched. Their products have become an essential part of my design projects.',
              imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
            }
          ]);
          console.log('Successfully seeded testimonials table.');
        }

        // Add announcements if none exist
        const announcementCount = await db.select().from(announcements);
        if (announcementCount.length === 0) {
          await db.insert(announcements).values([
            {
              content: 'Spring Collection Launch - 20% Off All New Arrivals!',
              active: true
            }
          ]);
          console.log('Successfully seeded announcements table.');
        }

      } catch (seedError) {
        console.error('Error while seeding data:', seedError);
        throw new Error('Failed to seed initial data');
      }
    }
  } catch (error) {
    console.error('Error in database initialization:', error);
    throw new Error('Failed to verify database connection and products');
  }
}