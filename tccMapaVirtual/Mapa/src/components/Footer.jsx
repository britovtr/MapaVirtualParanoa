// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";



const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #0d1b2a 0%, #1b263b 100%);
  color: #f8f9fa;
  padding: 50px 20px 25px;
  margin-top: 80px;
  font-family: "Inter", sans-serif;
  width: 100%;
max-width: 100vw;
overflow-x: hidden;

`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto 25px;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #00aaff;
  margin-bottom: 12px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 40px;
    height: 2px;
    background: #00aaff;
    margin-top: 6px;
    border-radius: 2px;
  }
`;

const StyledLink = styled.a`
  display: block;
  color: #ddd;
  text-decoration: none;
  margin: 6px 0;
  font-size: 0.95rem;
  transition: 0.3s;

  &:hover {
    color: #00aaff;
    transform: translateX(4px);
  }
`;

const ContactText = styled.p`
  font-size: 0.95rem;
  margin: 6px 0;
  color: #ccc;

  span {
    color: #00aaff;
    margin-right: 6px;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 18px;
  margin-top: 10px;

  svg {
    font-size: 1.6rem;
    cursor: pointer;
    color: #ddd;
    transition: 0.3s;

    &:hover {
      color: #00aaff;
      transform: scale(1.15);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #1e2d3d;
  margin: 25px auto;
  width: 90%;
  max-width: 1100px;
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: #aaa;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterSection>
          <Title>Mapa Virtual</Title>
          <StyledLink href="#">Início</StyledLink>
          <StyledLink href="#">Mapa</StyledLink>
          <StyledLink href="#">Sobre</StyledLink>
        </FooterSection>

        <FooterSection>
          <Title>Contato</Title>
          <ContactText>
            <span>📍</span> Rua Industrial, 123
          </ContactText>
          <ContactText>
            <span>📞</span> (11) 99999-9999
          </ContactText>
          <ContactText>
            <span>✉️</span> contato@fabrica.com
          </ContactText>
        </FooterSection>

        <FooterSection>
          <Title>Siga-nos</Title>
          <Socials>
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </Socials>
        </FooterSection>
      </FooterTop>

      <Divider />
      <Copyright>
        © {new Date().getFullYear()} Fábrica Virtual — Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
}
