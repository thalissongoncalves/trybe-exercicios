const trybeBankCustomers = ["Oliva", "Nat", "Gus"];
const pirilamposCustomers = ["Noel", "Carol", "Angelo", "Kissyla"];

function findElement(array, element) {
  return array.includes(element)
}

console.log(findElement(trybeBankCustomers, "Gus"));
console.log(findElement(pirilamposCustomers, "Carol"));