import config from '../config.js';
import { print, flattenPair } from "./utils.js";

class Application {
	constructor(...expressions) {
		this.expressions = expressions;
	}

	toString() {
		let output = config.WRAP_APP ? '(' : '';
		for (let i = 0; i < this.expressions.length; ++i) {
			output += this.expressions[i];

			if (i < this.expressions.length - 1) {
				output += ' ';
			}
		}
		output += config.WRAP_APP ? ')' : '';

		return output;
	}

	freeVariables() {
		let categorized_vars = this.detectVariables();
		return categorized_vars.filter(pair => pair[1] === 'free').map(pair => pair[0]);
	}

	detectVariables(upper_vars = []) {
		let free_variables = [];

		this.expressions.forEach(expression => {
			free_variables.push(expression.detectVariables(upper_vars));
		});

		return flattenPair(free_variables);
	}

	printVariables() {
		const varibles = this.detectVariables();

		varibles.forEach(pair => {
			print(pair[0] + ' is ' + pair[1]);
		});
	}

	alphaReduce(replMap = new Map(), upper_vars = this.freeVariables()) {
		this.expressions.forEach(expression => {
			expression.alphaReduce(replMap, upper_vars);
		});

		return this;
	}

	print() {
		print(this.toString());
	}
}

export default Application;