import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  author: text("author").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const announcements = pgTable("announcements", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  active: boolean("active").notNull().default(true),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true });
export const insertAnnouncementSchema = createInsertSchema(announcements).omit({ id: true });

export type Product = typeof products.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type Announcement = typeof announcements.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type InsertAnnouncement = z.infer<typeof insertAnnouncementSchema>;
