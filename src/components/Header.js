import React from 'react';
import { Link } from 'react-scroll'; // Import Link for smooth scrolling

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // Toggle light/dark
  };

  return (
    <header className="glassmorphism-header">
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li>
            <Link
              to="about" // Section ID
              smooth={true} // Enable smooth scrolling
              duration={1500} // Scroll duration in milliseconds
              spy={true} // Highlight active section
              activeClass="active" // Add class for the active link
            >
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={1500} spy={true} activeClass="active">
              Projects
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={1500} spy={true} activeClass="active">
              Skills
            </Link>
          </li>
          <li>
            <Link to="resume" smooth={true} duration={1500} spy={true} activeClass="active">
              Resume
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1500} spy={true} activeClass="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="controls">
        <label className="switch">
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          <span className="slider">
            <span className={`icon ${theme === 'dark' ? 'moon' : 'sun'}`}>
              {theme === 'dark' ? '🌙' : '☀️'}
            </span>
          </span>
        </label>
      </div>
    </header>
  );
};

export default Header;
