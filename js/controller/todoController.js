export class TodoController {
  constructor({
		model: { todoModel },
		view: { todoFormView, todoListView, todoCounterView }
	}) {
    // model
    this.todoModel = todoModel;

    // view
    this.todoFormView = todoFormView;
		this.todoListView = todoListView;
    this.todoCounterView = todoCounterView;

    this._bindEventHandlers();
		this._registerObservers();
  }

  // register
  _bindEventHandlers() {
    this.todoFormView.handleSubmit = this.handleSubmitForm.bind(this);
    this.todoListView.handleRemove = this.handleRemoveItem.bind(this);
    this.todoListView.handleDoneStatus = this.handleDoneStatus.bind(this);
  }

  _registerObservers() {
    this._observeAddingTodo();
  }

  _observeAddingTodo() {
    this.todoModel.on(this.renderListView.bind(this, this.todoModel));
    this.todoModel.on(this.renderCounterView.bind(this, this.todoModel));
  }

  init() {
    if(this.todoModel.reqUrl) {
      this.todoModel.initStoredData();
    }
    document.addEventListener('DOMContentLoaded', () => {
      this.todoFormView.init();
      this.todoListView.init();
    });
  }

  // control view
  renderListView({ todos }) {
		this.todoListView.render(todos);
  }

  renderCounterView({ todoCounter }) {
    this.todoCounterView.render(todoCounter);
  }
  
  // view event handler
  handleSubmitForm(todoStr) {
    this.todoModel.addTodo({ title : todoStr });
    this.todoFormView.resetInput();
  }
  
  handleRemoveItem(todoId) {
    this.todoModel.removeTodo(todoId);
    this.todoFormView.resetInput();
  }

  handleDoneStatus(todoId) {
    this.todoModel.toggleDoneStatus(todoId);
    this.todoFormView.resetInput();
  }
}
