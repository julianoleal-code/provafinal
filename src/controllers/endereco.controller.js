import enderecoService from "../services/endereco.service.js";

async function createEnderecoController(req, res) {
  const { rua, numero, bairro, cidade, estado } = req.body;
  
  if (!rua || !numero || !bairro || !cidade || !estado) {
    return res.status(400).json({ message: "Todos os campos sao obrigatorios" });
  }
  
  try {
    const endereco = await enderecoService.createEnderecoService(req.body);
    return res.status(201).json(endereco);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

async function findAllEnderecoController(req, res) {
  try {
    const enderecos = await enderecoService.findAllEnderecoService();
    return res.status(200).json(enderecos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function findEnderecoByIdController(req, res) {
  const { id } = req.params;
  try {
    const endereco = await enderecoService.findEnderecoByIdService(id);
    return res.status(200).json(endereco);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

async function updateEnderecoController(req, res) {
  const { id } = req.params;
  const { rua, numero, bairro, cidade, estado } = req.body;
  
  if (!rua || !numero || !bairro || !cidade || !estado) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }
  
  try {
    const endereco = await enderecoService.updateEnderecoService(id, req.body);
    return res.status(200).json(endereco);
  } catch (error) {
    const status = error.message.includes("nao encontrado") ? 404 : 400;
    return res.status(status).json({ message: error.message });
  }
}

async function deleteEnderecoController(req, res) {
  const { id } = req.params;
  try {
    const result = await enderecoService.deleteEnderecoService(id);
    return res.status(200).json(result);
  } catch (error) {
    const status = error.message.includes("nao encontrado") ? 404 : 400;
    return res.status(status).json({ message: error.message });
  }
}

export default {
  createEnderecoController,
  findAllEnderecoController,
  findEnderecoByIdController,
  updateEnderecoController,
  deleteEnderecoController
};
