import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';

const HeaderWrapper = styled.header`
  position: relative;
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.48px;
  line-height: 120%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: transparent
  @media (max-width: 991px) {
    flex-wrap: wrap;
    white-space: initial;
    padding: 0 20px;
  }d
`;

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Navigation />
  </HeaderWrapper>
);

export default Header;