import db from "../config/database.js";

function createEnderecoRepository(dados) {
  return new Promise((resolve, reject) => {
    const { rua, numero, bairro, cidade, estado } = dados;
    db.run(
      `INSERT INTO endereco(rua, numero, bairro, cidade, estado) VALUES(?,?,?,?,?)`,
      [rua, numero, bairro, cidade, estado],
      function (err) {
        if (err) return reject(err);
        resolve({ id: this.lastID, ...dados });
      }
    );
  });
}

function findAllEnderecoRepository() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM endereco`, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function findEnderecoByIdRepository(id) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM endereco WHERE id = ?`, [id], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
}

function updateEnderecoRepository(id, dados) {
  return new Promise((resolve, reject) => {
    const { rua, numero, bairro, cidade, estado } = dados;
    db.run(
      `UPDATE endereco SET rua = ?, numero = ?, bairro = ?, cidade = ?, estado = ? WHERE id = ?`,
      [rua, numero, bairro, cidade, estado, id],
      function (err) {
        if (err) return reject(err);
        resolve(this.changes > 0);
      }
    );
  });
}

function deleteEnderecoRepository(id) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM endereco WHERE id = ?`, [id], function (err) {
      if (err) return reject(err);
      resolve(this.changes > 0);
    });
  });
}

export default {
  createEnderecoRepository,
  findAllEnderecoRepository,
  findEnderecoByIdRepository,
  updateEnderecoRepository,
  deleteEnderecoRepository
};
