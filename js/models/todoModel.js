export class TodoModel {
  constructor({ title, done}) {
    this.title = title;
		this.done = done;
  }

  set done(status) {
    this._done = status;
  }

  get done() {
    return this._done;
  }

  set done(status) {
    this._done = status;
  }

  get done() {
    return this._done;
  }
}
