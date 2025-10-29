import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/auth", authRoutes);

// Conexão MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/meuapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB conectado"))
.catch((err) => console.log("Erro MongoDB:", err));

app.listen(5000, () => console.log("Backend rodando na porta 5000"));
