import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text"
        >
          Experience & Education
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-lg border-l-4 border-blue-500 card-hover"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.duration}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-8">Education</h3>
            <div className="space-y-8">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-lg border-l-4 border-purple-500 card-hover"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-purple-400">{edu.field}</p>
                    </div>
                    <span className="text-sm text-gray-500">{edu.year}</span>
                  </div>
                  <p className="text-gray-400 mb-2">{edu.institution}</p>
                  {edu.gpa && (
                    <p className="text-sm text-purple-300">GPA: {edu.gpa}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
