// Faça um programa para adicionar pessoas clientes ao array do TrybeBank. A função deve se chamar addCustomer e receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, retorne a mensagem: “O parâmetro passado deve ser do tipo string”.

const trybeBankCustomers = ["Oliva", "Nat", "Gus"];

// escreva aqui sua função
function addCustomer(name) {
  if (typeof name != "string") {
    return "O parâmetro passado deve ser do tipo string";
  } else {
    trybeBankCustomers.push(name);
    return trybeBankCustomers;
  }
}

console.log(addCustomer("Thálisson"));
console.log(addCustomer(123));
