import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import ProfileSection from '../ProfileSection/ProfileSection';
import ContactPage from '../Contact/ContactPage';

const LayoutWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-top: 49px;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Layout = () => (
  <LayoutWrapper>
    <BackgroundImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/985fcee019966ba1ba930c7bb388fecacba49807b6c5ace97935f22f43765d70?apiKey=f395ac786dcf4f09956a3a9acd692f24&" alt="Background" />
    <ContentWrapper>
      <Header />
      <MainContent />
      <ProfileSection/>
      <ContactPage/>
      <Footer />
    </ContentWrapper>
  </LayoutWrapper>
);




export default Layout;