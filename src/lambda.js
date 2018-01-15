import config from '../config.js';
import { pushUniq, print, cloneMap, flattenPair, newChar } from "./utils.js";

class Lambda {
	constructor(argument, body) {
		this.argument = argument;
		this.body = body;
	}

	toString() {
		return '(' + config.LAMBDA_STRING + this.argument + ' . ' + this.body + ')';
	}

	freeVariables() {
		let categorized_vars = this.detectVariables();
		return categorized_vars.filter(pair => pair[1] === 'free').map(pair => pair[0]);
	}

	detectVariables(upper_vars = []) {
		const variables = this.argument.split('');
		const updated_upper_vars = pushUniq(upper_vars, variables);

		return flattenPair(this.body.detectVariables(updated_upper_vars));
	}

	printVariables() {
		const varibles = this.detectVariables();

		varibles.forEach(pair => {
			print(pair[0] + ' is ' + pair[1]);
		});
	}

	alphaReduce(replMap = new Map(), upper_vars = []) {
		let copyReplMap = cloneMap(replMap);
		let copy_upper_vars = upper_vars.slice(0);

		if (copy_upper_vars.includes(this.argument)) {
			copyReplMap[this.argument] = newChar(copy_upper_vars, this.argument);
			this.argument = newChar(copy_upper_vars, this.argument);
		}
		let updated_upper_vars = pushUniq(copy_upper_vars, this.argument);

		this.body.alphaReduce(copyReplMap, updated_upper_vars);

		return this;
	}


	print() {
		print(this.toString());
	}
}


export default Lambda;