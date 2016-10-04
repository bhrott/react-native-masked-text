import {TextInputMaskBase} from './text-input-base';

var VMasker = require('vanilla-masker');

export class TextInputMaskMoney extends TextInputMaskBase {
	constructor(props) {
		super(props);

		this._maskOptions = {
			precision: props.precision === undefined ? 2 : props.precision,
			separator: props.separator || ',',
			delimiter: props.delimiter || '.',
			unit: props.unit || 'R$',
			suffixUnit: props.suffixUnit || '',
			zeroCents: props.zeroCents === undefined ? false : props.zeroCents
		};

		this.state = {
			value: this.getMaskedValue(props.value || '')
		};
	}

	getMaskedValue(value) {
		return VMasker.toMoney(value, this._maskOptions);
	}

	getKeyboardType() {
		return 'numeric';
	}
}
