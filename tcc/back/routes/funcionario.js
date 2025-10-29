import express from "express";
import jwt from "jsonwebtoken";
import Funcionario from "../models/Funcionario.js";

const router = express.Router();

// Middleware de autenticação
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token ausente" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: "Token inválido" });
  }
};

// Rotas de funcionários
router.post("/", auth, async (req, res) => {
  const novo = new Funcionario(req.body);
  await novo.save();
  res.json(novo);
});

router.get("/", auth, async (req, res) => {
  const funcionarios = await Funcionario.find();
  res.json(funcionarios);
});

export default router;
