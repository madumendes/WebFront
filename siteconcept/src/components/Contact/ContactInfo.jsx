import React from "react";
import styled from "styled-components";

function ContactInfo() {
  return (
    <InfoWrapper>
      <InfoContent>
        <ContactDetails>
          <div>
            <p> <strong>
            Contatos: <br /> <br />
            Concept Engenharia. <br /> <br />
            Av. Carmenere 183, Jd Piemonte, <br />
            Bragança Paulista / São Paulo, Brasil. <br /> <br />
            Comercial: <br /> <br />
            Telefone <br />
            (11)8758-7851 <br />
            (11)8758-5261 <br /> <br />
            Whatsapp <br />
            (11) 98565-8788 <br /> <br />
            E-mail <br />
            comercial.concept@gmail.com <br />
            </strong>
            </p>
          </div>
        </ContactDetails>
        <CompanyLogo loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/36ec7a285e70be528f7e518381d794db4864cc18206e794ce3975c4364981876?placeholderIfAbsent=true&apiKey=f395ac786dcf4f09956a3a9acd692f24" alt="Company Logo" />
      </InfoContent>
      <SocialIcons>
        <IconWrapper>
          <SocialIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3805f48ff51402a33c80b2fdd472ea4ff02904c1cb814c348c321f2d6dfa3e80?placeholderIfAbsent=true&apiKey=f395ac786dcf4f09956a3a9acd692f24" alt="Social Icon 1" />
        </IconWrapper>
        <IconWrapper>
          <SocialIcon loading="lazy" src="https://logodownload.org/wp-content/uploads/2020/11/bauducco-logo-1.png" alt="Social Icon 2" />
        </IconWrapper>
      </SocialIcons>
    </InfoWrapper>
  );
}

const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 100px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 26px;
  }
`;

const InfoContent = styled.div`
  display: flex;
  gap: 20px;
  color: #000;
  letter-spacing: -0.48px;
  flex-wrap: wrap;
  justify-content: space-between;
  font: var(--sds-typography-heading-font-weight) var(--sds-typography-heading-size-base) / 29px var(--sds-typography-heading-font-family);
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ContactDetails = styled.address`
  font-style: normal;
  font-size: 20px;
`;

const CompanyLogo = styled.img`
  aspect-ratio: 2.09;
  width: 265px;
  margin-top: 450px;
  max-width: 100%;
  @media (max-width: 991px) {
  }
`;

const SocialIcons = styled.div`
  align-self: flex-end;
  margin-top: 77px;
  width: 522px;
  max-width: 100%;
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SocialIcon = styled.img`
  aspect-ratio: 1.97;
  object-fit: contain;
  object-position: center;
  width: 203px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default ContactInfo;