// Desafio dos asteriscos, parte 2
// Agora, inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

n = 5;

for (index = 1; index <= n; index += 1) {
  console.log(" ".repeat(n-index) + "*".repeat(index))
}