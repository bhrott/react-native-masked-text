import {TextInputMaskBase} from './text-input-base';

var VMasker = require('vanilla-masker');

export class TextInputMaskOnlyNumbers extends TextInputMaskBase {
	constructor(props) {
		super(props);

		this.state = {
			value: this.getMaskedValue(props.value || '')
		};
	}

	getMaskedValue(value) {
		return VMasker.toNumber(value);
	}

	getKeyboardType() {
		return 'numeric';
	}
}
