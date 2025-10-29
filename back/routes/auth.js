import express from "express";
import bcrypt from "bcryptjs";
import Usuario from "../models/Usuario.js";

const router = express.Router();

// Registro
router.post("/register", async (req, res) => {
  try {
    const { email, senha } = req.body;
    if (!email || !senha) return res.status(400).json({ error: "Email e senha são obrigatórios" });

    const existe = await Usuario.findOne({ email });
    if (existe) return res.status(400).json({ error: "Usuário já existe" });

    const senhaHash = await bcrypt.hash(senha, 10);
    const usuario = new Usuario({ email, senha: senhaHash });
    await usuario.save();

    res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(400).json({ error: "Usuário não encontrado" });

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) return res.status(400).json({ error: "Senha inválida" });

    res.json({ message: "Login realizado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
