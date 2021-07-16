const form = document.getElementById('form'),
  input = document.getElementById('input'),
  todos = document.getElementById('todos');

const formHandler = (e) => {
  e.preventDefault();
  if (!input.value) return;

  const todoEl = document.createElement('li');
  todoEl.innerText = input.value;

  input.value = '';

  todoEl.addEventListener('click', function (e) {
    e.target.remove();
  });
  todos.appendChild(todoEl);
};

form.addEventListener('submit', formHandler);
