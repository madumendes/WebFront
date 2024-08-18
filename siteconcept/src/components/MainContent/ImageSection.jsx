import React from 'react';
import styled from 'styled-components';

const ImageColumn = styled.div`
  flex-direction: column;
  line-height: normal;
  width: 57%;
  margin-left: 0;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  mix-blend-mode: darken;
  overflow: hidden;
  position: relative;
  min-height: 600px;
  flex-grow: 1;
  justify-content: center;
  @media (max-width: 991px) {
    max-width: 100%;
    min-height: 400px;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  transition: opacity 0.5s ease-in-out;
  border-radius: 10%;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 30px 0 0 30px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, #fff 100.69%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 80px 60px 26px;
  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

const images = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/eaa017baaa7ba6b98f2969c33e6d37e37e2b2915c55416dbd0897600cecb5182?apiKey=f395ac786dcf4f09956a3a9acd692f24&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/34b907f08d7ba0221eeca7232ba4775678b1369bc83ab0e4a32692c4f90f5587?apiKey=f395ac786dcf4f09956a3a9acd692f24&",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/eaa017baaa7ba6b98f2969c33e6d37e37e2b2915c55416dbd0897600cecb5182?apiKey=f395ac786dcf4f09956a3a9acd692f24&",,
  "https://cdn.builder.io/api/v1/image/assets/TEMP/eaa017baaa7ba6b98f2969c33e6d37e37e2b2915c55416dbd0897600cecb5182?apiKey=f395ac786dcf4f09956a3a9acd692f24&",,
];

const ImageSection = ({ currentSlide }) => {
  return (
    <ImageColumn>
      <ImageWrapper>
        {images.map((src, index) => (
          <StyledImage
            key={src}
            loading="lazy"
            src={src}
            alt={`Featured content ${index + 1}`}
            style={{ opacity: index === currentSlide ? 1 : 0 }}
          />
        ))}
        <GradientOverlay />
      </ImageWrapper>
    </ImageColumn>
  );
};

export default ImageSection;