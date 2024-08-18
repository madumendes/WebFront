import React from "react";
import styled from "styled-components";

const ProfileImage = ({ src, alt }) => {
  return <StyledImage loading="lazy" src={src} alt={alt} />;
};

const StyledImage = styled.img`
  width: 36%;
  height: 36%;
  border-radius: 100%;
  border-style: solid;
  border-color: white;
  flex-grow: 1;
  margin-left: 40px;
  @media (max-width: 991px) {
    margin-top: 50px;
  }
`;

export default ProfileImage;