import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaAndroid, FaJava } from 'react-icons/fa'; // Import additional icons
import { SiMongodb, SiPython, SiGithub, SiAdobexd, SiMysql, SiVuedotjs, SiGoland } from 'react-icons/si'; // Additional skill icons
import KendoIcon from '../assets/kendoui.svg'; // Import custom SVG

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" size={40} />, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" size={40} />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={40} />, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', icon: <FaReact color="#61DAFB" size={40} />, url: 'https://reactjs.org/' },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" size={40} />, url: 'https://nodejs.org/' },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={40} />, url: 'https://www.mongodb.com/' },
    { name: 'Python', icon: <SiPython color="#3776AB" size={40} />, url: 'https://www.python.org/' },
    { name: 'GitHub', icon: <SiGithub color="#181717" size={40} />, url: 'https://github.com/' },
    { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" size={40} />, url: 'https://getbootstrap.com/' },
    { name: 'Adobe XD', icon: <SiAdobexd color="#6a066e" size={40} />, url: 'https://www.adobe.com/products/xd.html' },
    { name: 'Java', icon: <FaJava color="#007396" size={40} />, url: 'https://www.java.com/' },
    { name: 'Vue.js', icon: <SiVuedotjs color="#4FC08D" size={40} />, url: 'https://vuejs.org/' },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" size={40} />, url: 'https://www.mysql.com/' },
    { name: 'Android Studio', icon: <FaAndroid color="#3DDC84" size={40} />, url: 'https://developer.android.com/studio' },
    { name: 'Kendo UI', icon: <img src={KendoIcon} alt="Kendo UI" style={{ width: '50px', height: '50px' }} />, url: 'https://www.telerik.com/kendo-ui' },
    { name: 'Golang', icon: <SiGoland color="#00ADD8" size={40} />, url: 'https://golang.org/' }, // Golang icon
  ];

  return (
    <section id="skills" className="glassmorphism-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card-link"
          >
            <div className="skill-card">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
