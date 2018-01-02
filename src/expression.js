class Expression {
	constructor(application) {
		this.application = application;
	}

	toString() {
		return this.application.toString();
	}
}

export { Expression };