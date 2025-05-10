import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './About.css'

const AboutDemo = () => {
  const navigate = useNavigate(); // using the useNavigate hook

  const handleRedirect = () => {
    navigate('/about'); 
  };

  return (
    <div className="about-demo-container">
      <div className="about-demo">
        <h1>About Me</h1>
        <p>
          Hi, I'm <strong>Sriram Amalakanti</strong>, a passionate <strong>Web developer</strong>. I
          specialize in creating beautiful and functional websites with a focus on
          user experience and performance. <br /> <br />
          I am Sriram Amalakanti, a dynamic developer intern with a year of experience in front-end software development, specializing in digitizing educational frameworks. Proficient in React.js, HTML, and CSS, I deliver innovative web solutions. My internship at the Raj Reddy Center for Technology and Society (RCTS), IIIT Hyderabad, focused on the NEP Project's school complex digitization, where I explored front-end packages, participated in code reviews, and provided user support. 
          <br/> I also completed an AI/ML virtual internship with the India Edu Program and Google for Developers.

          <br></br><br/>I graduated with a CSE-Cybersecurity degree from Kakinada Institute of Engineering and Technology (2020-2024). <br/> My projects include a Java password generator, a full-stack web application (K_Hub_IIIT) using React, Node.js, and MongoDB to track dietary preferences, and a password strength checker web app. I have taken courses in Java, cloud computing, cybersecurity, and Python.

I have volunteered with the National Service Scheme and am a member of Toastmasters International. <br/> <br/> My skills include HTML, CSS, Java, Python, JavaScript, React.js, MongoDB, Node.js, team management, and communication. I can actively building my skills and seeking opportunities to contribute to impactful projects.          <br/> <br/>
          Want to know more about my journey and skills?
        </p>
        <button onClick={handleRedirect} className="btn-link">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutDemo;
