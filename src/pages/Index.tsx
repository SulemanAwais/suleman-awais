'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'

const sections = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('Home')
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const activeSection = sections[Math.floor(scrollPosition / windowHeight)]
      setActiveSection(activeSection)
      setIsHeaderVisible(scrollPosition < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 z-[-1]" />
      <motion.div
        className="fixed inset-0 z-[-1] opacity-50"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
            'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/20"
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
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                Your Name
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300">Software Engineer</p>
            </motion.div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
            </motion.a>
          </motion.div>
          
          <div className="absolute inset-0 z-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: Math.random() * 0.5 + 0.5,
                  opacity: Math.random() * 0.5,
                }}
                animate={{
                  y: [null, Math.random() * -100],
                  opacity: [null, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500"
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

        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500"
            >
              Get in Touch
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(255,255,255,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg transition duration-300 transform hover:-translate-y-1 hover:bg-purple-700"
                >
                  Send Message
                </motion.button>
              </motion.form>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 flex justify-center space-x-6"
              >
                <a href="#" className="text-3xl hover:text-gray-300 transition duration-300">
                  <FaGithub />
                </a>
                <a href="#" className="text-3xl hover:text-gray-300 transition duration-300">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-3xl hover:text-gray-300 transition duration-300">
                  <FaEnvelope />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <footer className="bg-purple-800 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">Your Name</h3>
                <p className="text-purple-200">Software Engineer</p>
              </div>
              <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
                <div className="flex justify-center space-x-6">
                  <a href="#" className="text-white hover:text-purple-200 transition duration-300">
                    <FaGithub className="text-2xl" />
                  </a>
                  <a href="#" className="text-white hover:text-purple-200 transition duration-300">
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a href="#" className="text-white hover:text-purple-200 transition duration-300">
                    <FaEnvelope className="text-2xl" />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center md:text-right">
                <p className="text-purple-200 text-sm">
                  © {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
