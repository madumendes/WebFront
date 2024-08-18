import React from 'react';
import styled from 'styled-components';

const TextColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  line-height: normal;
  width: 43%;
  margin-right: 205px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

const TextContent = styled.div`
  border-radius: 10px;
  box-shadow: 1px 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  position: absolute;
  margin-top: 159px;
  color: #000;
  padding: 5px 45px 5px 7px;
  font: 600 20px/29px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 10px;
    padding: 30px;
  }
`;

const textContents = [
  <p>Somos uma empresa de Engenharia e Instalações 
  Industriais, fundada por profissionais com mais de 
  23 anos de experiência no mercado, atuamos na 
  gestão, execução e fornecimento de mão de obra especializada para realização de projetos, 
  instalações e manutenções nas áreas de elétrica, 
  automação, mecânica e caldeiraria.  Contamos com uma 
  equipe de engenheiros e técnicos que utilizam se de 
  softwares e técnicas para atender com qualidade as mais 
  diversas demandas do segmento industrial. Possuímos 
  recursos que nos credenciam e nos permitem atender a 
  complexos e exigentes projetos, com agilidade, confiabilidade 
  e segurança.</p>,
  <p>
   Especializados em: Engenharia , projetos, instalações industriais, 
  assessoria as normas, adequações nr10, adequações nr12,
  adequações nr35, elétrica, mecânica, automação, caldeiraria, montagens e terceirização de serviços
  </p>
];

const TextSection = ({ currentSlide }) => (
  <TextColumn>
    <TextContent>
      {textContents[currentSlide]}
    </TextContent>
  </TextColumn>
);

export default TextSection;