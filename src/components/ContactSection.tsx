import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useToast } from "@/components/ui/use-toast"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link
    const mailtoLink = `mailto:SulemanAwais.work@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    })
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D6BCFA] to-[#9b87f5]"
        >
          Get in Touch
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6 backdrop-blur-lg bg-white/10 p-8 rounded-3xl border border-white/20 shadow-xl"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-white placeholder-white/50"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-white placeholder-white/50"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-white placeholder-white/50"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8 backdrop-blur-lg bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#D6BCFA] to-[#9b87f5]">
                Let's Connect
              </h3>
              <p className="text-white/80 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
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

            <div className="pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm">
                Prefer email? Send me a message and I'll get back to you within 24-48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
