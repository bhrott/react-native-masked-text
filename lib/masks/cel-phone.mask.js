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

		return this.getVMasker().toPattern(value, mask);
    }

    validate(value, settings) {
        return true;
    }
}