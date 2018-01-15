import Expression from './expression.js';
import Application from "./application.js";
import Lambda from "./lambda.js";
import Variable from "./variable.js";

const edux_sample = new Expression(
	new Application(
		new Lambda(
			'x',
			new Application(
				new Variable('x'),
				new Variable('x'))
		),
		new Variable('y')
	)
);

// (λ. x (λy. y x) x y) z
const edux_sample_bound = new Application(
	new Lambda('x',
		new Application(
			new Lambda(
				'y',
				new Application(
					new Variable('y'),
					new Variable('x'),
				),
			),
			new Variable('x'),
			new Variable('y'),
		),
	),
	new Variable('z'),
);

// (λx. (λz. x z)) (z g)
const edux_sample_alpha = new Application(
	new Lambda(
		'x',
		new Lambda(
			'z',
			new Application(
				new Variable('x'),
				new Variable('z')
			)
		)
	),
	new Application(
		new Variable('z'),
		new Variable('g')
	)
);

edux_sample.print();
edux_sample.printVariables();

edux_sample_bound.print();
edux_sample_bound.printVariables();

edux_sample_alpha.print();
edux_sample_alpha.alphaReduce();
edux_sample_alpha.print();