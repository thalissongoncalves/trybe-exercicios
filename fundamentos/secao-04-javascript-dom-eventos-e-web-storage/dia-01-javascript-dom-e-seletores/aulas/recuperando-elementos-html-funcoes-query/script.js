// 1. Altere a cor de fundo do header para rgb(0, 176, 105);
window.document.querySelector("#header-container").style.backgroundColor = "rgb(0, 176, 105)";

// 2. Altere a cor de fundo da div das tarefas que são Urgentes e Importantes para rgb(255, 159, 132);
window.document.querySelector(".emergency-tasks").style.backgroundColor = "rgb(255, 159, 132)";

// 3. Altere a cor de fundo do título das tarefas que são Urgentes e Importantes para rgb(165, 0, 243);
window.document.querySelectorAll(".emergency-tasks div h3")[0].style.backgroundColor = "rgb(165, 0, 243)";
window.document.querySelectorAll(".emergency-tasks div h3")[1].style.backgroundColor = "rgb(165, 0, 243)";

// 4. Altere a cor de fundo da div das tarefas que não são Urgentes e Importantes para rgb(249, 219, 94);
window.document.querySelector(".no-emergency-tasks").style.backgroundColor = "rgb(249, 219, 94)";

// 5. Altere a cor de fundo do título das tarefas que não são Urgentes e Importantes para rgb(35, 37, 37);
window.document.querySelectorAll(".no-emergency-tasks div h3")[0].style.backgroundColor = "rgb(35, 37, 37)";
window.document.querySelectorAll(".no-emergency-tasks div h3")[1].style.backgroundColor = "rgb(35, 37, 37)";

// 6. Altere a cor de fundo do footer para rgb(0, 53, 51).
window.document.querySelector("footer").style.backgroundColor = "rgb(0, 53, 51)";