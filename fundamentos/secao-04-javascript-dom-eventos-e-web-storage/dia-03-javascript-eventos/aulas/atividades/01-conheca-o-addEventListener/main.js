const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Resposta: Ocorre por que tem o seguinte atributo css definido nele: "transform: translateY(-20px)";

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.
const liElement = document.getElementsByTagName("li");

for (index = 0; index < liElement.length; index += 1) {
  liElement[index].addEventListener("click", (e) => {
    e.target.className = "tech";
    for (index2 = 0; index2 < liElement.length; index2 += 1) {
      if (liElement[index2].id !== e.target.id) {
        liElement[index2].classList.remove(["tech"]);
      }
    }
  });
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.
const inputElement = document.querySelector("#input");

inputElement.addEventListener("change", (e) => {
  const techElement = document.querySelector(".tech");
  techElement.innerText = e.target.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.
const h3Element = document.querySelector("#my-spotrybefy");
h3Element.addEventListener("dblclick", (e) => {
  window.open("https://thalisson-goncalves.vercel.app", "_blank")
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.

// Segue abaixo um exemplo de uso do event.target.

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
};

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.
