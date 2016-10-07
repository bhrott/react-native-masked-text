import {ToolBoxService} from './toolbox-service';
var VMasker = require('./internal-dependencies/vanilla-masker');

const CPF_MASK = '999.999.999-99';
const ZIP_CODE_MASK = '99999-999';
const MONEY_MASK = {
	precision: 2,
	separator: ',',
	delimiter: '.',
	unit: 'R$',
	suffixUnit: '',
	zeroCents: false
};

export class MaskService {
	toCpf(value) {
		return VMasker.toPattern(value, CPF_MASK);
	}

	toMoney(value, settings) {
		let $settings = ToolBoxService.mergeOptions(MONEY_MASK, settings);
		return VMasker.toMoney(value, $settings);
	}

	toZipCode(value) {
		return VMasker.toPattern(value, ZIP_CODE_MASK);
	}

	toNumber(value) {
		return VMasker.toNumber(value);
	}

	toCelPhone(value) {
		let numbers = value.replace(/[^0-9\.]+/g, '');
		let mask = '(99) 9999-9999';

		if(numbers.length > 10) {
			mask = '(99) 99999-9999';
		}

		return VMasker.toPattern(value, mask);
	}

	toCustom(value, settings) {
		return VMasker.toPattern(value, settings.mask);
	}
}
