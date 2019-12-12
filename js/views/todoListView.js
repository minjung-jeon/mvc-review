import ViewComponent from '../lib/viewComponent.js';
import { TODO_ITEM_TEMPLATE } from '../templates/index.js'
import { changeDataToDom, findParentNode } from '../utils/index.js';

export class TodoListView extends ViewComponent {
  constructor() {
    super({
      element: document.querySelector('.list_todo'),
      template: TODO_ITEM_TEMPLATE,
    });
    this.isSetEventListner = false;
    this.handleRemove = null;
    this.handleDoneStatus = null;
    this.handleEvents = e => {
      const target = e.target;
      // dataset메소드 보다 getAttribute메소드가 성능에 유리
      const targetDomName = target.getAttribute('data-dom-name');
      const parentDom = findParentNode('todoItem', target);
      const selectedId = parseInt(parentDom.getAttribute('data-id'), 10);

      if(targetDomName === 'todoDelBtn') {
        this._onRemove(selectedId);
      } else if(targetDomName === 'text' || 'item') {
        this._onDoneStatus(selectedId);
      }
    };
  }

  registerEvents() {
    this.element.addEventListener('click', this.handleEvents);
  }

  unregisterEvents() {
    this.element.removeEventListener('click', this.handleEvents);
  }

  toggleSetEventListener(size, flag) {
    if(size === 0 && flag) {
      console.log('removeEVENT');
      this.unregisterEvents();
      this.isSetEventListner = false;
    } else if(size > 0 && !flag) {
      console.log('addEVENT');
      this.registerEvents();
      this.isSetEventListner = true;
    }
  }

  todoHtmlParser(acc, todo) {
    const defaultTemplate = this.template;
    const idValue = todo[0];
    const { title, done } = todo[1];
    const classNames = `item_todo ${done ? 'done' : ''}`;

    let template = changeDataToDom({ classNames, idValue, title }, defaultTemplate);
    
    return acc += template;
  }

  _onRemove(id) {
    this.handleRemove(id);
  }

  _onDoneStatus(id) {
    this.handleDoneStatus(id);
  }

  render(todos) {
    const resultTodosHTML = [...todos].reduce(this.todoHtmlParser.bind(this), '');
    
    this.toggleSetEventListener(todos.size, this.isSetEventListner);
    this.element.innerHTML = resultTodosHTML;
  }
}
