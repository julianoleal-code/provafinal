import enderecoRepository from "../repositories/endereco.repository.js";

async function createEnderecoService(dados) {
  const endereco = await enderecoRepository.createEnderecoRepository(dados);
  if (!endereco) throw new Error("Erro ao criar endereco");
  return endereco;
}

async function findAllEnderecoService() {
  return await enderecoRepository.findAllEnderecoRepository();
}

async function findEnderecoByIdService(id) {
  const endereco = await enderecoRepository.findEnderecoByIdRepository(id);
  if (!endereco) throw new Error("Endereco nao encontrado");
  return endereco;
}

async function updateEnderecoService(id, dados) {
  const endereco = await enderecoRepository.findEnderecoByIdRepository(id);
  if (!endereco) throw new Error("Endereco nao encontrado");
  
  await enderecoRepository.updateEnderecoRepository(id, dados);
  return await enderecoRepository.findEnderecoByIdRepository(id);
}

async function deleteEnderecoService(id) {
  const endereco = await enderecoRepository.findEnderecoByIdRepository(id);
  if (!endereco) throw new Error("Endereco nao encontrado");
  
  await enderecoRepository.deleteEnderecoRepository(id);
  return { message: "Endereco excluido com sucesso" };
}

export default {
  createEnderecoService,
  findAllEnderecoService,
  findEnderecoByIdService,
  updateEnderecoService,
  deleteEnderecoService
};
