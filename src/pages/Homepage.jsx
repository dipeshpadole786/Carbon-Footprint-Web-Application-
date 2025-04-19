import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Homepage.css';

export const Homepage = () => {
  return (
    <motion.div
      className="homepage-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-section">
        <motion.h1
          className="heading"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          Carbon Footprint Calculator
        </motion.h1>

        <motion.p
          className="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Curious how your daily choices affect our planet? Enter your habits and get actionable insights to go greener!
        </motion.p>

        <div className="buttons">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/about">
              <button className="btn primary">
                Calculate
              </button>
            </NavLink>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink to={"tips"}>
              <button className="btn secondary">
                Tips
              </button>
            </NavLink>
            <NavLink to={"map"}>
              <button style={{marginLeft:"30px"}} className="btn secondary">
                Map
              </button>
            </NavLink>

          </motion.div>
        </div>
      </div>

      <motion.div
        className="image-section"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
      >
        <img
          src="https://www.iitk.ac.in/ckc/carbon-calculator/static/media/iitk.1d9017c3e39321013b60.jpg"
          alt="Green Earth"
          className="hero-image"
        />
      </motion.div>
    </motion.div>
  );
};