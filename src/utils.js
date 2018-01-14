import config from '../config.js';

function print(input) {
	switch (config.OUTPUT_METHOD) {
		case 'WINDOW':
			stdebug(input);
			break;
		default:
		case 'CONSOLE':
			console.log(input);
			break;
	}
}

function stdebug(input) {
	const consoleEl = document.getElementById('debug_console');

	if (consoleEl != null) {
		consoleEl.innerHTML += input + '\n';
	} else {
		const newConsoleEl = document.createElement('pre');
		newConsoleEl.setAttribute('id', 'debug_console');
		document.body.appendChild(newConsoleEl);
		stdebug(input);
	}
}

function pushUniq(to_array, what_array) {
	let updated_to_array = to_array.slice(0);

	if (what_array === undefined) {
		return updated_to_array;
	}

	for (let i = 0; i < what_array.length; ++i) {
		if (!updated_to_array.includes(what_array[i])) {
			updated_to_array.push(what_array[i]);
		}
	}
	return updated_to_array;
}

function cloneMap(map_to_copy = new Map()) {
	let new_map = new Map();

	for (let key in map_to_copy) {
		new_map[key] = map_to_copy[key];
	}

	return new_map;
}

export { print, pushUniq, cloneMap };