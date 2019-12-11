export class TodoModel {
  constructor({ title, done}) {
    this.title = title;
		this.done = done;
  }

  // addTodo(todoObj) {
  //   this._saveData(todoObj);
  // }

  // removeTodo(todoId) {
  //   this._removeData(todoId);
  // }

  // _removeData(id) {
  //   this.todos.delete(id);
  // }

  // _toggleDoneData(id) {
  //   const todo = this.todos.get(id);

  //   this.todos.set(id, Object.assign(todo, {
  //     'done': !todo.done
  //   }));
  // }
}
