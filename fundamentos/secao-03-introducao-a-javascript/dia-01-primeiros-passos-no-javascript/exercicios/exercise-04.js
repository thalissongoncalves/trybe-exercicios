let angulo01 = 50;
let angulo02 = 70;
let angulo03 = 60;
let totalAngulos = angulo01 + angulo02 + angulo03;

if (totalAngulos < 0) {
  console.log("Triângulo inválido.");
} else if (totalAngulos == 180) {
  console.log("É um triângulo.");
} else if (totalAngulos != 180) {
  console.log("Não é um triângulo.");
}
