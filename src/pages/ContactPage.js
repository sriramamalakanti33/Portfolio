import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });
  const [status, setStatus] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setSuccessMessage('');
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all the required fields.");
      return;
    }

    const serviceID = 'service_9kj3ceg';  
    const templateID = 'template_yzgb0uw';
    const apiKey = 'ozc9bVo5qT7ZsjSnV';

    emailjs
      .send(serviceID, templateID, formData, apiKey)
      .then(() => {
        setStatus("");
        setSuccessMessage("Your message has been sent!");
        setFormData({ 
          name: '', 
          email: '', 
          subject: '', 
          message: '' 
        });
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        setStatus("");
        setErrorMessage("Failed to send the message. Please try again.");
      });
  };

  return (
    <div className="contact-container">
      <motion.div
        className="max"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side - Contact Info */}
        <div className="contact-Info">
          <h2 className="text">Let's Connect</h2>
          <p className="sub-text">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="contact-details">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#00bcd4]" /> sriramamalakanti369@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#00bcd4]" /> +91 9381332042
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#00bcd4]" /> Kakinada, Andhra Pradesh, India - 533434
            </p>
          </div>

          <div className="socail-icons">
            <a href="https://github.com/sriramamalakanti33" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-black transition-all" />
            </a>
            <a href="https://www.linkedin.com/in/sriram-amalakanti/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#0077b5] transition-all" />
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h2 className="contact">Contact Me</h2> 
          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              className="Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className="Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="Subject"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              className="Message22"
              required
            ></textarea>

            {status && <p className="status-message">{status}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className="text-center">
              <button
                type="submit"
                className="bg"
                disabled={status === "Sending..."}
              >
                {status === "Sending..." ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;