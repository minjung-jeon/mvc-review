const TODO_COUNT_TEMPLATE = `
  all({{all}}), active({{active}}), done({{done}})
`;

const TODO_ITEM_TEMPLATE = `
  <li class="{{classNames}}" data-dom-name="todoItem" data-id="{{idValue}}">
    <span class="text" data-dom-name="todoText">{{title}}</span>
    <button type="button" class="button_delete" aria-label="삭제" data-dom-name="todoDelBtn">
      <i class="icon_delete" data-dom-name="todoDelBtn"></i>
    </button>
  </li>
`;

export {
  TODO_COUNT_TEMPLATE,
  TODO_ITEM_TEMPLATE
};
