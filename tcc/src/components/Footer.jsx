// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const FooterContainer = styled.footer`
  background: #0d1b2a;
  color: #fff;
  text-align: center;
  padding: 30px 20px;
  margin-top: 50px;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 15px;
  gap: 20px;
`;

const FooterSection = styled.div`
  min-width: 180px;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  color: #00aaff;
  margin-bottom: 10px;
`;

const Link = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  margin: 5px 0;
  font-size: 0.9rem;
  transition: color 0.3s;

  &:hover {
    color: #00aaff;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 15px 0;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #00aaff;
      transform: scale(1.1);
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: #ccc;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterSection>
          <Title>Mapa Virtual</Title>
          <Link href="#">Início</Link>
          <Link href="#">Mapa</Link>
          <Link href="#">Sobre</Link>
        </FooterSection>

        <FooterSection>
          <Title>Contato</Title>
          <p>📍 Rua Industrial, 123</p>
          <p>📞 (11) 99999-9999</p>
          <p>✉️ contato@fabrica.com</p>
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

      <hr style={{ border: "none", borderTop: "1px solid #1e2d3d", margin: "15px 0" }} />
      <Copyright>
        © {new Date().getFullYear()} Fábrica Virtual — Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
}
