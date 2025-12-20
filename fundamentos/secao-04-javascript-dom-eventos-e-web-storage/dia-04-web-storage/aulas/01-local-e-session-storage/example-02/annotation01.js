const myObj = {
  name: 'Link',
  age: 20,
};

// É preciso transformar este objeto em uma string. Para isso, utiliza-se a função `JSON.stringify()`.

localStorage.setItem('myData', JSON.stringify(myObj)); 

// Como dito anteriormente, o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, é necessário passar como primeiro parâmetro do método `setItem()` o nome da chave, neste caso `myData`, e como segundo parâmetro a função `JSON.stringify()` com o objeto-valor que se quer armazenar na chave `myData`. Feito isso, foi salvo no `localStorage` um objeto com a chave `myData` e o valor `{ "name": "Link", "age": 20 }`.

// Agora, é preciso recuperar o objeto armazenado, mas ele deve ficar no formato original, e não como uma string. Para isso, utilize a função `JSON.parse()`.

const recoveredObject = JSON.parse(localStorage.getItem('myData'));

// A função `JSON.parse()` foi utilizada para transformar a string que está armazenada no `localStorage` de volta para seu formato original, um objeto.

console.log(recoveredObject); // { name: 'Link', age: 20 }