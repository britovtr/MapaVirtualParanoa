import { useState } from "react";
import styled from "styled-components";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, senha });
      alert(res.data.message);
      setEmail("");
      setSenha("");
      navigate("/funcionarios");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Erro no login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Box>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          <Button type="submit" disabled={loading}>{loading ? "Entrando..." : "Entrar"}</Button>
        </Form>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex; justify-content: center; align-items: center; height: 80vh; background: linear-gradient(135deg, #00b09b, #96c93d);
`;
const Box = styled.div`background: #fff; padding: 40px 50px; border-radius: 12px; box-shadow: 0px 8px 25px rgba(0,0,0,0.15); width: 360px; text-align: center;`;
const Title = styled.h2`color: #333; margin-bottom: 25px;`;
const Form = styled.form`display: flex; flex-direction: column; gap: 15px;`;
const Input = styled.input`padding: 12px; border: 1px solid #ccc; border-radius: 8px; outline: none; transition: 0.3s; &:focus {border-color: #00b09b;}`;
const Button = styled.button`background: #00b09b; color: white; border: none; padding: 12px; border-radius: 8px; cursor: pointer; font-weight: bold; transition: 0.3s; &:hover {background: #008f7a;} &:disabled {background: #aaa; cursor: not-allowed;}`;
