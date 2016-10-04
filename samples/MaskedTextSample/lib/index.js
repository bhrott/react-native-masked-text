import React, { Component } from 'react';

import {TextInputMaskBase} from './text-input-base';

import {TextInputMaskZipCode} from './text-input-zip-code';
import {TextInputMaskCpf} from './text-input-cpf';
import {TextInputMaskMoney} from './text-input-money';
import {TextInputMaskOnlyNumbers} from './text-input-numbers';

export class TextInputMask extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		switch (this.props.type) {
			case 'zip-code': return (<TextInputMaskZipCode {...this.props} />);
			case 'cpf': return (<TextInputMaskCpf {...this.props} />);
			case 'money': return (<TextInputMaskMoney {...this.props} />);
			case 'only-numbers': return (<TextInputMaskOnlyNumbers {...this.props} />);
			default: return null;
		}
	}
}
