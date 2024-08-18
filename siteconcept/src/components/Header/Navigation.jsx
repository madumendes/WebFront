import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  border-radius: 0 30px 30px 0;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #8c8c8c;
  display: flex;
  gap: 17px;
  flex-grow: 1;
  padding: 17px 12px 17px 0;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    white-space: initial;
    justify-content: center;
  }
`;

const NavItem = styled.a`
  font-family: Inter, sans-serif;
  border-radius: 20px;
  border: 1px solid #000;
  background-color: ${props => props.active ? '#000' : '#fff'};
  color: ${props => props.active ? '#fff' : '#000'};
  justify-content: center;
  padding: 13px 26px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: ${props => props.active ? '#333' : '#f0f0f0'};
  }
  @media (max-width: 991px) {
    white-space: initial;
    padding: 10px 20px;
  }
`;

const Navigation = () => (
  <NavContainer>
    <NavItem href="#" active>Sobre</NavItem>
    <NavItem href="#">Contato</NavItem>
    <NavItem href="#">Orçamentos</NavItem>
    <NavItem href="#">Logar</NavItem>
  </NavContainer>
);

export default Navigation;