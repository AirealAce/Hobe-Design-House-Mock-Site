import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { type Announcement } from "@shared/schema";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: announcements = [] } = useQuery<Announcement[]>({
    queryKey: ["/api/announcements"],
  });

  useEffect(() => {
    if (announcements.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [announcements.length]);

  if (!announcements.length) return null;

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-sm md:text-base"
          >
            {announcements[currentIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
