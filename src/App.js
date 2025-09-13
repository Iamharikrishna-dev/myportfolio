import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import './snow-effect.scss';
import emailjs from '@emailjs/browser';

const SnowEffect = lazy(() => import('./SnowEffect'));
const Header = React.memo(lazy(() => import('./components/Header')));
const About = React.memo(lazy(() => import('./components/About')));
const Projects = lazy(() => import('./components/Projects'));
const Resume = React.memo(lazy(() => import('./components/Resume')));
const Contact = React.memo(lazy(() => import('./components/Contact')));
const Footer = React.memo(lazy(() => import('./components/Footer')));
const Skills = React.memo(lazy(() => import('./components/Skills')));

function App() {
  const [theme, setTheme] = useState(sessionStorage.getItem('theme') || 'light');
  const [snowEffect, setSnowEffect] = useState(false);

  useEffect(() => {
    const root = document.body;
    if (theme === 'light') {
      root.classList.remove('dark-mode');
      root.classList.add('light-mode');
    } else if (theme === 'dark') {
      root.classList.remove('light-mode');
      root.classList.add('dark-mode');
    }
    sessionStorage.setItem('theme', theme);
    // Get device information
    const userAgent = navigator.userAgent;
    // Send email on initial visit
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      sendVisitNotification(userAgent);
      localStorage.setItem('hasVisited', 'true');
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
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default App;
