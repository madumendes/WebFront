import React from "react";
import styled from "styled-components";
import ContactInfo from "./ContactInfo";
import SocialMediaLinks from "./SocialMediaLinks";
import Logo from "./Logo";

function ContactPage() {
  return (
    <PageWrapper>
      <MainContent>
        <BackgroundImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/834eddc054af66c359b8f01f6425c122db1a2033dedc108fe30986152dfea2a8?placeholderIfAbsent=true&apiKey=f395ac786dcf4f09956a3a9acd692f24" alt="Background" />
        <ContentContainer>
          <ContactSection>
            <ContactInfo />
            <LogoSection>
              <Logo />
            </LogoSection>
          </ContactSection>
        </ContentContainer>
        <SocialMediaLinks />
      </MainContent>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #000;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 956px;
  width: 100%;
  padding-top: 68px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const ContentContainer = styled.div`
  position: relative;
  align-self: flex-end;
  width: 100%;
  max-width: 1382px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ContactSection = styled.section`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const LogoSection = styled.aside`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 21%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export default ContactPage;