import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const announcements = [
  "Free shipping on orders over $150",
  "New collection launch: Modern Minimalist",
  "Limited time offer: 20% off lighting",
  "Design consultation available online"
];

export default function AnnouncementBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-primary py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-white text-center text-sm md:text-base"
          >
            {announcements[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
