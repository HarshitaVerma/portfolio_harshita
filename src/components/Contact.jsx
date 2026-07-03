import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { portfolioData } from '../data/portfolio'

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const socialIcons = {
    FaGithub: FaGithub,
    FaLinkedin: FaLinkedin,
    FaTwitter: FaTwitter,
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent via-pink-900 via-opacity-5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-8">Contact Information</h3>

              {/* Email */}
              <motion.a
                href={`mailto:${portfolioData.email}`}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 glass-effect p-4 rounded-lg cursor-pointer card-hover"
              >
                <FaEnvelope className="text-blue-400 text-2xl" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white">{portfolioData.email}</p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 glass-effect p-4 rounded-lg"
              >
                <FaPhone className="text-green-400 text-2xl" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-white">{portfolioData.phone}</p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 glass-effect p-4 rounded-lg"
              >
                <FaMapMarkerAlt className="text-red-400 text-2xl" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white">{portfolioData.location}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-gray-700"
            >
              <p className="text-gray-400 mb-6">Connect with me on social media</p>
              <div className="flex gap-6">
                {portfolioData.socialLinks.map((social, index) => {
                  const IconComponent = socialIcons[social.icon]
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 glass-effect rounded-full hover:text-blue-400 transition-colors card-hover"
                    >
                      <IconComponent className="text-2xl" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="glass-effect p-8 rounded-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-900 border border-blue-500 border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-gray-900 border border-blue-500 border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-2 bg-gray-900 border border-blue-500 border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full px-4 py-2 bg-gray-900 border border-blue-500 border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></motion.textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
