import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <StyledHeader scrolled={scrolled}>
      <NavContainer>
        <Logo>
          <Link to="/Portfolio">Sriram Amalakanti</Link>
        </Logo>
        
        <NavLinks open={isMobileMenuOpen}>
          <NavItem>
            <NavLink to="/Portfolio" current={location.pathname === '/Portfolio'}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" current={location.pathname === '/about'}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects" current={location.pathname === '/projects'}>
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" current={location.pathname === '/contact'}>
              Contact
            </NavLink>
          </NavItem>
        </NavLinks>

        <Hamburger onClick={toggleMobileMenu} open={isMobileMenuOpen}>
          <span />
          <span />
          <span />
        </Hamburger>
      </NavContainer>
    </StyledHeader>
  );
};

// Styled Components
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${({ scrolled }) => scrolled && css`
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 0.8rem 0;
    background-color: rgba(255, 255, 255, 0.98);
  `}
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.div`
  a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #4f46e5;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #3a31c8;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transition: right 0.4s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    
    ${({ open }) => open && css`
      right: 0;
    `}
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: #2d3748;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ current }) => (current ? '100%' : '0')};
    height: 2px;
    background-color: #4f46e5;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &:hover {
    color: #4f46e5;
  }
  
  ${({ current }) => current && css`
    color: #4f46e5;
    font-weight: 600;
  `}
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
  z-index: 1001;
  
  span {
    width: 100%;
    height: 2px;
    background-color: #2d3748;
    transition: all 0.3s ease;
    transform-origin: left center;
    
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    
    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg) translate(1px, -1px)' : 'none')};
    }
    
    &:last-child {
      transform: ${({ open }) => (open ? 'rotate(-45deg) translate(1px, 1px)' : 'none')};
    }
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Header;