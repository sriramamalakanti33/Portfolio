import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_9kj3ceg';  
    const templateID = 'template_yzgb0uw';
    const apiKey = 'ozc9bVo5qT7ZsjSnV';

    emailjs
      .send(serviceID, templateID, formData, apiKey)
      .then(() => {
        setSuccessMessage("Your message has been sent!");
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        setErrorMessage("Failed to send the message. Please try again.");
        setSuccessMessage('');
      });
  };

  return (
    <div>
      <section id="contact" className="contact-section">
        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        
        {successMessage && <motion.p className="success-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >{successMessage}</motion.p>}
        {errorMessage && <motion.p className="error-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >{errorMessage}</motion.p>}
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Send
          </motion.button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
