import {TextInputMaskBase} from './text-input-base';

var VMasker = require('vanilla-masker');

export class TextInputMaskCustom extends TextInputMaskBase {
	constructor(props) {
		super(props);

		this._mask = this.props.mask;
		this.state = {
			value: this.getMaskedValue(props.value || '')
		};
	}

	getMaskedValue(value) {
		return VMasker.toPattern(value, this._mask);
	}
}
