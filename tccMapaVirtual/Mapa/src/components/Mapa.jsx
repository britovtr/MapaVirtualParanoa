import React, { useState } from "react";
import styled from "styled-components";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import LocationModal from "./LocationModal";


// ---------- Styled Components ----------
const MapContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
`;

const MapaImg = styled.img`
  width: 90%; /* menor horizontalmente — antes era 100% */
  max-width: 1000px; /* limite de tamanho em telas grandes */
  height: auto;
  border: 2px solid #333;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
`;

const Marker = styled.button`
  position: absolute;
  background-color: rgba(0, 102, 204, 0.85);
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: background-color 0.2s, transform 0.2s;
  font-size: 12px;
  white-space: nowrap;

  &:hover {
    background-color: rgba(0, 102, 204, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

// ---------- Locais (coordenadas ajustadas manualmente) ----------
const locais = [
  {
    id: 1,
    nome: "Fábrica 3",
    descricao: "Responsável pela produção principal da linha de montagem.",
    imagem: "/imagem_locais/fabrica3.jpg",
    estilo: { top: "40%", left: "13%" },
  },
  {
    id: 2,
    nome: "Galpão Tapetaria",
    descricao: "Área dedicada à confecção e acabamento de tapeçarias.",
    imagem: "/imagem_locais/galpao_tapetaria.jpg",
    estilo: { top: "58%", left: "18%" },
  },
  {
    id: 3,
    nome: "Mangueira",
    descricao: "Área técnica dedicada à montagem e manutenção de mangueiras.",
    imagem: "/imagem_locais/mangueira.jpg",
    estilo: { top: "44%", left: "30%" },
  },
  {
    id: 4,
    nome: "Montagem",
    descricao: "Espaço onde os componentes finais são montados e testados.",
    imagem: "/imagem_locais/montagem.jpg",
    estilo: { top: "70%", left: "57%" },
  },
  {
    id: 5,
    nome: "Galpão Fábrica",
    descricao: "Principal galpão industrial da unidade, com produção em larga escala.",
    imagem: "/imagem_locais/galpao_fabrica.jpg",
    estilo: { top: "55%", left: "69%" },
  },
  {
    id: 6,
    nome: "Portaria",
    descricao: "Entrada principal da fábrica e controle de acesso.",
    imagem: "/imagem_locais/portaria.jpg",
    estilo: { top: "89%", left: "68%" },
  },
  {
    id: 7,
    nome: "Administração / Refeitório ",
    descricao: "Área administrativa e de convivência dos funcionários.",
    imagem: "/imagem_locais/admin_refeitorio.jpg",
    estilo: { top: "60%", left: "42%" },
  },
  // Novos locais adicionados

  {
    id: 8,
    nome: "Almoxarifado",
    descricao: "Local de armazenamento e controle de estoque.",
    imagem: "/imagem_locais/almoxarifado.jpg",
    estilo: { top: "75%", left: "52%" }, // ajuste conforme necessário
  },
  {
    id: 9,
    nome: "Carga e Descarga",
    descricao: "Área destinada ao recebimento e expedição de materiais.",
    imagem: "/imagem_locais/carga_descarga.jpg",
    estilo: { top: "70%", left: "70%" }, // ajuste conforme necessário
  },
];

// ---------- Componente Principal ----------
export default function Mapa() {
  const [localSelecionado, setLocalSelecionado] = useState(null);

  return (
    <MapContainer>
      <TransformWrapper
        initialScale={1}
        minScale={0.8}
        maxScale={3}
        centerOnInit
        wheel={{ step: 0.1 }}
        doubleClick={{ disabled: true }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Controles de zoom */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {/* Se quiser, pode adicionar botões de zoom aqui */}
            </div>

            <TransformComponent>
              <div style={{ position: "relative" }}>
                <MapaImg src="/imagem_locais/mapa.jpg" alt="Mapa da fábrica" />

                {locais.map((local) => (
                  <Marker
                    key={local.id}
                    style={local.estilo}
                    onClick={() => setLocalSelecionado(local)}
                  >
                    {local.nome}
                  </Marker>
                ))}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>

      {localSelecionado && (
        <LocationModal
          local={localSelecionado}
          onClose={() => setLocalSelecionado(null)}
        />
      )}
    </MapContainer>
  );
}
