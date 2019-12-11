import Observable from '../lib/observable.js';

export class CountModel extends Observable {
	constructor() {
    super();

		this.active = 0;
		this.done = 0;
		this.all = 0;
	}

	// set all(count) {
  //   if(count){
  //     this._all = count;
  //   }
	// }

	// get all() {
	// 	return this._all;
	// }

	// set active(count) {
  //   if(count){
  //     this._active = count;
  //   }
	// }

	// get active() {
	// 	return this._active;
	// }

	// set done(count) {
  //   if(count){
  //     this._done = count;
  //   }
	// }

	// get done() {
	// 	return this._done;
	// }
}
