// To-Do List - Functions Version 2.0

// declaring variable and array
var todos = ['item 1', 'item 2', 'item 3']
// It should have a function to display todos.
function displayTodos() {
  console.log('My todos:', todos);
}
// It should have a function to add todos.
function addTodo(todo) { // addTodo('new todo') would push new value to todos array.
  todos.push(todo);
  displayTodos(); // running function inside of a function.
}
// It should have a function to change todos.
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}
// It should have a function to delete todos.
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
