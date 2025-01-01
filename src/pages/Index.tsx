'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

const sections = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('Home')
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const activeSection = sections[Math.floor(scrollPosition / windowHeight)]
      setActiveSection(activeSection)
      setIsHeaderVisible(scrollPosition < 100)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen text-white">
      {/* Dynamic gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#1A1F2C] via-[#6E59A5] to-[#9b87f5] z-[-2]" />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            initial={{ opacity: 0.1, scale: 0 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 2, 1],
              x: [Math.random() * window.innerWidth, (Math.random() - 0.5) * 200 + mousePosition.x],
              y: [Math.random() * window.innerHeight, (Math.random() - 0.5) * 200 + mousePosition.y],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Glassmorphism effect for nav */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: isHeaderVisible ? 1 : 0, y: isHeaderVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            Your Name
          </motion.h1>
          <div className="md:hidden">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex space-x-4">
            {sections.map((section) => (
              <motion.li
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${section.toLowerCase()}`}
                  className={`cursor-pointer ${
                    activeSection === section ? 'font-bold' : ''
                  }`}
                >
                  {section}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 p-4"
          >
            <button
              onClick={() => setIsNavOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="mt-8 space-y-4">
              {sections.map((section) => (
                <motion.li
                  key={section}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${section.toLowerCase()}`}
                    onClick={() => setIsNavOpen(false)}
                    className={`block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded ${
                      activeSection === section ? 'font-bold' : ''
                    }`}
                  >
                    {section}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
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
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#D6BCFA] via-[#9b87f5] to-[#7E69AB]">
                Your Name
              </h1>
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
                Software Engineer specializing in Python, FastAPI, Flask, and Django, with a focus on developing scalable, high-performance web applications. Experienced in quantitative risk assessment tools and collaborating with cross-functional teams to drive innovation in high-tech systems.
              </p>
              <p className="text-lg md:text-xl">
                Proficient in both back-end and basic front-end technologies, with strong communication skills and a solid foundation in Software Engineering principles. Passionate about contributing to forward-thinking projects.
              </p>
            </motion.div>
          </div>
        </section>

        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
