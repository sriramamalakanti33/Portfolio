import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import pic from '../assets/images/pic.jpg';

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <ParticleBackground />
      
      <HeroContent
        initial={{ opacity: 0, scale: 0.9, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
      >
        <ProfileContainer>
          <ProfileImage
            src={pic}
            alt="Profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          <ProfileGlow />
        </ProfileContainer>

        <TextContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <HeroHeading>
            Hi, I'm <NameHighlight>Sriram Amalakanti</NameHighlight>
          </HeroHeading>
          <HeroSubtitle>React.js Developer</HeroSubtitle>
          <HeroDescription>
            I craft immersive digital experiences with cutting-edge web technologies.
            Currently enhancing education through digital solutions at IIIT Hyderabad.
          </HeroDescription>
        </TextContent>

        <CTAButtons
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <CTAButton
            href="/projects"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(79, 70, 229, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <ButtonIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ButtonIcon>
          </CTAButton>
          
          <CTAButtonSecondary
            href="/about"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </CTAButtonSecondary>
        </CTAButtons>
      </HeroContent>
      
      <ScrollIndicator>
        <ScrollAnimation />
        <span>Scroll Down</span>
      </ScrollIndicator>
    </HeroContainer>
  );
};

// Styled Components
const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const ParticleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const HeroContent = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  z-index: 2;
`;

const ProfileContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;

const ProfileGlow = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, #4f46e5, #3b82f6);
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.4;
  z-index: 1;
  animation: ${() => pulseAnimation} 4s ease-in-out infinite alternate;
`;

const pulseAnimation = keyframes`
  0% { transform: scale(0.95); opacity: 0.3; }
  100% { transform: scale(1.05); opacity: 0.5; }
`;

const TextContent = styled(motion.div)`
  max-width: 800px;
`;

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const NameHighlight = styled.span`
  background: linear-gradient(90deg, #4f46e5, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #4f46e5;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const CTAButton = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;
`;

const CTAButtonSecondary = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  background: white;
  color: #4f46e5;
  border: 2px solid #e0e7ff;
  transition: all 0.3s ease;
`;

const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  font-size: 0.9rem;
  z-index: 2;
`;

const scrollAnimation = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(10px); opacity: 0.5; }
`;

const ScrollAnimation = styled.div`
  width: 24px;
  height: 40px;
  border: 2px solid #64748b;
  border-radius: 12px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: #4f46e5;
    border-radius: 2px;
    animation: ${scrollAnimation} 1.5s infinite ease-in-out;
  }
`;

export default HeroSection;