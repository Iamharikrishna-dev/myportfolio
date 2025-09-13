import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { FaSnowflake } from 'react-icons/fa';

const Header = ({ theme, setTheme, snowEffect, toggleSnowEffect }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className={`glassmorphism-header${isSticky ? ' sticky' : ''}`}>
      {/* Always show Portfolio title */}
      <h1>Portfolio</h1>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="menu-icon">&#9776;</span>
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={1500}
              spy={true}
              activeClass="active"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={1500} spy={true} activeClass="active" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={1500} spy={true} activeClass="active" onClick={() => setMenuOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="resume" smooth={true} duration={1500} spy={true} activeClass="active" onClick={() => setMenuOpen(false)}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1500} spy={true} activeClass="active" onClick={() => setMenuOpen(false)}>
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
