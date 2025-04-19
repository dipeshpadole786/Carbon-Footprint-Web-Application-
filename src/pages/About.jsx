import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  Legend
} from 'recharts';
import { motion } from 'framer-motion';
import './About.css';

const TIPS = {
  travel: [
    { threshold: 200, tip: 'Consider carpooling or using public transport.' },
    { threshold: 100, tip: 'Try biking or walking for short trips.' },
    { threshold: 0, tip: 'Great! Your travel footprint is low.' }
  ],
  food: [
    { threshold: 7, tip: 'Swap one meat meal per week with plant-based.' },
    { threshold: 3, tip: 'Your meat consumption is moderate.' },
    { threshold: 0, tip: 'Excellent! Very low meat consumption.' }
  ],
  shopping: [
    { threshold: 5, tip: 'Reduce single-use plastics; opt for reusable.' },
    { threshold: 2, tip: 'Donate or upcycle items instead of discarding.' },
    { threshold: 0, tip: 'Fantastic! Minimal waste generation.' }
  ],
  electricity: [
    { threshold: 500, tip: 'Switch to LED bulbs and unplug devices.' },
    { threshold: 300, tip: 'Use energy-efficient appliances.' },
    { threshold: 0, tip: 'Great energy saver! Very low usage.' }
  ]
};

// Average values
const AVERAGE = {
  travel: 150,
  food: 5,
  shopping: 3,
  electricity: 400
};

export const About = () => {
  const [travel, setTravel] = useState('');
  const [food, setFood] = useState('');
  const [shopping, setShopping] = useState('');
  const [electricity, setElectricity] = useState('');
  const [data, setData] = useState(null);
  const [tips, setTips] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const t = parseFloat(travel) || 0;
    const f = parseFloat(food) || 0;
    const s = parseFloat(shopping) || 0;
    const eUsage = parseFloat(electricity) || 0;

    const chartData = [
      {
        key: 'travel',
        name: 'Travel',
        you: t,
        average: AVERAGE.travel
      },
      {
        key: 'food',
        name: 'Food',
        you: f,
        average: AVERAGE.food
      },
      {
        key: 'shopping',
        name: 'Shopping',
        you: s,
        average: AVERAGE.shopping
      },
      {
        key: 'electricity',
        name: 'Electricity',
        you: eUsage,
        average: AVERAGE.electricity
      }
    ];
    setData(chartData);
    setShowCompare(false); // Reset compare toggle

    const newTips = chartData.map(item => {
      const found = TIPS[item.key].find(t => item.you >= t.threshold);
      return { name: item.name, tip: found.tip };
    });
    setTips(newTips);
  };

  const handleCompare = () => {
    if (data) {
      setShowCompare(true);
    } else {
      alert('Please calculate your values first.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container-fluid py-5"
    >
      <div className="row justify-content-center">
        <motion.div
          className="col-12 col-md-6 bg-white rounded-2xl shadow-lg p-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <h2 className="text-center mb-4">🌍 Eco Impact Tracker</h2>
          <form onSubmit={handleSubmit}>
            {[
              { id: 'travel', label: 'Travel (km/week)', state: travel, setter: setTravel },
              { id: 'food', label: 'Food (meals/week)', state: food, setter: setFood },
              { id: 'shopping', label: 'Shopping (bags/week)', state: shopping, setter: setShopping },
              { id: 'electricity', label: 'Electricity (kWh/month)', state: electricity, setter: setElectricity }
            ].map(field => (
              <div className="form-group mb-3" key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  type="number"
                  className="form-control"
                  id={field.id}
                  placeholder={field.label}
                  value={field.state}
                  onChange={e => field.setter(e.target.value)}
                />
              </div>
            ))}
            <button type="submit" className="btn btn-success w-100 mt-3">Calculate</button>
            <button
              type="button"
              className="btn btn-outline-primary w-100 mt-2"
              onClick={handleCompare}
            >
              Compare with Average
            </button>
          </form>
        </motion.div>

        {data && (
          <motion.div
            className="col-12 col-md-6 p-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
            style={{ height: 350 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 50 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" />
                <YAxis>
                  <Label value="Value" angle={-90} position="insideLeft" offset={10} />
                </YAxis>
                <Tooltip />
                <Legend />
                <Bar dataKey="you" fill="#2e7d32" name="You" barSize={40} />
                {showCompare && (
                  <Bar dataKey="average" fill="#1976d2" name="Average" barSize={40} />
                )}
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        )}

        {tips.length > 0 && (
          <motion.div
            className="col-12 col-md-10 bg-white rounded-2xl shadow-lg p-4 mt-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 80 }}
          >
            <h4 className="mb-3">Personalized Tips</h4>
            <ul className="list-group">
              {tips.map((t, i) => (
                <li className="list-group-item" key={i}>
                  <strong>{t.name}:</strong> {t.tip}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};