'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'

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
            Suleman Awais
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
        <HeroSection name="Suleman Awais" />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
