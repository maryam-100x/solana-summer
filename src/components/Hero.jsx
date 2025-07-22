import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to <span className="highlight">Solana Summer</span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The Coin For This Summer On Solana
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-cta"
        >
          <a href="#coin" className="cta-button">
            Explore $SUMMER
          </a>
          <a href="#event" className="secondary-button">
            Event Details
          </a>
        </motion.div>
      </motion.div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;