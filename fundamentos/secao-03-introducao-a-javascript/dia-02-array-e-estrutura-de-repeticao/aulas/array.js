const shoppingList = ["Arroz", "Batata", "Leite Ninho", "Sucrilhos"];

console.log(shoppingList); // Ver os valores dentro do array
console.log(shoppingList[0]); // Retorna o primeiro valor do array
console.log(shoppingList.length); // Retorna o tamanho do array
console.log(shoppingList[shoppingList.length - 1]); // Retorna o último elemento do array

shoppingList.push("Estilete"); // Adicionar elemento na última posição do array
shoppingList.unshift("Milho"); // Adicionar elemento na primeira posição do array
shoppingList.pop(); // Apaga o último elemento do array
shoppingList.shift(); // Apaga o primeiro elemento do array