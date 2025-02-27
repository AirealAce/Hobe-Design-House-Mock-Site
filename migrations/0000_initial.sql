-- Initial seed data for products
INSERT INTO products (name, description, price, image_url, category)
VALUES 
  ('Modern Leather Watch', 'Elegant timepiece crafted from genuine leather and stainless steel. Features precision quartz movement, water resistance up to 30m, and a sleek minimalist design perfect for both casual and formal occasions.', 29900, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', 'Accessories'),
  ('Premium Laptop Bag', 'Professional laptop bag made from premium water-resistant canvas. Features multiple compartments, padded laptop sleeve, and genuine leather accents. Perfect for the modern professional on the go.', 19900, 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62', 'Bags'),
  ('Minimalist Desk Lamp', 'Contemporary LED desk lamp with adjustable brightness levels and color temperature. The slim profile and premium aluminum construction make it perfect for any modern workspace.', 12900, 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c', 'Lighting');

-- Initial seed data for testimonials
INSERT INTO testimonials (author, role, content, image_url)
VALUES 
  ('Sarah Johnson', 'Interior Designer', 'Hobe Design''s attention to detail and quality is unmatched. Their products have become an essential part of my design projects, consistently exceeding my clients'' expectations.', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'),
  ('Michael Chen', 'Creative Director', 'The modern aesthetic and functionality of Hobe''s products perfectly align with our studio''s vision. Their customer service is exceptional, making every purchase a pleasure.', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'),
  ('Emily Rodriguez', 'Architect', 'What sets Hobe Design apart is their commitment to sustainable practices without compromising on style. Their products are both beautiful and environmentally conscious.', 'https://images.unsplash.com/photo-1580489944761-15a19d654956');

-- Initial seed data for announcements
INSERT INTO announcements (content, active)
VALUES 
  ('Spring Collection Launch - 20% Off All New Arrivals!', true),
  ('Free Shipping on Orders Over $150 - Limited Time Only', true),
  ('Join Our Design Workshop - Register Now for Early Bird Pricing', true);
