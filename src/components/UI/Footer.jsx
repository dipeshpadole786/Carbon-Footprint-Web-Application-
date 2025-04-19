import React from 'react';
import { motion } from 'framer-motion';
import './Fotter.css';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="footer-wrapper"
    >
      <hr />
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <h5>🌱 EcoCalc</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 footer-link">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 footer-link">About</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 footer-link">Tips</a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>💬 Services</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 footer-link">Customer Care</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 footer-link">Support</a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>📍 Address</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 footer-link">Nagpur, India</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 footer-link">+91 12345 67890</a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>📬 Subscribe</h5>
            <form>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn btn-success"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </div>
        </div>


      </div>
    </motion.footer>
  );
};