// Agora iremos escrever uma função chamada addCustomers que irá adicionar um array de novas pessoas clientes ao nosso array trybeBankCustomers.
// Essa função deve receber dois parâmetros: o array trybeBankCustomers e um novo array de pessoas que devem ser adicionadas.
// Certifique-se de que somente sejam adicionados ao array trybeBankCustomers valores do tipo string. Caso algum elemento contido no segundo parâmetro não seja do tipo string, retorne a mensagem: “Todos os valores precisam ser strings.”.

const trybeBankCustomers = ["Oliva", "Nat", "Gus"];

// escreva aqui sua função
function addCustomers(array, newArray) {
  for (index = 0; index < newArray.length; index += 1) {
    if (typeof newArray[index] != "string") {
      return "Todos os valores precisam ser strings";
    } else {
      array.push(newArray[index]);
    }
  }
}

addCustomers(trybeBankCustomers, ["Thálisson", "Lucas", "João"]);
console.log(trybeBankCustomers);

console.log(addCustomers(trybeBankCustomers, ["Thalisson", "Lucas", 123]));
