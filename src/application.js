class Application {
	constructor(...expressions) {
		this.expressions = expressions;
	}

	toString() {
		let output = '(';
		for (let i = 0; i<this.expressions.length; ++i) {
			output += this.expressions[i];

			if (i < this.expressions.length - 1) {
				output += ' ';
			}
		}
		output += ')';

		return output;
	}
}

export { Application };