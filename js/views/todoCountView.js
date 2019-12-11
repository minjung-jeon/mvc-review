import ViewComponent from '../lib/viewComponent.js';
import { TodoCountTemplate } from '../templates/index.js'

export class TodoCountView extends ViewComponent {
  constructor() {
    super({
			element: document.querySelector('.info'),
			template: new TodoCountTemplate()
		});
  }

  render(count) {
    console.log(count);
    const resultCountHTML = this.template.insert(count);

    this.element.innerHTML = resultCountHTML;
  }
}
