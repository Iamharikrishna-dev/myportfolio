import React from 'react';
import { Link } from 'react-scroll';
import { FaSnowflake } from 'react-icons/fa'; // Import the snowflake icon

const Header = ({ theme, setTheme, snowEffect, toggleSnowEffect }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="glassmorphism-header">
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={1500}
              spy={true}
              activeClass="active"
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
        <label className="switch">
          <input
            type="checkbox"
            checked={snowEffect}
            onChange={toggleSnowEffect}
          />
          <span className="slider">
            <span className="icon snowflake">
              <FaSnowflake />
            </span>
          </span>
        </label>
      </div>
    </header>
  );
};

export default Header;
