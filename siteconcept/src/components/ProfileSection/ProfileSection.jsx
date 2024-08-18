import React from "react";
import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";

const ProfileSection = () => {
  return (
    <section className="profile-section">
      <ProfileCard>
        <ProfileContent>
          <ProfileImage 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd7b31a0f954b33bfd4d34eee9d597ba605a8de121bc3ffe7394d88c47cfaf3e?apiKey=f395ac786dcf4f09956a3a9acd692f24&&apiKey=f395ac786dcf4f09956a3a9acd692f24" 
            alt="Profile" 
          />
          <ProfileInfo />
        </ProfileContent>
      </ProfileCard>
    </section>
  );
};

const ProfileCard = styled.div`
  position: relative;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.9);
  background-image: url("https://cdn.builder.io/api/v1/image/assets/TEMP/8be17c277abd56e51738d19d75033306ef90d855db60c6f2115adbdbfa6af704?apiKey=f395ac786dcf4f09956a3a9acd692f24");
  background-position: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 128px 70px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 100px 20px;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 728px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

export default ProfileSection;
