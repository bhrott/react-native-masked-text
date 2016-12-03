import BaseMask from './_base.mask';

const PHONE_8_MASK = '9999-9999';
const PHONE_9_MASK = '99999-9999';
const CEL_PHONE_SETTINGS = {
	withDDD: true,
	dddMask: '(99) '
};

export default class CelPhoneMask extends BaseMask {
    static getType() {
        return 'cel-phone';
    }

    getValue(value, settings) {
        let mask = this._getMask(value, settings);
		return this.getVMasker().toPattern(value, mask);
    }

	getRawValue(maskedValue, settings) {
		return super.removeNotNumbers(maskedValue);
	}

    validate(value, settings) {
		let valueToValidate = super.getDefaultValue(value);
		valueToValidate = this.getValue(value, settings);
		
		let mask = this._getMask(value, settings);

        return valueToValidate.length === mask.length;
    }

	_getMask(value, settings) {
		let mergedSettings = super.mergeSettings(CEL_PHONE_SETTINGS, settings);

		let numbers = super.removeNotNumbers(value);
		let mask = PHONE_8_MASK;

		let use9DigitMask = (() => {
			if(mergedSettings.withDDD) {
				let numbersDDD = super.removeNotNumbers(mergedSettings.dddMask);
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

		return mask;
	}
}