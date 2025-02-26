import { useQuery } from "@tanstack/react-query";
import { type Testimonial } from "@shared/schema";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Clients Say
        </h2>
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-6">
                <Avatar className="w-20 h-20 mx-auto">
                  <AvatarImage src={testimonials[currentIndex].imageUrl} />
                  <AvatarFallback>
                    {testimonials[currentIndex].author[0]}
                  </AvatarFallback>
                </Avatar>
              </div>
              <blockquote className="text-lg md:text-xl mb-4 italic text-muted-foreground">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <div className="font-semibold">{testimonials[currentIndex].author}</div>
              <div className="text-sm text-muted-foreground">
                {testimonials[currentIndex].role}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
