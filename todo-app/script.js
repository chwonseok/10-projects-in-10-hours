const form = document.getElementById('form'),
  input = document.getElementById('input'),
  todos = document.getElementById('todos');

const formHandler = (e) => {
  e.preventDefault();
  if (!input.value) return;

  const todoEl = document.createElement('li');

  todos.appendChild(todoEl);
  todoEl.innerText = input.value;
  input.value = '';
};

form.addEventListener('submit', formHandler);
