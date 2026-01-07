const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const addTaskBtn = document.getElementById('criar-tarefa');

addTaskBtn.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.innerText = input.value;
  taskList.appendChild(listItem);
  input.value = '';
  listItem.addEventListener(
    'click',
    (e) => (e.target.style.backgroundColor = 'rgb(128, 128, 128)')
  );
});
