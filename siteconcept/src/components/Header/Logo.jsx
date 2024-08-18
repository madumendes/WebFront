import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  background-color: white;
  aspect-ratio: 6.67;
  object-fit: contain;
  object-position: center;
  width: 620px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Logo = () => (
  <LogoImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/10dc2eee3f5313e5252e082af780e2266a966cdf0394a384879aa9c75ad6be6e?apiKey=f395ac786dcf4f09956a3a9acd692f24&" alt="Company Logo" />
);

export default Logo;