import {TextInputMaskBase} from './text-input-base';

var VMasker = require('vanilla-masker');

export class TextInputMaskCelPhone extends TextInputMaskBase {
	constructor(props) {
		super(props);

		this.state = {
			value: this.getMaskedValue(props.value || '')
		};
	}

	getMaskedValue(value) {
		let mask = this._resolveMaskFor(value);
		return VMasker.toPattern(value, mask);
	}

	getKeyboardType() {
		return 'numeric';
	}

	_resolveMaskFor(value) {
		let numbers = value.replace(/[^0-9\.]+/g, '');

		if(numbers.length > 10) {
			return '(99) 99999-9999';
		}
		else {
			return '(99) 9999-9999';
		}
	}
}
