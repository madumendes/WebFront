import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import HeaderForm from './HeaderForm';

const FormWrapper = styled.section`
  position: relative;
  background-color: rgba(65, 109, 43, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 109px 80px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 100px 20px;
  }
`;

const FormContainer = styled.form`
  border-radius: 30px;
  background-color: #fff;
  display: flex;
  margin-bottom: -22px;
  width: 800px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 43px 18px 43px 46px;
  @media (max-width: 991px) {
    margin-bottom: 10px;
    padding-left: 20px;
  }
`;

const FormTitle = styled.h2`
  border-radius: 20px;
  background-color: rgba(38, 163, 95, 0.85);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 500px;
  max-width: 100%;
  color: #000;
  white-space: nowrap;
  letter-spacing: -0.48px;
  padding: 11px 70px;
  font: 600 24px/1.2 Inter, sans-serif;
  text-align: center;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const FormFields = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin-top: 44px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex || 1};
`;

const Label = styled.label`
  color: #000;
  letter-spacing: -0.48px;
  font: 600 24px/1.2 Inter, sans-serif;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border-radius: 20px;
  background-color: #d9d9d9;
  height: 30px;
  width: 100%;
  border: none;
  padding: 0 10px;
  margin-bottom: 13px;
`;

const TextArea = styled.textarea`
  border-radius: 20px;
  background-color: #d9d9d9;
  width: 350px;
  max-width: 100%;
  height: 60px;
  margin: 36px 0 0 12px;
  border: none;
  padding: 10px;
`;

const FileInput = styled.input`
  border-radius: 20px;
  background-color: #d9d9d9;
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  border: none;
`;

const SubmitButton = styled.button`
  border-radius: 20px;
  background-color: #116df6;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 24px;
  width: 250px;
  max-width: 100%;
  color: #fff;
  white-space: nowrap;
  letter-spacing: -0.48px;
  padding: 22px 70px;
  font: 600 24px/1.2 Inter, sans-serif;
  border: none;
  cursor: pointer;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

function Form() {
  return (
    <>
      <HeaderForm />
      <FormWrapper>
        <FormContainer>
          <FormTitle>Orçamentos</FormTitle>
          <FormFields>
            <FieldGroup flex={2}>
              <Label htmlFor="name">Nome:</Label>
              <Input type="text" id="name" name="name" required />
              <Label htmlFor="company">Nome da empresa:</Label>
              <Input type="text" id="company" name="company" required />
              <Label htmlFor="cnpj">CNPJ:</Label>
              <Input type="text" id="cnpj" name="cnpj" required />
              <Label htmlFor="tipoServico">Tipo de serviço:</Label>
              <Input type="text" id="tipoServico" name="tipoServico" required />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="urgencyLevel">Grau de urgência:</Label>
              <Input type="text" id="urgencyLevel" name="urgencyLevel" required />
              <Label htmlFor="address">Endereço:</Label>
              <Input type="text" id="address" name="address" required />
              <Label htmlFor="executantType">Tipo de executante:</Label>
              <Input type="text" id="executantType" name="executantType" required />
            </FieldGroup>
          </FormFields>
          <Label htmlFor="budgetFile">Adicionar arquivo referente ao orçamento:</Label>
          <FileInput type="file" id="budgetFile" name="budgetFile" />
          <TextArea id="message" name="message" placeholder="Mensagem adicional"></TextArea>
          <SubmitButton type="submit">ENVIAR</SubmitButton>
        </FormContainer>
      </FormWrapper>
      <Footer />
    </>
  );
}

export default Form;
