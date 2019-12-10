import ViewComponent from '../lib/viewComponent.js';
import { TodoCounterTemplate } from '../templates/index.js'

export class TodoCounterView extends ViewComponent {
  constructor() {
    super({
      element: document.querySelector('.info'),
      template: new TodoCounterTemplate(),
    });
  }

  render(todoCounter) {
    const resultCounterHTML = this.template.insert(todoCounter);

    this.element.innerHTML = resultCounterHTML;
  }
}
