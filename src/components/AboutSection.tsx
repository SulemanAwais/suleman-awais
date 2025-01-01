import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D6BCFA] to-[#9b87f5]"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl mb-6">
            Software Engineer with 1.5 years of professional experience specializing in Python, Django, FastAPI, and Flask, with a strong focus on creating scalable, high-performance web applications. Skilled in designing flexible software architectures, implementing SDLC best practices, and collaborating within Agile teams to deliver innovative solutions.
          </p>
          <p className="text-lg md:text-xl">
            Proficient in backend technologies and foundational frontend skills, with a passion for problem-solving and continuous learning in fast-paced environments. Adept at leveraging strong communication and teamwork abilities to tackle real-world challenges.
          </p>
        </motion.div>
      </div>
    </section>
  )
}