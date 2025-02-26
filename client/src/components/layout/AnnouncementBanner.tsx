import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { type Announcement } from "@shared/schema";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = [
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a"
];

export default function AnnouncementBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  const { data: announcements = [] } = useQuery<Announcement[]>({
    queryKey: ["/api/announcements"],
  });

  useEffect(() => {
    if (announcements.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % announcements.length);
      setBgIndex((current) => (current + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [announcements.length]);

  if (!announcements.length) return null;

  return (
    <div className="relative h-32 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={bgIndex}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImages[bgIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </AnimatePresence>

      <div className="relative h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white text-xl md:text-2xl font-semibold px-4"
          >
            {announcements[currentIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}