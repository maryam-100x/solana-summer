import React from 'react';
import { motion } from 'framer-motion';
import { useSolanaSummerStats } from '../hooks/useSolanaSummerStats';

const Hero = () => {
  const { marketCap, volume24h, holders, loading } = useSolanaSummerStats();

  const format = (num) =>
    num >= 1_000_000
      ? `$${(num / 1_000_000).toFixed(1)}M`
      : num >= 1_000
      ? `$${(num / 1_000).toFixed(1)}K`
      : `$${num}`;

  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
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

        {/* 💸 Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="stat-box">
            <h4>Market Cap</h4>
            <p>{loading ? 'Loading...' : format(marketCap)}</p>
          </div>
          <div className="stat-box">
            <h4>Holders</h4>
            <p>{loading ? 'Loading...' : holders?.toLocaleString()}</p>
          </div>
          <div className="stat-box">
            <h4>24h Volume</h4>
            <p>{loading ? 'Loading...' : format(volume24h)}</p>
          </div>
        </motion.div>
      </motion.div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
