export default class Router extends Map {
  constructor () {
    super();
  }

  route(key) {
    this.get(key).init();
  }
}
