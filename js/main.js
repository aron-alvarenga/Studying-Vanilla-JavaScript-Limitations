let inputEl = document.querySelector(".todoInput");
let buttonEl = document.querySelector(".todoBtn");
let ulEl = document.querySelector(".todoResult");

let todos = [];

buttonEl.addEventListener("click", addTodo);

function addTodo() {
  let userInput = inputEl.value;

  if (userInput.trim() == "") {
    return;
  }

  let newTodo = { id: Math.random(), value: userInput };
  todos.push(newTodo);

  let todoLi = document.createElement("li");
  todoLi.textContent = userInput;
  todoLi.addEventListener("click", removeTodo);
  todoLi.dataset.id = newTodo.id;
  ulEl.appendChild(todoLi);
  inputEl.value = "";
  console.log(todos);
}

function removeTodo(event) {
  let clickedLi = event.target;
  let itemId = clickedLi.dataset.id;

  for (let index = 0; index < todos.length; index++) {
    if (todos[index].id == itemId) {
      todos.splice(index, 1);
      break;
    }
  }

  clickedLi.parentNode.removeChild(clickedLi);
  console.log(todos);
}
