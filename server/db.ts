import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";
import { products } from "@shared/schema";

neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle({ client: pool, schema });

// Enhanced function to check and seed products if needed
export async function ensureProductsSeeded() {
  try {
    const productCount = await db.select().from(products);
    console.log(`Database connection successful. Found ${productCount.length} products.`);

    if (productCount.length === 0) {
      console.log('No products found. Running seed data...');
      // Execute seed data directly
      const seedProducts = [
        {
          name: 'Modern Leather Watch',
          description: 'Elegant timepiece crafted from genuine leather and stainless steel.',
          price: 29900,
          imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
          category: 'Accessories'
        },
        {
          name: 'Premium Laptop Bag',
          description: 'Professional laptop bag made from premium water-resistant canvas.',
          price: 19900,
          imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
          category: 'Bags'
        },
        {
          name: 'Minimalist Desk Lamp',
          description: 'Contemporary LED desk lamp with adjustable brightness levels.',
          price: 12900,
          imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
          category: 'Lighting'
        }
      ];

      await db.insert(products).values(seedProducts);
      console.log('Successfully seeded initial products.');
    }
  } catch (error) {
    console.error('Error in database initialization:', error);
    throw new Error('Failed to verify database connection and products');
  }
}