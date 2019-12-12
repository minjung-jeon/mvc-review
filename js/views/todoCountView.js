import ViewComponent from '../lib/viewComponent.js';
import { TODO_COUNT_TEMPLATE } from '../templates/index.js'
import { changeDataToDom } from '../utils/index.js';

export class TodoCountView extends ViewComponent {
  constructor() {
    super({
			element: document.querySelector('.info'),
			template: TODO_COUNT_TEMPLATE
		});
  }

  render(count) {
    const resultCountHTML = changeDataToDom(count, this.template);

    this.element.innerHTML = resultCountHTML;
  }
}
