import React, { useState, useEffect } from 'react';
import './App.css';
import SnowEffect from './SnowEffect';
import './snow-effect.scss';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import emailjs from '@emailjs/browser'; // Import EmailJS

function App() {
  const [theme, setTheme] = useState(sessionStorage.getItem('theme') || 'light');
  const [snowEffect, setSnowEffect] = useState(false);

  useEffect(() => {
    console.log('Current theme:', theme);
    const root = document.body;

    if (theme === 'light') {
      root.classList.remove('dark-mode');
      root.classList.add('light-mode');
    } else if (theme === 'dark') {
      root.classList.remove('light-mode');
      root.classList.add('dark-mode');
    }

    sessionStorage.setItem('theme', theme);
    console.log('Updated body class list:', root.classList);

    // Get device information
    const userAgent = navigator.userAgent;

    // Send email on initial visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      sendVisitNotification(userAgent);
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, [theme]);

  const sendVisitNotification = (userAgent) => {
    const templateParams = {
      to_name: 'Hari Krishnan', // Your name
      to_email: 'krishnanhari400.hk@gmail.com', // Your email
      from_name: 'Portfolio Visitor',
      message: ` ${userAgent}`,
    };

    emailjs
      .send(
        'service_ozaqk7d', // Replace with your EmailJS service ID
        'template_fstv3m9', // Replace with your EmailJS template ID
        templateParams,
        'JyKYbdWMJzXAwtVV7' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Visit notification email sent successfully!', result.text);
        },
        (error) => {
          console.error('Error sending visit notification email:', error.text);
        }
      );
  };

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
        <Skills />
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
