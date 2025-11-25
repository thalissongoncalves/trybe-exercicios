// Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e armazene na variável achievements a quantidade de títulos no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

const player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

let bestWordCount = 0;

for (index = 0; index < player["bestInTheWorld"].length; index += 1) {
  bestWordCount += 1;
}

const achievements = `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${bestWordCount} vezes`;
console.log(achievements);
