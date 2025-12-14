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
});

const btnFriday = document.querySelector("#btn-friday");
btnFriday.addEventListener("click", (e) => {
  const fridays = document.querySelectorAll(".friday");
  for (index = 0; index < fridays.length; index += 1) {
    if (fridays[index].classList.contains("fridayActivate")) {
      const friday = fridays[index].innerText;
      fridays[index].classList.remove("fridayActivate");
      fridays[index].innerText = friday.replace(/friday/g, "");
    } else {
      fridays[index].classList.add("fridayActivate");
      fridays[index].innerText = `friday${fridays[index].innerText}`;
    }
  }
});

const zoomOn = () => {
  const dayElements = document.querySelectorAll(".day");
  for (index = 0; index < dayElements.length; index += 1) {
    dayElements[index].addEventListener("mouseover", (e) => {
      e.target.style.fontSize = "30px";
    });
  }
};
const zoomOff = () => {
  const dayElements = document.querySelectorAll(".day");
  for (index = 0; index < dayElements.length; index += 1) {
    dayElements[index].addEventListener("mouseout", (e) => {
      e.target.style.fontSize = "20px";
    });
  }
};

zoomOn();
zoomOff();

const taskSelect = () => {
  const tasks = document.querySelectorAll(".task");
  for (index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener("click", (e) => {
      if (e.target.classList.contains("selected")) {
        e.target.classList.remove("selected");
      } else {
        e.target.classList.add("selected");
      }
    });
  }
};

taskSelect();

const changeDayColor = () => {
  const tasks = document.querySelectorAll(".task");
  const days = document.querySelectorAll(".day");
  let color = "";
  for (index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener("click", (e) => {
      color = e.target.style.backgroundColor;
    });
  }
  for (index2 = 0; index2 < days.length; index2 += 1) {
    days[index2].addEventListener("click", (e) => {
      if (
        e.target.style.color === "rgb(119,119,119)" ||
        e.target.style.color === "#777" ||
        e.target.style.color === ""
      ) {
        e.target.style.color = color;
      } else {
        e.target.style.color = "";
      }
    });
  }
};

changeDayColor();

const addTask = () => {
  const inputElement = document.querySelector("#task-input");
  const btnInput = document.querySelector("#btn-add");
  const taskList = document.querySelector("#task-list");
  let inputValue = "";
  inputElement.addEventListener("input", (e) => {
    inputValue = e.target.value;
  });
  inputElement.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (inputValue) {
        const taskElement = document.createElement("li");
        taskElement.innerText = inputValue;
        taskList.appendChild(taskElement);
      } else {
        return alert("Nenhuma tarefa foi inserida no campo de texto.");
      }
    }
  });
  btnInput.addEventListener("click", (e) => {
    if (inputValue) {
      const taskElement = document.createElement("li");
      taskElement.innerText = inputValue;
      taskList.appendChild(taskElement);
    } else {
      return alert("Nenhuma tarefa foi inserida no campo de texto.");
    }
  });
};

addTask();