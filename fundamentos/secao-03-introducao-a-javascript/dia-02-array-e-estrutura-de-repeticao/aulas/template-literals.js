const product = 'Iphone 32';
const price = 58000;
const discount = 10;

const message = 
`Produto: ${product}
Preço: ${price}
Desconto: ${discount}%
Preço com desconto: R$${price - (price * (discount / 100)).toFixed(2)}`;

console.log(message);