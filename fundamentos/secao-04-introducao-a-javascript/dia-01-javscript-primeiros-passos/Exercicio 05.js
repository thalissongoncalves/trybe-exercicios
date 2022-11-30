// Exercício 05 - 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

// Código:

const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

if(angulo1 + angulo2 + angulo3 === 180) {
    console.log("true, os ângulos formam um triângulo válido");
} else {
    console.log("false");
}