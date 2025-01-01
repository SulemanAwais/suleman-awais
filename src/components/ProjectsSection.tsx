import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'Risk Assessment Tool',
    description: 'Developed a quantitative risk assessment tool using Python and FastAPI',
    highlights: [
      'Implemented advanced statistical models',
      'Integrated with external data sources',
      'Optimized performance for large datasets',
    ],
  },
  {
    title: 'E-commerce Platform',
    description: 'Built a scalable e-commerce platform using Django and DRF',
    highlights: [
      'Implemented secure payment gateway integration',
      'Developed a RESTful API for mobile app integration',
      'Optimized database queries for improved performance',
    ],
  },
  {
    title: 'Real-time Chat Application',
    description: 'Created a real-time chat application using Flask and WebSockets',
    highlights: [
      'Implemented real-time message delivery',
      'Developed user authentication and authorization',
      'Integrated with a NoSQL database for scalability',
    ],
  },
  {
    title: 'AI Content Generator',
    description: 'Developed an AI-powered content generation platform using OpenAI API',
    highlights: [
      'Integrated OpenAI GPT models for text generation',
      'Implemented content moderation system',
      'Built user feedback and rating system',
    ],
  },
  {
    title: 'Task Management System',
    description: 'Created a collaborative task management system with real-time updates',
    highlights: [
      'Implemented real-time notifications',
      'Built team collaboration features',
      'Integrated with calendar APIs',
    ],
  },
  {
    title: 'Analytics Dashboard',
    description: 'Developed a comprehensive analytics dashboard for business metrics',
    highlights: [
      'Created interactive data visualizations',
      'Implemented data export functionality',
      'Built custom reporting system',
    ],
  },
]

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <motion.button
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(255,255,255,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition duration-300 transform hover:-translate-y-1 hover:bg-purple-700"
              >
                {expandedProject === index ? 'Hide Details' : 'View Details'}
              </motion.button>
              <AnimatePresence>
                {expandedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <h4 className="font-semibold mb-2">Key Highlights:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(255,255,255,0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block mt-4 bg-purple-600 text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-purple-700 transition duration-300 transform hover:-translate-y-1"
                    >
                      View Full Project
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg">
            For more projects and contributions, visit my{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub profile
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}