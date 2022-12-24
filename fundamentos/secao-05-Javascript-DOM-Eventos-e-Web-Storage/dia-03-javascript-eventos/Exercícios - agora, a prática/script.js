const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// Parte 1
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

// Observação 🔎: Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDaysOfTheMonth = () => {
const days = document.getElementById('days');
for (let index = 0; index < decemberDaysList.length; index += 1) {
    dayNumber = decemberDaysList[index];
    daysChild = document.createElement('li');
    daysChild.innerHTML = dayNumber;

    if (dayNumber === 24 || dayNumber === 31) {
      daysChild.className = 'day holiday';
      days.appendChild(daysChild);
    } else if (dayNumber === 4 || dayNumber === 11 || dayNumber === 18) {
      daysChild.className = 'day friday';
      days.appendChild(daysChild);
    } else if (dayNumber === 25) {
      daysChild.className = 'day holiday friday';
      days.appendChild(daysChild);
    } else {
      daysChild.className = 'day';
      days.appendChild(daysChild);
    }
    days.appendChild(daysChild);
  }
}

createDaysOfTheMonth();

// Parte 2
// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

const createButton = (buttonName) => {
    const divElement = document.querySelector('.buttons-container');
    buttonAdd = document.createElement('button');
    buttonAddId = 'btn-holiday';

    buttonAdd.innerHTML = buttonName;
    buttonAdd.id = buttonAddId;
    divElement.appendChild(buttonAdd);
}

createButton('Feriados');

// Parte 3
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.

const changeColor = () => {
    let changeColorHoliday = document.querySelectorAll('.holiday');
    let getHolidayButton = document.getElementById('btn-holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'green';

  getHolidayButton.addEventListener('click', () => {
    for (let index = 0; index < changeColorHoliday.length; index += 1) {
      if (changeColorHoliday[index].style.backgroundColor === setNewColor) {
        changeColorHoliday[index].style.backgroundColor = backgroundColor;
      } else {
        changeColorHoliday[index].style.backgroundColor = setNewColor;
      }
    }
  });
}

changeColor();

// Parte 4
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

const friday = (buttonName) => {
    const getButtonsContainer = document.querySelector('.buttons-container');
    const btnFriday = document.createElement('button');
    btnFriday.id = 'btn-friday';
  
    btnFriday.innerHTML = buttonName;
    getButtonsContainer.appendChild(btnFriday);
  }
  
  friday('Sexta-feira');

// Parte 5
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

const changeColorFriday = () => {
  let getClassFriday = document.querySelectorAll('.friday');
  let getButtonFriday = document.getElementById('btn-friday');
  let newColorFriday = 'yellow';
  let resetColor = '#EEEEEE';

  getButtonFriday.addEventListener('click', () => {
    for (index = 0; index < getClassFriday.length; index += 1) {
      if (getClassFriday[index].style.backgroundColor === newColorFriday) {
        getClassFriday[index].style.backgroundColor = resetColor;
      } else {
        getClassFriday[index].style.backgroundColor = newColorFriday;
      }
    }
  })
}

changeColorFriday();

// Parte 6
// Implemente duas funções que criem um efeito de “zoom”;
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// De olho na dica 👀: Você pode utilizar a propriedade event.target.

const dayMouseOver = () => {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}

const dayMouseOut = () => {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
}

dayMouseOver();
dayMouseOut();