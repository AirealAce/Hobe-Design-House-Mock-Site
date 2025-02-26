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
        name: "Modern Leather Watch",
        description: "Elegant timepiece crafted from genuine leather and stainless steel. Features precision quartz movement, water resistance up to 30m, and a sleek minimalist design perfect for both casual and formal occasions.",
        price: 29900,
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        category: "Accessories"
      },
      {
        name: "Premium Laptop Bag",
        description: "Professional laptop bag made from premium water-resistant canvas. Features multiple compartments, padded laptop sleeve, and genuine leather accents. Perfect for the modern professional on the go.",
        price: 19900,
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        category: "Bags"
      },
      {
        name: "Minimalist Desk Lamp",
        description: "Contemporary LED desk lamp with adjustable brightness levels and color temperature. The slim profile and premium aluminum construction make it perfect for any modern workspace.",
        price: 12900,
        imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
        category: "Lighting"
      }
    ];

    const sampleTestimonials: InsertTestimonial[] = [
      {
        author: "Sarah Johnson",
        role: "Interior Designer",
        content: "Hobe Design's attention to detail and quality is unmatched. Their products have become an essential part of my design projects, consistently exceeding my clients' expectations.",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      },
      {
        author: "Michael Chen",
        role: "Creative Director",
        content: "The modern aesthetic and functionality of Hobe's products perfectly align with our studio's vision. Their customer service is exceptional, making every purchase a pleasure.",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        author: "Emily Rodriguez",
        role: "Architect",
        content: "What sets Hobe Design apart is their commitment to sustainable practices without compromising on style. Their products are both beautiful and environmentally conscious.",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
      }
    ];

    const sampleAnnouncements: InsertAnnouncement[] = [
      {
        content: "Spring Collection Launch - 20% Off All New Arrivals!",
        active: true
      },
      {
        content: "Free Shipping on Orders Over $150 - Limited Time Only",
        active: true
      },
      {
        content: "Join Our Design Workshop - Register Now for Early Bird Pricing",
        active: true
      }
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