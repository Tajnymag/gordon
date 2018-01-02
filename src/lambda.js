class Lambda {
	constructor(argument, body) {
		this.argument = argument;
		this.body = body;
	}

	toString() {
		return '(lambda ' + this.argument.toString() + ' . ' + this.body.toString() + ')';
	}
}


export { Lambda };