const fs = require("fs").promises;
const path = require("path");

const SIMPSONS_DATA_PATH = "./simpsons.json";

async function readSimpsonsData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_DATA_PATH));
    const simpsons = JSON.parse(data);
    for (i = 0; i < simpsons.length; i += 1) {
      console.log(`${simpsons[i].id} - ${simpsons[i].name}`);
    }
  } catch (err) {
    console.error(`Erro na leitura do arquivo: ${err}`);
  }
}

async function findSimpsonsForId(id) {
  try {
    const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_DATA_PATH));
    const simpsons = JSON.parse(data);
    for (i = 0; i < simpsons.length; i += 1) {
      if (simpsons[i].id == id) {
        console.log(`${simpsons[i].id} - ${simpsons[i].name}`);
      }
    }
  } catch (err) {
    console.error(`ID não encontrado.`)
  }
}
