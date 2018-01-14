import { print } from './utils.js';

class Variable {
	constructor(name) {
		this.name = name;
	}

	toString() {
		return this.name;
	}

	detectVariables(upper_vars = []) {
		if (upper_vars.includes(this.name)) {
			print(this.name + ' is bound');
		} else {
			print(this.name + ' is free');
		}
	}

	alphaReduce(replacementMapping = new Map(), upper_vars = []) {
		if (replacementMapping[this.name]) {
			this.name = replacementMapping[this.name];
		}
	}

	print() {
		print(this.toString());
	}
}

export default Variable;