import ViewComponent from '../lib/viewComponent.js';
import { validateInputValue } from '../utils/index.js';

export class TodoFormView extends ViewComponent {
  constructor() {
    super({
      element: document.querySelector('.area_form')
    });
    this.textInput = this.element.querySelector('.input_todo');
    this.submitBtn = this.element.querySelector('.button_submit');
    this.handleSubmit = null;
  }

  init() {
    this.registerEvents();
    this.resetInput();
  }

  registerEvents() {
    this.submitBtn.addEventListener('click', this._onSubmit.bind(this));
    this.textInput.addEventListener('keypress', e => {
      if(e.keyCode === 13) {
        e.preventDefault();
        this._onSubmit.call(this);
      }
    });
  }

  resetInput() {
    this.textInput.value = '';
    this.textInput.focus();
  }

  _onSubmit() {
    const todoText = this.textInput.value.trim();

    if(validateInputValue(todoText, '해당 특수문자는 사용 할 수 없습니다.')) {
      this.handleSubmit(todoText);
    }
  }
}
