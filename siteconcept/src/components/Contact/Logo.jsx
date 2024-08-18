import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <LogoWrapper>
      <LogoImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/527d15f8efa58df81308edd6a7817413bd086ba70522a971aa1361cdfc08c950?placeholderIfAbsent=true&apiKey=f395ac786dcf4f09956a3a9acd692f24" alt="Logo 1" />
      <LogoImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/62c6e742a2b3b4f8d03358ab95432efe03c27b1d43f06825994709be95468da4?placeholderIfAbsent=true&apiKey=f395ac786dcf4f09956a3a9acd692f24" alt="Logo 2" />
      <LogoImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/939a6f4e3ed532b4ee63cc97ab5252b53988ebb406d7fcc1520c05a3f73d97ec?placeholderIfAbsent=true&apiKey=f395ac786dcf4f09956a3a9acd692f24" alt="Logo 3" />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 121px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const LogoImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: auto;
  max-width: 100%;
  &:nth-child(2) {
    aspect-ratio: 1.27;
    width: 100%;
    align-self: stretch;
    margin-top: 100px;
  }
  &:nth-child(3) {
    aspect-ratio: 1.46;
    width: 193px;
    margin-top: 62px;
  }
`;

export default Logo;