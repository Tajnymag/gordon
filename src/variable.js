import { print } from './utils.js';

class Variable {
	constructor(name) {
		this.name = name;
	}

	toString() {
		return this.name;
	}

	freeVariables() {
		let categorized_vars = this.detectVariables();
		return categorized_vars.filter(pair => pair[1] === 'free').map(pair => pair[0]);
	}

	detectVariables(upper_vars = []) {
		if (upper_vars.includes(this.name)) {
			return [this.name, 'bound'];
		} else {
			return [this.name, 'free'];
		}
	}

	printVariables() {
		const pair = this.detectVariables();

		print(pair[0] + ' is ' + pair[1]);
	}

	alphaReduce(replMap = new Map()) {
		if (replMap[this.name]) {
			this.name = replMap[this.name];
		}

		return this;
	}

	print() {
		print(this.toString());
	}
}

export default Variable;