import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure your CSS is correctly linked
import SnowEffect from './SnowEffect';
import './snow-effect.scss';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';


function App() {
  const [theme, setTheme] = useState(sessionStorage.getItem('theme') || 'light');
  const [snowEffect, setSnowEffect] = useState(false); // State for snow effect

  useEffect(() => {
    console.log('Current theme:', theme); // Debugging the theme value
    const root = document.body;

    // Ensure previous classes are removed and new class is added
    if (theme === 'light') {
      root.classList.remove('dark-mode');
      root.classList.add('light-mode');
    } else if (theme === 'dark') {
      root.classList.remove('light-mode');
      root.classList.add('dark-mode');
    }

    // Store the theme in sessionStorage
    sessionStorage.setItem('theme', theme);

    // Debugging the updated classList
    console.log('Updated body class list:', root.classList);
  }, [theme]);

  const toggleSnowEffect = () => {
    setSnowEffect(!snowEffect);
  };
  
  return (
    <div className="App">
      
      <Header
        theme={theme}
        setTheme={setTheme}
        snowEffect={snowEffect}
        toggleSnowEffect={toggleSnowEffect}
      />
      <main>
        <About />
        <Projects />
        <Skills/>
        <Resume />
        <Contact />
        {snowEffect && (
          <div className="snow-container">
            <SnowEffect />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
