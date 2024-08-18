import React from "react";
import styled from "styled-components";

const ProfileInfo = () => {
  return (
    <InfoContainer>
      <p>João Varoni - CEO 

      Engenheiro com 25 anos de experiência, especialista em projetos industriais e manutenção de máquinas. Gerenciando equipes de engenharia e manutenção em trabalhos técnicos nas áreas de mecânica, elétrica, automação . Experiência em metodologias de gestão, PMBOK e TPM .</p>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  background-color: white;
  position: relative;
  align-self: center;
  border-radius: 10px;
  box-shadow: 25px 40px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  margin: 15px;
  font: 600 21px/29px Inter, sans-serif;
  margin-right: 10px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default ProfileInfo;