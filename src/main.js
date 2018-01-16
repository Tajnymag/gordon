import evaluate from './evaluate.js';
import { numberOfLines } from "./utils.js";

const inputFormEl = document.getElementById('main_input');
const evaluateBtn = document.getElementById('evaluate_btn');

evaluateBtn.onclick = (e) => {
	evaluate(inputFormEl.value);
};

inputFormEl.onkeydown = function (event) {
	if (event.keyCode === 9) {
		var v = this.value, s = this.selectionStart, e = this.selectionEnd;
		this.value = v.substring(0, s) + '\t' + v.substring(e);
		this.selectionStart = this.selectionEnd = s + 1;
		return false;
	}
};

inputFormEl.value = `new Expression(
	new Application(
		new Lambda(
			'x',
			new Application(
				new Variable('x'),
				new Variable('x'))
		),
		new Variable('y')
	)
);`;
inputFormEl.rows = numberOfLines(inputFormEl.value);