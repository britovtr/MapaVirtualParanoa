import React from "react";
import styled, { keyframes } from "styled-components";


// ---------- Animação de entrada ----------
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// ---------- Styled Components ----------
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 420px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalImg = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    background-color: #004c99;
  }
`;

// ---------- Componente ----------
export default function LocationModal({ local, onClose }) {
  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <h2>{local.nome}</h2>
        <ModalImg src={local.imagem} alt={local.nome} />
        <p>{local.descricao}</p>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalContainer>
    </Overlay>
  );
}
