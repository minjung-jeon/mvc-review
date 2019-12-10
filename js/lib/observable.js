export default class Observable {
	constructor() {
		this._observerList = new Set();
	}

	on(observer) {
		this._observerList.add(observer);
	}

	off(observer) {
    this._observerList.delete(observer);
  }

	fireObservers(data) {
    this._observerList.forEach(observer => observer(data))
  }
}
