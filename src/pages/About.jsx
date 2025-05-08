import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* 🌄 Hero Section */}
      <div className="hero-image">
        <div className="hero-overlay">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">
            Learn the story, purpose, and tech behind our Travel Expense Tracker
          </p>
        </div>
      </div>

      {/* 📄 Content */}
      <div className="about-container">
        <h1>About This Project</h1>
        <p>
          This Travel Expense Tracker is a React-based web application developed as a learning project...
        </p>

        <h2>📜 Our History:</h2>
        <p>
          The idea for this tracker originated from the need to manage personal travel budgets more effectively...
        </p>

        <h2>🎯 Our Target:</h2>
        <p>
          Our target is to provide travelers with a tool that helps them control their travel spending...
        </p>

        <h2>💡 Our Motive:</h2>
        <p>
          The motive is to improve financial awareness during travel and enhance developer skills...
        </p>

        <h2>🔧 Technologies Used:</h2>
        <ul>
          <li><strong>React JS</strong> – Component-based UI</li>
          <li><strong>Tailwind CSS</strong> – Utility-first styling</li>
          <li><strong>React Router DOM</strong> – Page navigation</li>
          <li><strong>Vite</strong> – Dev environment</li>
        </ul>

        <h2>🛠️ Features:</h2>
        <ul>
          <li>Expense form</li>
          <li>Responsive layout</li>
          <li>Undo/Undo All</li>
          <li>Navigation bar</li>
          <li>INR currency formatting</li>
        </ul>

        <h2>📚 Learning Sources:</h2>
        <ul>
          <li>React docs, Tailwind CSS docs</li>
          <li>MDN Web Docs, W3Schools</li>
          <li>YouTube tutorials</li>
          <li>ChatGPT</li>
        </ul>

        <h2>🙋‍♂️ Developer’s Note:</h2>
        <p>
          This project was completed as part of a learning initiative to strengthen my understanding of React.
        </p>
      </div>
    </div>
  );
};

export default About;
