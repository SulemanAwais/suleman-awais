import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Skill {
  name: string;
  level: number;
  primaryColor: string;
  secondaryColor: string;
  details?: string[];
}

const skills: Skill[] = [
  { name: 'Python', level: 9, primaryColor: '#3776AB', secondaryColor: '#FFD43B' },
  { name: 'Django', level: 8, primaryColor: '#092E20', secondaryColor: '#092E20' },
  { name: 'DRF', level: 8, primaryColor: '#A30000', secondaryColor: '#A30000' },
  { name: 'FastAPI', level: 7, primaryColor: '#009688', secondaryColor: '#009688' },
  { name: 'Flask', level: 6, primaryColor: '#000000', secondaryColor: '#000000' },
  { name: 'HTML/CSS/JS', level: 5, primaryColor: '#E34F26', secondaryColor: '#1572B6' },
  { name: 'GitHub', level: 8, primaryColor: '#181717', secondaryColor: '#181717' },
  { name: 'Deployment', level: 6, primaryColor: '#0080FF', secondaryColor: '#0080FF' },
  { name: 'MySQL/Postgres', level: 8, primaryColor: '#4479A1', secondaryColor: '#336791' },
  { name: 'RabbitMQ', level: 7, primaryColor: '#FF6600', secondaryColor: '#FF6600' },
  { 
    name: 'API Integration', 
    level: 9, 
    primaryColor: '#4A90E2', 
    secondaryColor: '#4A90E2',
    details: [
      'Stripe Payment Gateway',
      'Google Maps API',
      'AWS Services (S3, Lambda)',
      'SendGrid Email API',
      'Twilio SMS API',
      'OpenAI API'
    ]
  }
]

export default function SkillsSection() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => skill.details && setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
              className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 hover:bg-opacity-20 transition duration-300 ${skill.details ? 'cursor-pointer hover:shadow-lg' : ''}`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                {skill.details && (
                  <span className="text-sm text-white/70">Click to view integrations</span>
                )}
              </div>
              <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
                <motion.div
                  className="rounded-full h-2"
                  style={{ backgroundColor: 'white' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level * 10}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                ></motion.div>
              </div>
              <span className="text-sm mt-1 block">{skill.level}/10</span>
              <AnimatePresence>
                {expandedSkill === skill.name && skill.details && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <h4 className="font-semibold mb-2">Integrated APIs:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {skill.details.map((detail, i) => (
                        <li key={i} className="text-sm">{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}