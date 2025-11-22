// Desafio fatorial
// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// Exemplo de 4 fatorial:
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

const number = 4;
let fatorial = [];
let valorFatorial = 0;

for (index = 1; index < number; index += 1) {
  fatorial.push(number - index);
}

for (index = 0; index < fatorial.length; index += 1) {
  let multiplicacao = number * fatorial[index];
  valorFatorial += multiplicacao;
}

console.log(valorFatorial);
