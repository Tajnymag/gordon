import config from '../config.js';
import { print, cloneMap } from "./utils.js";

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

	detectVariables(upper_vars = []) {
		this.expressions.forEach(expression => {
			expression.detectVariables(upper_vars);
		});
	}

	alphaReduce(replacementMapping = new Map(), upper_vars = []) {
		this.expressions.forEach(expression => {
			expression.alphaReduce(replacementMapping, upper_vars);
		});
	}

	print() {
		print(this.toString());
	}
}

export default Application;