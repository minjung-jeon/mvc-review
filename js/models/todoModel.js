import Observable from '../lib/observable.js';
import { getRefinedData } from '../utils/index.js';

class TodoCounter {
  constructor() {
    this.all = 0;
    this.done = 0;
    this.active = 0;
  }
}

export class TodoModel extends Observable {
  constructor(props = {}) {
    super();

    if(props.hasOwnProperty('reqUrl')) {
      const { reqUrl, util } = props; 
      
      this.reqUrl = reqUrl;
      this.fetchJson = util;
    }

    this.todos = new Map();
    this.todoCounter = {
      all: 0,
      done: 0,
      active: 0,
    };
  }

  async initStoredData() {
    const todoArray = await this._requestTodo();

    if (todoArray.length === 0) {
			return;
    }

    getRefinedData(todoArray).map(item => {
      this._saveData(item);
    });
    this.countTodo();
    this.fireObservers();
  }

  addTodo(todoObj) {
    this._saveData(todoObj);
    this.countTodo();
    this.fireObservers();
  }

  removeTodo(todoId) {
    this._removeData(todoId);
    this.countTodo();
    this.fireObservers();
  }

  toggleDoneStatus(todoId) {
    this._toggleDoneData(todoId);
    this.countTodo();
    this.fireObservers();
  }

  countTodo() {
    const todoData = this.todos;
    const all = todoData.size;
    let done = 0;

    for(let value of todoData.values()) {
      if(value.done) {
        done++;
      }
    }

    this.todoCounter = {
      all,
      done,
      active : all - done
    }
  }

  async _requestTodo() {
    const resJSON = await this.fetchJson(this.reqUrl);

    return resJSON;
  }

  _saveData({ 
    id = Date.now(),
    title,
    done = false
  }) {
    this.todos.set(id, { title, done });
  }

  _removeData(id) {
    this.todos.delete(id);
  }

  _toggleDoneData(id) {
    const todo = this.todos.get(id);

    this.todos.set(id, Object.assign(todo, {
      'done': !todo.done
    }));
  }
}
