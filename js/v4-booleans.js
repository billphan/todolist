var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      // todoList.addTodo should add objects.
      // first todoText - name of the property: second todoText - referring to todoText parameter.
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  // todoList.changeTodo should change the todoText property.
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  // todoList.toggleCompleted should flip the completed property.
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    // bang operator to get the opposite of a boolean value.
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
