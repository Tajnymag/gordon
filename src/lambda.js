import config from '../config.js';
import { pushUniq, print, cloneMap } from "./utils.js";

class Lambda {
	constructor(argument, body) {
		this.argument = argument;
		this.body = body;
	}

	toString() {
		return '(' + config.LAMBDA_STRING + this.argument + ' . ' + this.body + ')';
	}

	detectVariables(upper_vars = []) {
		const variables = this.argument.split('');
		const updated_upper_vars = pushUniq(upper_vars, variables);

		this.body.detectVariables(updated_upper_vars);
	}

	alphaReduce(replacementMapping = new Map(), upper_vars = []) {
		if (upper_vars.indexOf(this.argument) !== -1) {
			replacementMapping[this.argument] = this.argument + 1;
			this.argument = this.argument + 1;
		}
		let updated_upper_vars = pushUniq(upper_vars, this.argument);
		let updated_replacementMapping = cloneMap(replacementMapping);

		this.body.alphaReduce(updated_replacementMapping, updated_upper_vars);
	}


	print() {
		print(this.toString());
	}
}


export default Lambda;