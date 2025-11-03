import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// 📌 Registro de novo usuário
router.post("/register", async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Verifica se o usuário já existe
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ error: "Usuário já existe" });

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Cria novo usuário
    const newUser = new User({ email, senha: hashedPassword });
    await newUser.save();

    res.json({ message: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao registrar usuário" });
  }
});

// 📌 Login de usuário existente
router.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Verifica se o usuário existe
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    // Compara as senhas
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) return res.status(400).json({ error: "Senha incorreta" });

    // Gera um token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "2h" });

    res.json({ message: "Login bem-sucedido!", token });
  } catch (err) {
    res.status(500).json({ error: "Erro no login" });
  }
});

export default router;
