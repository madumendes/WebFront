import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageSection from './ImageSection';
import TextSection from './TextSection';

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 60px;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-top: 40px;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.9);
  align-self: center;
  width: 100%;
  max-width: 1200px;
  padding: 40px;
  margin: 0 auto;
  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const FlexContainer = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 9px;
  margin-top: 20px;
  
`;

const Dot = styled.button`
  background-color: ${props => props.active ? '#8c8c8c' : '#fff'};
  border: 1px solid #000;
  border-radius: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${props => props.active ? '#8c8c8c' : '#e0e0e0'};
  }
`;

const MainContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ContentWrapper>
      <ContentContainer>
        <FlexContainer>
          <ImageSection currentSlide={currentSlide} />
          <TextSection currentSlide={currentSlide} />
        </FlexContainer>
        <DotContainer>
          {[...Array(totalSlides)].map((_, index) => (
            <Dot
              key={index}
              active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </DotContainer>
      </ContentContainer>
    </ContentWrapper>
  );
};

export default MainContent;