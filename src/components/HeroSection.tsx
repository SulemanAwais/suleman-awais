import { motion } from 'framer-motion'

interface HeroSectionProps {
  name: string;
}

export default function HeroSection({ name }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-4 relative inline-block"
            initial={{ backgroundPosition: "0%" }}
            animate={{ 
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            style={{
              background: "linear-gradient(to right, #000 50%, transparent 50%) 100% 0 / 200% 100% no-repeat",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "white",
              WebkitTextFillColor: "transparent"
            }}
          >
            {name}
          </motion.h1>
          <p className="text-2xl md:text-3xl text-gray-200">Software Engineer</p>
        </motion.div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  )
}