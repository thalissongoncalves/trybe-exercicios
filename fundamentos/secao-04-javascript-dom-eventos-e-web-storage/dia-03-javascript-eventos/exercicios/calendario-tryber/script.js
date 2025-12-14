const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// Escreva seu código abaixo.

const addDay = (array) => {
  const days = document.querySelector("#days");

  for (index = 0; index < array.length; index += 1) {
    const liElement = document.createElement("li");
    liElement.className = "day";
    liElement.innerText = array[index];
    if (array[index] === 24 || array[index] === 25 || array[index] === 31) {
      liElement.classList.add("holiday");
    }

    if (
      array[index] === 4 ||
      array[index] === 11 ||
      array[index] === 18 ||
      array[index] === 25
    ) {
      liElement.classList.add("friday");
    }
    days.appendChild(liElement);
  }
};

addDay(decemberDaysList);

const btnHoliday = document.querySelector("#btn-holiday");
btnHoliday.addEventListener("click", (e) => {
  const holidays = document.querySelectorAll(".holiday");
  for (index = 0; index < holidays.length; index += 1) {
    if (holidays[index].classList.contains("activate")) {
      holidays[index].classList.remove("activate");
      holidays[index].style.backgroundColor = "rgb(238,238,238)";
      holidays[index].style.color = "#777";
    } else {
      holidays[index].classList.add("activate");
      holidays[index].style.backgroundColor = "green";
      holidays[index].style.color = "white";
    }
  }
})