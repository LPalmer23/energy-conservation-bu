// Home.jsx
import React from 'react';
import './Home.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const usageData = [
  { name: 'Mon', kWh: 320 },
  { name: 'Tue', kWh: 280 },
  { name: 'Wed', kWh: 310 },
  { name: 'Thu', kWh: 290 },
  { name: 'Fri', kWh: 400 },
];

const pieData = [
  { name: 'Lights', value: 40 },
  { name: 'HVAC', value: 35 },
  { name: 'Elevators', value: 15 },
  { name: 'Others', value: 10 },
];

const COLORS = ['#ff4d4d', '#ffa64d', '#4d94ff', '#5cd65c'];

export default function Home() {

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-on-scroll');

    const handleScroll = () => {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      {/* Landing Background Image with Animated Text */}
      <div className="landing-container">
        <div className="overlay">
          <h1 className="animated-title">Boston University Energy Insights</h1>
        </div>
        <div className="scroll-indicator">↓</div>
      </div>

      {/* Section: Line Chart */}
      <div className="section fade-on-scroll" id="charts">
        <h2>Energy Usage Trends</h2>
        <ResponsiveContainer width="95%" height={300}>
          <LineChart data={usageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'kWh', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="kWh" stroke="#007bff" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>


            {/* Section: Pie Chart + Description Side by Side */}
            <div className="section fade-on-scroll" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
        <div style={{ flex: '1 1 300px', maxWidth: '500px' }}>
          <h2>Energy Breakdown by System</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={{ flex: '1 1 300px', maxWidth: '500px', textAlign: 'left' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            This chart breaks down where energy is being consumed across BU buildings.
            HVAC systems and lighting account for the bulk of usage, with elevators and miscellaneous systems making up the rest.
            Our goal is to monitor these sources and reduce waste through behavioral and operational changes.
          </p>
          <Link to="/learnmore">
            <button style={{
              marginTop: '1.5rem',
              padding: '12px 24px',
              fontSize: '1.1rem',
              backgroundColor: '#cc0000',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}>
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

