import { print, flattenPair } from './utils.js';

class Expression {
	constructor(application) {
		this.application = application;
	}

	toString() {
		return this.application;
	}

	freeVariables() {
		let categorized_vars = this.detectVariables();
		return categorized_vars.filter(pair => pair[1] === 'free').map(pair => pair[0]);
	}

	detectVariables(upper_vars = []) {
		return flattenPair(this.application.detectVariables(upper_vars));
	}

	printVariables(upper_vars = []) {
		this.application.printVariables(upper_vars);
	}

	print() {
		print(this.toString());
	}
}

export default Expression;