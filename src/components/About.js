import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const AboutDemo = () => {
  const navigate = useNavigate();
  
  const handleRedirect = () => {
    navigate('/about');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <AboutContainer>
      <StyledAboutDemo
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <AboutContent>
          <motion.h1 variants={itemVariants}>About Me</motion.h1>
          
          <ProfileSection variants={itemVariants}>
            <ProfileImage 
              src="/path-to-your-image.jpg" // Replace with your image
              alt="Sriram Amalakanti"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <HighlightText>
              <strong>Sriram Amalakanti</strong>
              <br />
              <span>Web Developer & Digital Educator</span>
            </HighlightText>
          </ProfileSection>
          
          <motion.p variants={itemVariants}>
            I'm a passionate <strong>Web Developer</strong> specializing in creating beautiful and functional websites with a focus on user experience and performance.
          </motion.p>
          
          <ExperienceGrid variants={itemVariants}>
            <ExperienceCard>
              <h3>1+</h3>
              <p>Years Experience</p>
            </ExperienceCard>
            <ExperienceCard>
              <h3>10+</h3>
              <p>Projects Completed</p>
            </ExperienceCard>
            <ExperienceCard>
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </ExperienceCard>
          </ExperienceGrid>
          
          <motion.div variants={itemVariants}>
            <BioText>
              I am a dynamic developer intern with experience in front-end software development, specializing in digitizing educational frameworks. Proficient in React.js, HTML, and CSS, I deliver innovative web solutions.
            </BioText>
            
            <SkillsContainer>
              <SkillPill>React.js</SkillPill>
              <SkillPill>JavaScript</SkillPill>
              <SkillPill>HTML/CSS</SkillPill>
              <SkillPill>Node.js</SkillPill>
              <SkillPill>MongoDB</SkillPill>
              <SkillPill>Python</SkillPill>
              <SkillPill>Java</SkillPill>
            </SkillsContainer>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CTAButton 
              onClick={handleRedirect}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Profile
              <ArrowIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                </svg>
              </ArrowIcon>
            </CTAButton>
          </motion.div>
        </AboutContent>
      </StyledAboutDemo>
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const StyledAboutDemo = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 3rem;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 3rem;
    color: #2d3748;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #4f46e5, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a5568;
  }
`;

const ProfileSection = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

const ProfileImage = styled(motion.img)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #e2e8f0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const HighlightText = styled.div`
  strong {
    font-size: 1.8rem;
    color: #2d3748;
    display: block;
    line-height: 1.2;
  }

  span {
    font-size: 1.2rem;
    color: #4f46e5;
    font-weight: 500;
  }
`;

const ExperienceGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const ExperienceCard = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }

  h3 {
    font-size: 2rem;
    color: #4f46e5;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
    margin: 0;
  }
`;

const BioText = styled.p`
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #4f46e5;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 1.5rem 0;
`;

const SkillPill = styled.span`
  background: #e0e7ff;
  color: #4f46e5;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;
`;

const ArrowIcon = styled.span`
  display: flex;
  align-items: center;
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export default AboutDemo;