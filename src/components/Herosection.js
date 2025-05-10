import React from 'react';
import { motion } from 'framer-motion';
import './Herosection.css';
import pic from '../assets/images/pic.jpg';

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, scale: 0.9, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
      >
        <div className="profile-container">
          <motion.img
            src={pic}
            alt="Profile"
            className="profile-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <h1 className="hero-heading">Welcome to My Portfolio</h1>
          <p className="hero-description">
            I am a skilled React.js Developer building sleek, responsive, and
            dynamic web applications.
          </p>
        </motion.div>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.a
            href="/projects"
            className="cta-button"
            whileHover={{ scale: 1.1, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="/about"
            className="cta-button"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            Know More
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
