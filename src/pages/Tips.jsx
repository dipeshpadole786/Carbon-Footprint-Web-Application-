import React from 'react';
import { motion } from 'framer-motion';

export const Tips = () => {
    const IMPACT_DATA = [
        {
            category: 'Travel (km/week)',
            ranges: [
                { range: '0–50', prevention: 'Walk, bike, or use public transit', effect: 'Low emissions', disease: 'None' },
                { range: '51–150', prevention: 'Carpool, combine errands', effect: 'Moderate CO₂ release', disease: 'Mild respiratory irritation' },
                { range: '151+', prevention: 'Switch to EV or telecommute', effect: 'High greenhouse gases', disease: 'Asthma exacerbation, COPD risk' },
            ],
        },
        {
            category: 'Food (meals/week)',
            ranges: [
                { range: '0–2 meat meals', prevention: 'Adopt flexitarian diet', effect: 'Low methane output', disease: 'None' },
                { range: '3–7 meat meals', prevention: 'Meatless Mondays', effect: 'Moderate livestock emissions', disease: 'Increased heart disease risk' },
                { range: '8+', prevention: 'Go plant-based', effect: 'High methane & land use', disease: 'Obesity, cardiovascular disease' },
            ],
        },
        {
            category: 'Shopping (bags/week)',
            ranges: [
                { range: '0–1', prevention: 'Use reusable bags/containers', effect: 'Minimal waste', disease: 'None' },
                { range: '2–5', prevention: 'Recycle & upcycle items', effect: 'Moderate landfill load', disease: 'Allergic reactions from microplastics' },
                { range: '6+', prevention: 'Zero‑waste lifestyle', effect: 'High pollution & waste', disease: 'Endocrine disruption, cancer risk' },
            ],
        },
        {
            category: 'Electricity (kWh/month)',
            ranges: [
                { range: '0–200', prevention: 'Unplug idle devices, LED bulbs', effect: 'Low energy footprint', disease: 'None' },
                { range: '201–500', prevention: 'Smart thermostats, efficient appliances', effect: 'Moderate grid strain', disease: 'Heat-related illness risk' },
                { range: '501+', prevention: 'Install solar panels', effect: 'High carbon intensity', disease: 'Respiratory problems, heat stroke' },
            ],
        },
    ];

    return (
        <div>
            <style>{`
        .impact-table-wrapper {
          padding: 40px;
          background: linear-gradient(135deg, #f1f8e9 0%, #c8e6c9 100%);
          border-radius: 16px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        }
        .impact-header {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 30px;
          font-family: sans-serif;
        }
        .impact-section {
          margin-bottom: 40px;
        }
        .section-title {
          font-size: 1.75rem;
          margin-bottom: 10px;
          text-transform: uppercase;
          font-family: sans-serif;
        }
        .impact-table {
          width: 100%;
          border-collapse: collapse;
        }
        .impact-table th,
        .impact-table td {
          border: 1px solid #a5d6a7;
          padding: 12px 8px;
          text-align: left;
          font-family: sans-serif;
        }
        .impact-table th {
          background-color: #a5d6a7;
          color: #1b5e20;
        }
        .impact-table tr:nth-child(even) td {
          background-color: #e8f5e9;
        }
        @media (max-width: 768px) {
          .impact-header { font-size: 2rem; }
          .section-title { font-size: 1.5rem; }
          .impact-table th,
          .impact-table td { padding: 8px 6px; font-size: 0.9rem; }
        }
      `}</style>

            <motion.div
                className="impact-table-wrapper"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
                }}
            >
                <motion.h1
                    className="impact-header"
                    variants={{
                        hidden: { scale: 0.8, opacity: 0 },
                        visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 120 } }
                    }}
                >
                    🌿 Carbon Footprint Impact Guide
                </motion.h1>

                {IMPACT_DATA.map((section, idx) => (
                    <motion.div
                        className="impact-section"
                        key={idx}
                        whileHover={{ scale: 1.02, rotate: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -30 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <motion.h2
                            className="section-title"
                            initial={{ color: '#2e7d32' }}
                            animate={{ color: ['#2e7d32', '#81c784', '#2e7d32'], transition: { repeat: Infinity, duration: 3 } }}
                        >
                            {section.category}
                        </motion.h2>

                        <table className="impact-table">
                            <thead>
                                <tr>
                                    <th>Range</th>
                                    <th>Prevention</th>
                                    <th>Adverse Effect</th>
                                    <th>Health Risks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {section.ranges.map((row, i) => (
                                    <motion.tr
                                        key={i}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ backgroundColor: '#e8f5e9' }}
                                    >
                                        <td>{row.range}</td>
                                        <td>{row.prevention}</td>
                                        <td>{row.effect}</td>
                                        <td>{row.disease}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};