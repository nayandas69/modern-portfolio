import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/profile.png';
import { ArrowDown, GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Avatar */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 animate-glow">
              <img
                src={myPhoto}
                alt="Alex Johnson"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-primary-400 text-lg mb-4 font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            <span className="gradient-text">Alex Johnson</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
          >
            Full Stack Developer & UI/UX Designer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I craft exceptional digital experiences through innovative web development 
            and thoughtful design. Passionate about creating solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              data-cursor="hover"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
              data-cursor="hover"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { icon: GithubLogo, href: '#', label: 'GitHub' },
              { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
              { icon: TwitterLogo, href: '#', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                data-cursor="hover"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;