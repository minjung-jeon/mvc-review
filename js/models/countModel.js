export class CountModel {
	constructor() {
    		super();

		this._active = 0;
		this._done = 0;
		this._all = 0;
	}

	set all(count) {
	    	this._all = count;
	}

	get all() {
		return this._all;
	}

	set active(count) {
	      	this._active = count;
	}

	get active() {
		return this._active;
	}

	set done(count) {
		this._done = count;
	}

	get done() {
		return this._done;
	}
}
