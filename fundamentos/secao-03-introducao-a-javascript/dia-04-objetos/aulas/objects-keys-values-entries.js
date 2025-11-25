let animal = {
  nome: 'Jade',
  idade: 10,
  comida: 'petisco',
}

// Array com as chaves
let keys = Object.keys(animal);
console.log(keys);
console.log(keys[1]);

// Array com os valores
let values = Object.values(animal);
console.log(values);

// Array com as entradas
let inputs = Object.entries(animal);
console.log(inputs);
console.log(entries[2]);
console.log(entries[2][0]);