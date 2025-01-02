import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useToast } from "@/components/ui/use-toast"

export default function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link
    const mailtoLink = `mailto:SulemanAwais.work@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
              <p className="text-white/70 mb-8">
                Feel free to reach out through any of these platforms. I'll get back to you as soon as possible.
              </p>
            </div>
            <div className="space-y-4">
              <a 
                href="mailto:SulemanAwais.work@gmail.com" 
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300"
              >
                <FaEnvelope className="text-xl" />
                <span>SulemanAwais.work@gmail.com</span>
              </a>
              <a 
                href="https://github.com/sulemanAwais" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300"
              >
                <FaGithub className="text-xl" />
                <span>github.com/sulemanAwais</span>
              </a>
              <a 
                href="http://linkedin.com/in/sulemanawais/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin className="text-xl" />
                <span>linkedin.com/in/sulemanawais</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}