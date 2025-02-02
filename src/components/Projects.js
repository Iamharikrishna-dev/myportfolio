import React, { useState, useEffect } from 'react';
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0); // Tracks the index of the first visible project
  const [projectsPerPage, setProjectsPerPage] = useState(2); // Default to 2 projects per page

  // Projects data
  const projects = [
    {
      title: 'GuessIt - Interactive Guessing Game Web App',
      description: [
        'Deployed on Vercel for seamless performance.',
        'Real-time interaction logic with dynamic hints.',
        'Built with React.js for a responsive user interface.',
        'Engages users to guess hidden elements from prompts.',
      ],
      img: project1Img,
      link: 'https://guessit-chi.vercel.app/', // Add project link
    },
    {
      title: 'LingoSound - Text-to-Speech Web App',
      description: [
        'Converts text into natural-sounding voice for various use cases.',
        'Built with React.js and Web Speech API for accurate voice synthesis.',
        'Deployed on Vercel for optimal performance and scalability.',
        'Features customizable speed and tone for the voice output.',
      ],
      img: project2Img,
      link: 'https://lingosound.vercel.app/',
    },
    {
      title: 'Storyteller App - Story Generation Web App',
      description: [
        'Generates dynamic and creative stories based on user input.',
        'Built using React.js with engaging UI/UX elements.',
        'Deployed on Vercel for seamless performance.',
        'Supports user customization of story elements for a personalized experience.',
      ],
      img: project3Img, // Replace with the appropriate image
      link: 'https://thestorytellerapp.vercel.app/', // Add project link
    },
    
  ];

  // Update projectsPerPage based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setProjectsPerPage(1); // Show 1 project per page on smaller screens
      } else {
        setProjectsPerPage(2); // Default to 2 projects per page
      }
    };

    handleResize(); // Call once to set the initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
  }, []);

  const handleNext = () => {
    if (currentProjectIndex + projectsPerPage < projects.length) {
      setCurrentProjectIndex(currentProjectIndex + projectsPerPage); // Show next set of projects
    }
  };

  const handlePrevious = () => {
    if (currentProjectIndex > 0) {
      setCurrentProjectIndex(currentProjectIndex - projectsPerPage); // Show previous set of projects
    }
  };

  return (
    <section id="projects" className="glassmorphism-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.slice(currentProjectIndex, currentProjectIndex + projectsPerPage).map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              {Array.isArray(project.description) ? (
                <ul>
                  {project.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{project.description}</p>
              )}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-controls">
        <button
          className="pagination-btn"
          onClick={handlePrevious}
          disabled={currentProjectIndex === 0}
        >
          Previous
        </button>
        <button
          className="pagination-btn"
          onClick={handleNext}
          disabled={currentProjectIndex + projectsPerPage >= projects.length}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
