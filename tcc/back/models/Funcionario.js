import mongoose from "mongoose";

const funcionarioSchema = new mongoose.Schema({
  nome: String,
  cargo: String,
  salario: Number,
  criadoEm: { type: Date, default: Date.now },
});

export default mongoose.model("Funcionario", funcionarioSchema);
