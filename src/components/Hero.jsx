import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { portfolioData } from '../data/portfolio'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, type: 'spring', stiffness: 100 }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold glow-text"
            >
              {portfolioData.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl text-blue-400"
            >
              {portfolioData.title}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              {portfolioData.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all transform hover:scale-105 cursor-pointer">
                  Get In Touch
                </button>
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3 border-2 border-blue-500 hover:bg-blue-500 hover:bg-opacity-10 rounded-lg font-semibold transition-all transform hover:scale-105">
                  View My Work
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-2xl"></div>
              <motion.img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt={portfolioData.name}
                className="w-full h-full rounded-full object-cover relative z-10 border-4 border-blue-500"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <FaArrowDown className="text-blue-400 text-2xl" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
