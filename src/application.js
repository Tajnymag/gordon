import config from '../config.js';
import { print, flattenPair, cloneMap } from "./utils.js";

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
		let categorized_vars = [];

		this.expressions.forEach(expression => {
			categorized_vars.push(expression.detectVariables(upper_vars));
		});

		return flattenPair(categorized_vars);
	}

	printVariables() {
		const varibles = this.detectVariables();

		varibles.forEach(pair => {
			print(pair[0] + ' is ' + pair[1]);
		});
	}

	alphaReduce(replMap = new Map(), upper_vars = this.freeVariables()) {
		for (let i = 0; i < this.expressions.length; ++i) {
			//const expression_before = JSON.stringify(this.expressions[i]);

			this.expressions[i].alphaReduce(replMap, upper_vars);

			/**
			const expression_after = JSON.stringify(this.expressions[i]);

			if (expression_before !== expression_after) {
				break;
			}
			 **/
		}

		return this;
	}

	print() {
		print(this.toString());
	}
}

export default Application;