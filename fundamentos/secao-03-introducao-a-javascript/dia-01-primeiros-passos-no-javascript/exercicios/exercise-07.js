let bruto = 2600;
let liquido = 0;
let inss = 0;
let ir = 0;

if (bruto > 0 && bruto <= 1556.94) {
  inss = bruto * 0.08;
  liquido = bruto - inss;
} else if (bruto >= 1556.95 && bruto <= 2594.92) {
  inss = bruto * 0.09;
  liquido = bruto - inss;
} else if (bruto >= 2594.93 && bruto <= 5189.82) {
  inss = bruto * 0.11;
  liquido = bruto - inss;
} else if (bruto > 5189.82) {
  liquido = bruto - 570.88;
}

if (liquido > 0 && liquido <= 1903.98) {
  ir = 0;
} else if (liquido >= 1903.99 && liquido <= 2826.65) {
  ir = liquido * 0.075;
  liquido = liquido - (ir - 142.8);
} else if (liquido >= 2826.66 && liquido <= 3751.05) {
  ir = liquido * 0.15;
  liquido = liquido - (ir - 354.8);
} else if (liquido >= 3751.06 && liquido <= 4664.68) {
  ir = liquido * 0.225;
  liquido = liquido - (ir - 636.13);
} else if (liquido > 4664.68) {
  ir = liquido * 0.275;
  liquido = liquido - (ir - 869.36);
}

console.log(liquido);
