import sqlite3 from "sqlite3";

const db = new sqlite3.Database('database.sqlite', 
    (error) => {
        if (error) {
            console.error("Erro ao conectar ao banco de dados: ", error.message);
        } else {
            db.run(`
                CREATE TABLE IF NOT EXISTS endereco (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    rua TEXT NOT NULL,
                    numero INTEGER NOT NULL,
                    bairro TEXT NOT NULL,
                    cidade TEXT NOT NULL,
                    estado TEXT NOT NULL
                )
            `);
        }
    });

export default db;