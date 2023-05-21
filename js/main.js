new Vue({
  el: "#app",
  data: {
    todos: [],
    userInput: "",
  },
  methods: {
    addTodo: function () {
      if (this.userInput.trim() == "") {
        return;
      }
      let newTodo = { id: _.uniqueId(), value: this.userInput };
      this.todos.push(newTodo);
    },
    removeTodo(todo) {
      let id = todo.id;
      for (let index = 0; index < this.todos.length; index++) {
        if (this.todos[index].id == id) {
          this.todos.splice(index, 1);
          break;
        }
      }
    },
  },
});
