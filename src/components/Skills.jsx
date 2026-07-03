import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {portfolioData.skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="glass-effect p-6 rounded-lg border border-blue-500 border-opacity-30 card-hover"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-6">
                {skillCategory.category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="space-y-3"
              >
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-effect p-4 rounded-lg text-center border border-purple-500 border-opacity-30 card-hover"
              >
                <p className="text-sm text-gray-300">{cert.name}</p>
                <p className="text-xs text-purple-400 mt-2">{cert.provider}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
