import React from "react";
import styled from "styled-components";

function SocialMediaLinks() {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce22ddba2c23d37c1662da3947b763721e7e737dacf76325ff766248b16b6e3a?placeholderIfAbsent=true&apiKey=f395ac786dcf4f09956a3a9acd692f24", alt: "Social Media Icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/087a7652a3df5cf8d0b61c2cc17e505e0ca88dd6326936f3c3a8f47def637773?placeholderIfAbsent=true&apiKey=f395ac786dcf4f09956a3a9acd692f24", alt: "Social Media Icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3dc4eba38f0af34aca2c1ae794e431d59f5bf0faead3000ff051fced1e69f7d2?placeholderIfAbsent=true&apiKey=f395ac786dcf4f09956a3a9acd692f24", alt: "Social Media Icon 3" },
  ];

  return (
    <SocialLinksWrapper>
      <IconsContainer>
        {socialIcons.map((icon, index) => (
          <IconColumn key={index}>
            <SocialIcon loading="lazy" src={icon.src} alt={icon.alt} />
          </IconColumn>
        ))}
      </IconsContainer>
    </SocialLinksWrapper>
  );
}

const SocialLinksWrapper = styled.footer`
  position: relative;
  margin-top: 90px;
  margin-left: 190px;
  width: 100%;
  padding: 36px 64px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const IconColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: ${props => props.index === 0 ? "0" : "20px"};
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

const SocialIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 42px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default SocialMediaLinks;