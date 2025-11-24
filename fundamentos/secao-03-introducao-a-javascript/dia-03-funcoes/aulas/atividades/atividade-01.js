const balance = 100;

// Adiciona um valor ao balance;
function sumBalance(value) {
  const newValue = balance + value;
  return newValue;
}

// Subtraia um valor do balance;
function subBalance(value) {
  const newValue = balance - value;
  return newValue;
}

// Multiplique o valor do balance por uma taxa;
function multBalance(value) {
  const newValue = balance * value;
  return newValue;
}

// Divida o valor do balance.
function divBalance(value) {
  const newValue = balance / value;
  return newValue;
}
