import express from "express";
import enderecoRouters from "./src/routes/endereco.routes.js";

const app = express();

app.use(express.json());
app.use("/api/enderecos", enderecoRouters);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Erro interno do servidor" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});