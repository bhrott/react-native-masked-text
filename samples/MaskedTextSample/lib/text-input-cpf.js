import {TextInputMaskBase} from './text-input-base';

var VMasker = require('vanilla-masker');

export class TextInputMaskCpf extends TextInputMaskBase {
	constructor(props) {
		super(props);

		this._mask = '999.999.999-99';
		this.state = {
			value: this.getMaskedValue(props.value || '')
		};
	}

	getMaskedValue(value) {
		return VMasker.toPattern(value, this._mask);
	}

	getKeyboardType() {
		return 'numeric';
	}
}
