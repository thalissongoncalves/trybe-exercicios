let grade = 59;
let result = "";

if (grade >= 80) {
  result = "Parabéns, você faz parte do grupo de pessoas aprovadas!";
} else if (grade < 80 && grade >= 60) {
  result = "Você está na nossa lista de espera.";
} else {
  result = "Infelizmente, você reprovou.";
}

console.log(result);
