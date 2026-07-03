import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-900 via-opacity-5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="flex justify-center"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"
              alt="About"
              className="rounded-lg shadow-lg border-2 border-blue-500"
              animate={{
                boxShadow: [
                  '0 0 5px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.8)',
                  '0 0 5px rgba(59, 130, 246, 0.5)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              {portfolioData.bio}
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Who I Am</h3>
              <p className="text-gray-400">
                I'm a full-stack developer with a passion for creating beautiful, functional web applications. 
                With experience in modern web technologies and a commitment to clean code, I deliver solutions 
                that make a real impact.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">What I Do</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Build responsive and interactive web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Design and develop scalable backend solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Create beautiful user interfaces with attention to detail</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
