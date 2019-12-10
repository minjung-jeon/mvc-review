export class TodoListTemplate {
  constructor() {
    this.defaultemplate = `
      <li class="{{classNames}}" data-dom-name="todoItem" data-id="{{idValue}}">
        <span class="text" data-dom-name="todoText">{{title}}</span>
        <button type="button" class="button_delete" aria-label="삭제" data-dom-name="todoDelBtn">
          <i class="icon_delete" data-dom-name="todoDelBtn"></i>
        </button>
      </li>
    `;
  }

  insert(data) {
    return [...data].reduce((acc, todo) => {
      const idValue = todo[0];
			const { title, done } = todo[1];
      const classNames = `item_todo ${done ? 'done' : ''}`
      let template = this.defaultemplate;

      template = template.replace('{{classNames}}', classNames);
      template = template.replace('{{idValue}}', idValue);
      template = template.replace('{{title}}', title);

      return acc += template;
    }, ''); 
  }
}
