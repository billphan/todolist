// To-Do List - Objects Version 3.0

var todoList = {
  // it should store the todos array on an object.
  todos: ['item 1', 'item 2', 'item 3'],
  // it should have a displayTodos method.
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
  // it should have an addTodo method.
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  // it should have a changeTodo method.
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  // it should have a deleteTodo method.
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
