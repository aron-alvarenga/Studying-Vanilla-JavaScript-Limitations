let inputEl = $(".todoInput");
let buttonEl = $(".todoBtn");
let ulEl = $(".todoResult");

let todos = [];

buttonEl.click(addTodo);

function addTodo() {
  let userInput = inputEl.val();

  if (userInput.trim() == "") {
    return;
  }

  let newTodo = { id: Math.random(), value: userInput };
  todos.push(newTodo);

  $("<li>" + userInput + "</li>")
    .appendTo(ulEl)
    .attr("dataset-id", newTodo.id)
    .click(removeTodo);

  inputEl.value = "";
  console.log(todos);
}

function removeTodo(event) {
  let clickedLi = $(this);
  let itemId = clickedLi.attr("dataset-id");

  for (let index = 0; index < todos.length; index++) {
    if (todos[index].id == itemId) {
      todos.splice(index, 1);
      break;
    }
  }

  clickedLi.remove();
  console.log(todos);
}
