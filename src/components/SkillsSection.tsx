import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code2, Database, Github, Globe, MessageSquare, Workflow,
  Server, Cloud, Docker, Terminal, FileCode, Tool
} from 'lucide-react'
import { SiPython, SiDjango, SiFastapi, SiPostgresql, SiFlask, SiJavascript, SiGithub, SiAmazonaws, SiJira, SiBootstrap } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  details?: string[];
}

const skills: Skill[] = [
  { name: 'Python', level: 9, icon: <SiPython className="w-6 h-6 text-[#3776AB]" /> },
  { name: 'Django', level: 8, icon: <SiDjango className="w-6 h-6 text-[#092E20]" /> },
  { name: 'DjangoREST Framework', level: 8, icon: <Globe className="w-6 h-6 text-[#C62828]" /> },
  { name: 'FastAPI', level: 7, icon: <SiFastapi className="w-6 h-6 text-[#009688]" /> },
  { name: 'Flask', level: 6, icon: <SiFlask className="w-6 h-6" /> },
  { name: 'HTML/CSS/JS', level: 5, icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" /> },
  { name: 'GitHub', level: 8, icon: <SiGithub className="w-6 h-6" /> },
  { name: 'Deployment', level: 6, icon: <Cloud className="w-6 h-6" /> },
  { name: 'MySQL/Postgres', level: 8, icon: <SiPostgresql className="w-6 h-6 text-[#336791]" /> },
  { name: 'AWS', level: 7, icon: <SiAmazonaws className="w-6 h-6 text-[#FF9900]" /> },
  { 
    name: 'API Integration', 
    level: 9, 
    icon: <TbApi className="w-6 h-6" />,
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
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                {skill.details && (
                  <span className="text-sm text-white/70">Click to view integrations</span>
                )}
              </div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <motion.div
                  className="bg-white rounded-full h-2"
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