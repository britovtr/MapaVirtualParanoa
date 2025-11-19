// src/components/Navbar.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../imagens/paranoa.png"; 

// ---------- Estilos ----------
const Nav = styled.nav`
  width: 100%;
  background: linear-gradient(135deg, #003366, #007bff);
  color: #fff;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* FIXO no topo */
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 12px 25px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  user-select: none;
  gap: 10px;

  img {
    height: 40px;
    width: auto;
  }

  span {
    color: #003cff;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  align-items: center;
  transition: all 0.4s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    height: 100vh;
    width: 250px;
    background: #002244;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
    transition: right 0.4s ease-in-out;
    box-shadow: -3px 0 15px rgba(0, 0, 0, 0.4);
  }
`;

const MenuItem = styled.li`
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  color: #f8f9fa;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #9fcbf0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    background: #72a5df;
    bottom: -4px;
    left: 0;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #03347c;
  }

  &.active::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.9rem;
  cursor: pointer;
  display: none;
  z-index: 1100;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: #ffd700;
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

const Overlay = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 900;
`;

// ---------- Componente ----------
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Início");

  const handleItemClick = (name) => {
    setActive(name);
    setMenuOpen(false);
  };

  return (
    <>
      <Nav>
        <Logo>
          <img src={logo} alt="Logo Fábrica Virtual" />

        </Logo>

        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MenuButton>

        <Menu open={menuOpen}>
          {["Inicio", "Mapa", "Sobre"].map((item) => (
            <MenuItem
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      </Nav>

      {/* Overlay para escurecer o fundo no mobile */}
      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />
    </>
  );
}
