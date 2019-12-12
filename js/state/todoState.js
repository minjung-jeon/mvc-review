import Observable from '../lib/observable.js';
import { CountModel, TodoModel } from '../models/index.js';
import { isObject } from '../utils/index.js';

export default class TodoState extends Observable {
  constructor() {
    super();
    this.todos = new Map();
    this.count = new CountModel();
  }

  updateTodos() {
    this.notify('UPDATE_TODOS', this.getAllData('todos'));
  }

  updateCount() {
    this.notify('UPDATE_COUNT', this.getAllData('count'));
  }

  _setCount(active, done) {
    this.count.active = this.count.active + active;
    this.count.done = this.count.done + done;
    this.count.all = this.count.active + this.count.done;
  }

  addTodo(data) {
    // 객체 모음 배열이 들어왔을 때 -> 데이터 받아올 경우
    if(Array.isArray(data)) {
      let countActive = 0;
      let countDone = 0;

      data.map(({ 
        id = Date.now(), 
        title, 
        done = false
      }) => {
        this.todos.set(id, new TodoModel({ title, done }));
        done ? countDone++ : countActive++;
      });
      this._setCount(countActive, countDone);
    } else if (isObject(data)) {
      // 하나의 객체가 들어왔을 때 -> todo x 1개
      const {
        id = Date.now(),
        title,
        done = false
      } = data;
      this.todos.set(id, new TodoModel({ title, done }));
      this._setCount(1, 0);
    } else {
      return;
    }
    
    this.updateTodos();
    this.updateCount();
  }

  removeTodo(id) {
    const todo = this.getTodo(id);
    const setCountArgs = todo.done ? [0, -1] : [-1, 0];

    this.todos.delete(id);
    this._setCount(...setCountArgs);

    this.updateTodos();
    this.updateCount();
  }

  toggleTodo(id) {
    const todo = this.todos.get(id);
    const setCountArgs = todo.done ? [1, -1] : [-1, 1];

    todo.done = !todo.done;
    this._setCount(...setCountArgs);

    this.updateTodos();
    this.updateCount();
  }

  getAllData(type) {
    return {
      todos: this.todos,
      count: this.count
		}[type];
  }

  getTodo(id) {
    return this.todos.get(id);
  }
}
