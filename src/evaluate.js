import { print } from './utils.js';

import Expression from './expression.js';
import Application from "./application.js";
import Lambda from "./lambda.js";
import Variable from "./variable.js";

function evaluate (input_text) {
	const expression = eval(input_text);

	print('// Expression:');
	expression.print();

	print('// Variables:');
	expression.printVariables();

	print('// Alpha Reduction:');
	expression.alphaReduce();
	expression.print();
	print('');
}

export default evaluate;