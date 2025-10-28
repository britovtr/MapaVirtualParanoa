// src/components/Navbar.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = styled.nav`
  width: 100%;
  background: linear-gradient(135deg, #004c99, #007bff);
  color: #fff;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;
  transition: 0.3s;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    height: 100vh;
    width: 220px;
    background: #004c99;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    transition: 0.4s ease-in-out;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const MenuItem = styled.li`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #ffd700;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo>🏭 Fábrica Virtual</Logo>

      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuButton>

      <Menu open={menuOpen}>
        <MenuItem>Início</MenuItem>
        <MenuItem>Mapa</MenuItem>
        <MenuItem>Sobre</MenuItem>
      </Menu>
    </Nav>
  );
}
