import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-gray-700 glass-effect">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Left - Brand */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold glow-text">HV</span>
            <span className="text-gray-400">© {currentYear}</span>
          </div>

          {/* Center - Message */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
              <FaHeart className="text-red-500" />
            </motion.div>
            <span>by Harshita</span>
          </div>

          {/* Right - Links */}
          <div className="flex gap-6 text-gray-400">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}
          className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-gray-700"
        >
          <p>
            Portfolio built with React, Vite, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
