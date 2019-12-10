import ViewComponent from '../lib/viewComponent.js';
import { TodoListTemplate } from '../templates/index.js'
import { findParentNode } from '../utils/index.js';

export class TodoListView extends ViewComponent {
  constructor() {
    super({
      element: document.querySelector('.list_todo'),
      template: new TodoListTemplate(),
    });
    this.handleRemove = null;
    this.handleDoneStatus = null;
  }

  init() {
    this.registerEvents();
  }

  registerEvents() {
    let self = this;

    self.element.addEventListener('click', function(e) {
      const target = e.target;
      // dataset메소드 보다 getAttribute메소드가 성능에 유리
      const targetDomName = target.getAttribute('data-dom-name');
      const selectedId = parseInt(findParentNode('todoItem', target).dataset.id, 10);

      if(targetDomName === 'todoDelBtn') {
        self._onRemove.call(self, selectedId);
      } else if(targetDomName === 'text' || 'item') {
        self._onDoneStatus.call(self, selectedId);
      }
    });
  }

  _onRemove(id) {
    this.handleRemove(id);
  }

  _onDoneStatus(id) {
    this.handleDoneStatus(id);
  }

  render(todos) {
    const resultTodosHTML = this.template.insert(todos);

    this.element.innerHTML = resultTodosHTML;
  }
}
