export default class ViewComponent {
  constructor(props = {}) {
    if(props.hasOwnProperty('element')) {
      this.element = props.element;
    }

    if(props.hasOwnProperty('template')) {
      this.template = props.template;
    }

    this.init = this.init || function() {};
    this.registerEvents = this.registerEvents || function() {};
    this.render = this.render || function() {};

    // viewComponent를 상속받은 컴포넌트에 공통적으로 필요한 메서드 정의 (Todo App에서는 없었음)
    // ex: class 추가/삭제, disalbed 속성 추가/삭제
  }
}
