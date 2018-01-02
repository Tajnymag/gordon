import {Expression} from './expression.js';
import {Application} from "./application.js";
import {Lambda} from "./lambda.js";
import {Variable} from "./variable.js";

window.expression = new Expression(
	new Application(
		new Lambda('x',
			new Application(
				new Variable('x'),
				new Variable('x'))
		),
		new Variable('y')
	)
);

console.log(expression.toString());