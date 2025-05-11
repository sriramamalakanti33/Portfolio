import React from "react";
import './AboutPage.css';
import profileImage from '../assets/images/mine.png';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
    <section id="about" className="about">
     <div className="about-container">
      <div className="about-content">
        <h2>About me</h2>
        <p>
            Hi, I'm <strong>Sriram Amalakanti</strong>, a passionate and self-driven web developer with a love for creating beautiful and interactive web applications.
            My journey into web development started with curiosity, and it quickly turned into a full-blown obsession. I specialize in building modern and responsive websites using React.js, but I also have experience with a range of technologies.
          </p>
          <p>
            I'm always looking to learn new tools, explore innovative development practices, and challenge myself to improve my coding skills. When I'm not coding, you can find me reading tech blogs, attending developer meetups, or experimenting with new web technologies.
          </p>
      </div>
      <div className="about-image">
        <img src={profileImage} alt="profile"/>
      </div>
     </div>
    
     <div className="experience-education">
        {/* Experience Section */}
        <div className="experience">
          <h3>Experience:</h3>
          <ul>
            <li>💼 <strong>Web Developer Intern</strong> - Raj Reddy Center for Technology and Society (RCTS), IIIT Hyderabad (2023 - 2024)</li>
            <li>💼 <strong>AI/ML Virtual Internship</strong> - India Edu Program and Google for Developers (Jan 2024 - March 2024)</li>
            <li>💼 <strong>Andorid Developer Virtual Internship</strong> - India Edu Program and Google for Developers (April 2024 - June 2024)</li>
          </ul>
        </div>
        {/* Education Section */}
        <div className="education">
          <h3>Education:</h3>
          <ul>
            <li>🎓 <strong>Bachelor's in Computer Science and Engineering</strong> - Kakinada Institute of Engineering and Technology(KIET), 2020-2024</li>
            <li>🎓 <strong>Intermideate In Maths, Physics and Chemistry</strong> - KSN Junior college, 2018-2020</li>
            <li>🎓 <strong>Secondary State Board -10th Standard</strong> - Pratibha Vidhyaniketan EM School, 2017-2018</li>
          </ul>
        </div>
      </div>
      <Skills />
      <div className="certifications">
        <h3>Certifications</h3>
        <ul>
          <li>✅ Data Analysis with Python - [IBM], [2022]</li>
          <li>✅ Communication and amp; Network Security - [Infosys], [2023]</li>
          <li>✅ Fundamentals of Java Programming - [Board Infinity], [2024]</li>
          <li>✅ Cloud Security Fundamentals - [Paloalto Networks], [2024]</li>
          <li>✅ Cybersecurity Fundamentals - [Paloalto Networks], [2024]</li>
          <li>✅ Fundamentals of Information Security - [Infosys], [2023]</li>
          <li>✅ Fundamentals of Cryptography - [Infosys], [2023]</li>
          <li>✅ Identity and Access Management IAM - [Infosys], [2023]</li>
          <li>✅ Introduction to Cyber Security - [Infosys], [2023]</li>
          <li>✅ Introduction to Python - [IBM], [2022]</li>
          <li>✅ Java SE 11 Programmer II: Secure Coding in Java SE 11 Applications - [Infosys], [2023]</li>
          <li>✅ Networking and Web Technology - [Infosys], [2023]</li>
        </ul>
      </div>
      <h3>Fun Fact:</h3>
      <p>
        When I'm not coding, you can find me exploring nature, photography, or working on my passion project: a blog where I share insights about web development and technology trends.
      </p>
    
    </section>
      <Footer/>
      </div>
  );
}

export default About;