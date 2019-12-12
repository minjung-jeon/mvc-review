export class TodoController {
  constructor({
		state: { todoState },
		view: { todoFormView, todoListView, todoCountView }
	}) {
    // state
    this.todoState = todoState;

    // view
    this.todoFormView = todoFormView;
		this.todoListView = todoListView;
    this.todoCountView = todoCountView;

    this._bindEventHandlers();
		this._registerObservers();
  }

  _bindEventHandlers() {
    this.todoFormView.handleSubmit = this.handleSubmitForm.bind(this);
    this.todoListView.handleRemove = this.handleRemoveItem.bind(this);
    this.todoListView.handleDoneStatus = this.handleDoneStatus.bind(this);
  }

  _registerObservers() {
    this.todoState.register('UPDATE_TODOS', this.renderListView, this);
    this.todoState.register('UPDATE_COUNT', this.renderCountView, this);
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.todoFormView.init();
    });
  }

  // control view
  renderListView(todos) {
		this.todoListView.render(todos);
  }

  renderCountView(count) {
    this.todoCountView.render(count);
  }
  
  // view event handler
  handleSubmitForm(title) {
    this.todoState.addTodo({ title });
    this.todoFormView.resetInput();
  }
  
  handleRemoveItem(id) {
    this.todoState.removeTodo(id);
    this.todoFormView.resetInput();
  }

  handleDoneStatus(id) {
    this.todoState.toggleTodo(id);
    this.todoFormView.resetInput();
  }
}
