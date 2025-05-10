import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import './Skills.css'; // Don't forget to add your CSS file!

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <p>
        As a passionate web developer, I have honed my skills in creating modern and interactive applications. 
        Here are some of the technologies I use regularly to build innovative and efficient web solutions.
      </p>
      
      <div className="skills-container">
        <div className="skill-card">
          <FaReact size={50} className="icon" />
          <h3>React</h3>
          <p>Building fast and responsive UIs with a focus on component-based architecture.</p>
        </div>

        <div className="skill-card">
          <FaNodeJs size={50} className="icon" />
          <h3>Node.js</h3>
          <p>Building scalable backends and APIs with JavaScript on the server-side.</p>
        </div>

        <div className="skill-card">
          <FaJsSquare size={50} className="icon" />
          <h3>JavaScript</h3>
          <p>Writing clean, modern JavaScript code using ES6+ features.</p>
        </div>

        <div className="skill-card">
          <FaHtml5 size={50} className="icon" />
          <h3>HTML5</h3>
          <p>Structuring websites with the latest semantic HTML for better accessibility and SEO.</p>
        </div>

        <div className="skill-card">
          <FaCss3Alt size={50} className="icon" />
          <h3>CSS3</h3>
          <p>Crafting beautiful, responsive designs with CSS3, Flexbox, and Grid.</p>
        </div>
      </div>

      <h3>Other Technologies Iam Learning to Work With:</h3>
      <ul className="tech-list">
        <li>TypeScript</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Git & GitHub</li>
        <li>REST APIs</li>
        <li>Responsive Design</li>
      </ul>
    </section>
  );
};

export default Skills;
