import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Teia from "../imagens/Teia.jpg";
import logo from "../imagens/paranoa.png";

export default function Funcionarios() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    setLoading(true);

    // Salvando no localStorage (exemplo simples, sobrescreve se já existir)
    const funcionario = { email, senha };
    localStorage.setItem("funcionario", JSON.stringify(funcionario));

    setTimeout(() => {
      alert("Funcionário cadastrado com sucesso!");
      navigate("/");
      setLoading(false);
    }, 700);
  };

  return (
    <Container>
      <Overlay />
      <Box>
        <LogoImg src={logo} alt="Paranoá" />
        <Title>Cadastro de Funcionário</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </Form>

        <Divider>ou</Divider>

        <SecondaryButton onClick={() => navigate("/")}>
          Voltar para Login
        </SecondaryButton>
      </Box>
    </Container>
  );
}

/* estilos (mantive os seus) */
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${Teia});
  background-size: cover;
  background-position: center;
  position: relative;
`;
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(10, 35, 66, 0.8);
  z-index: 1;
`;
const Box = styled.div`
  position: relative;
  z-index: 2;
  background: rgba(27, 27, 27, 0.582);
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.3);
  width: 360px;
  text-align: center;
`;
const LogoImg = styled.img`
  width: 180px;
  margin-bottom: 10px;
`;
const Title = styled.h2`
  color: #ffffff;
  margin-bottom: 25px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: 0.3s;
  &:focus {
    border-color: #005bbb;
  }
`;
const Button = styled.button`
  background: #005bbb;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background: #004099;
  }
  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;
const Divider = styled.p`
  margin: 20px 0 10px;
  color: #f8f8f8;
  font-size: 14px;
`;
const SecondaryButton = styled.button`
  background: #005bbb;
  color: #ffffff;
  border: 2px solid #005bbb;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  transition: 0.3s;
  &:hover {
    background: #01458d;
    color: white;
  }
`;