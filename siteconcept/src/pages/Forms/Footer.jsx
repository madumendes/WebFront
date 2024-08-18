import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: relative;
  background: linear-gradient(180deg, rgba(65, 109, 43, 0.4) 15.36%, #0a0b04 44.76%);
  min-height: 68px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 14px;
  @media (max-width: 991px) {
    padding: 20px;
    text-align: center;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <div>&copy; 2024 Concept Engenharia.</div>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;