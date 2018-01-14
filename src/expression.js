import { print } from './utils.js';

class Expression {
	constructor(application) {
		this.application = application;
	}

	toString() {
		return this.application;
	}

	detectVariables(upper_vars = []) {
		this.application.detectVariables(upper_vars);
	}

	print() {
		print(this.toString());
	}
}

export default Expression;