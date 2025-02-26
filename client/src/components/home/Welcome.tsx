import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Welcome to Hobe Design House
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We create exceptional spaces that inspire and delight. Our curated collection 
            of furniture and decor pieces brings together modern aesthetics with timeless design, 
            helping you transform your space into something extraordinary.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
