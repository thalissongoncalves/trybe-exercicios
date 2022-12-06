// Exercício 01
// 🚀 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

// 🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

// Copie o código abaixo e rode-o para verificar sua saída:

function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
    
  }
  imprimeIdade()

// Exercício 02

// 🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
// Copie o código abaixo e rode-o para verificar sua saída:

  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa.nome = {
    nome: 'Luna'
  }
  pessoa.idade = {
    idade: 19
  } 
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);