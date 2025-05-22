import React from 'react';
import Tiw from '../assets/icons/twitter.png';
import Lin from '../assets/icons/linkedin.png';
import Git from '../assets/icons/github.png';
import Insta from '../assets/icons/social.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Information</h4>
          <p><strong>Email:</strong> sriramamalakanti369@gmail.com</p>
          <p><strong>Phone:</strong> +91 9963859042</p>
          <p><strong>Address:</strong> 1-91/1, Main Road, Near Water Tank, Prakash Rao Peta, Unduru, Samalakot - 533434, Andhra Pradesh, India</p>
        </div>
        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sriram-amalakanti/" target="_blank" rel="noopener noreferrer">
              <img src={Lin} alt='LinkedIn' className='social-icons' width='50px' height='50px'/>
            </a>
            <a href="https://github.com/sriramamalakanti33" target="_blank" rel="noopener noreferrer">
              <img src={Git} alt='Github'className='social-icons' width='70px' height='50px'/>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <img src={Tiw} alt='Twitter' className='social-icons' width='50px' height='50px' />
            </a>
            <a href="https://www.instagram.com/sriram_amalakanti/" target="_blank" rel="noopener noreferrer">
              <img src={Insta} alt='Instagram' className='social-icons' width='50px' height='50px' />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Me</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sriram Amalakanti. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
