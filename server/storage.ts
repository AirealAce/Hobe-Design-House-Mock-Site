import {
  type Product,
  type Testimonial,
  type Announcement,
  type InsertProduct,
  type InsertTestimonial,
  type InsertAnnouncement,
} from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getTestimonials(): Promise<Testimonial[]>;
  getAnnouncements(): Promise<Announcement[]>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private testimonials: Map<number, Testimonial>;
  private announcements: Map<number, Announcement>;

  constructor() {
    this.products = new Map();
    this.testimonials = new Map();
    this.announcements = new Map();

    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    const sampleProducts: InsertProduct[] = [
      {
        name: "Premium Watch",
        description: "Elegant timepiece for the modern professional",
        price: 299,
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        category: "Accessories",
      },
      {
        name: "Designer Bag",
        description: "Handcrafted leather bag for everyday use",
        price: 199,
        imageUrl: "https://images.unsplash.com/photo-1509695507497-903c140c43b0",
        category: "Bags",
      },
      // Add more sample products...
    ];

    const sampleTestimonials: InsertTestimonial[] = [
      {
        author: "Sarah Johnson",
        role: "Creative Director",
        content: "The quality and design of Hobe products are exceptional. They've become an essential part of our studio's aesthetic.",
        imageUrl: "https://images.unsplash.com/photo-1521830101529-057b1dfd9784",
      },
      // Add more testimonials...
    ];

    const sampleAnnouncements: InsertAnnouncement[] = [
      {
        content: "Spring Collection Launch - 20% Off All New Arrivals!",
        active: true,
      },
      {
        content: "Free Shipping on Orders Over $100",
        active: true,
      },
    ];

    sampleProducts.forEach((product, index) => {
      this.products.set(index + 1, { ...product, id: index + 1 });
    });

    sampleTestimonials.forEach((testimonial, index) => {
      this.testimonials.set(index + 1, { ...testimonial, id: index + 1 });
    });

    sampleAnnouncements.forEach((announcement, index) => {
      this.announcements.set(index + 1, { ...announcement, id: index + 1 });
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getAnnouncements(): Promise<Announcement[]> {
    return Array.from(this.announcements.values()).filter(
      (announcement) => announcement.active
    );
  }
}

export const storage = new MemStorage();
