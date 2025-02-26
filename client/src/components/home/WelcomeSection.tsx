import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Welcome to Hobe Design House
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We craft exceptional design products that blend form and function. 
            Our collection represents the perfect harmony of modern aesthetics 
            and practical utility, designed for those who appreciate quality and style.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
