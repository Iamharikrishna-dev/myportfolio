import React from 'react';
import profilePic from '../assets/profile.jpg'; // Replace with your image path

const About = () => {
  return (
    <section id="about" className="glassmorphism-section">
      <div className="about-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I’m Hari Krishnan, a passionate software developer specializing in full-stack development. I love crafting efficient and scalable web applications, solving complex problems, and learning new technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
