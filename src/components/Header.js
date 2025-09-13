import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { FaSnowflake } from 'react-icons/fa'; // Import the snowflake icon

const Header = ({ theme, setTheme, snowEffect, toggleSnowEffect }) => {
  const [menuOpen, setMenuOpen] = useState(false);
<<<<<<< HEAD
  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);
=======
>>>>>>> ba752a6148810468c279a8f3de50ca6136f1d0c6
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
<<<<<<< HEAD
    <>
      <header ref={headerRef} className={`glassmorphism-header${isSticky ? ' sticky' : ''}`}>
        <h1>Portfolio</h1>
        {/* Mobile menu button */}
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
    </>
=======
    <header ref={headerRef} className={`glassmorphism-header${isSticky ? ' sticky' : ''}`}>
      {!isSticky && <h1>My Portfolio</h1>}
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
>>>>>>> ba752a6148810468c279a8f3de50ca6136f1d0c6
  );
};

export default Header;
