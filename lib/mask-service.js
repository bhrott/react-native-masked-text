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

const PHONE_8_MASK = '9999-9999';
const PHONE_9_MASK = '99999-9999';
const CEL_PHONE_SETTINGS = {
	withDDD: true,
	dddMask: '(99) '
};

export class MaskService {
	toCpf(value) {
		return VMasker.toPattern(value, CPF_MASK);
	}

	toMoney(value, settings) {
		let mergedSettings = ToolBoxService.mergeOptions(MONEY_MASK, settings);
		return VMasker.toMoney(value, mergedSettings);
	}

	toZipCode(value) {
		return VMasker.toPattern(value, ZIP_CODE_MASK);
	}

	toNumber(value) {
		return VMasker.toNumber(value);
	}

	toCelPhone(value, settings) {
		let mergedSettings = ToolBoxService.mergeOptions(CEL_PHONE_SETTINGS, settings);

		let numbers = ToolBoxService.removeNotNumbers(value);
		let mask = PHONE_8_MASK;

		let use9DigitMask = (() => {
			if(mergedSettings.withDDD) {
				let numbersDDD = ToolBoxService.removeNotNumbers(mergedSettings.dddMask);
				let remainingValueNumbers = numbers.substr(numbersDDD.length);
				return remainingValueNumbers.length >= 9;
			}
			else {
				return numbers.length >= 9;
			}
		})();
			
		if(use9DigitMask) {
			mask = PHONE_9_MASK;
		}

		if(mergedSettings.withDDD) {
			mask = `${mergedSettings.dddMask}${mask}`;
		}

		return VMasker.toPattern(value, mask);
	}

	toCustom(value, settings) {
		return VMasker.toPattern(value, settings.mask);
	}
}
