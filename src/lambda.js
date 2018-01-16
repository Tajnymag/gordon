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
		let copy_upper_vars = upper_vars; // schválně ponechána reference
		let argument_tmp = this.argument.split('');

		for (let i = 0; i < argument_tmp.length; ++i) {
			if (copy_upper_vars.includes(argument_tmp[i])) {
				const new_name = newChar(copy_upper_vars, argument_tmp[i]);

				copyReplMap[argument_tmp[i]] = new_name;
				argument_tmp[i] = new_name;

				copy_upper_vars.push(argument_tmp[i]);
			}
		}
		this.argument = argument_tmp.join('');

		this.body.alphaReduce(copyReplMap, copy_upper_vars);

		return this;
	}


	print() {
		print(this.toString());
	}
}


export default Lambda;