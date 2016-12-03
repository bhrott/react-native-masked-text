import BaseMask from './_base.mask';

const MONEY_MASK_SETTINGS = {
	precision: 2,
	separator: ',',
	delimiter: '.',
	unit: 'R$',
	suffixUnit: '',
	zeroCents: false
};

export default class MoneyMask extends BaseMask {
    static getType() {
        return 'money';
    }

    getValue(value, settings) {
        let mergedSettings = super.mergeSettings(MONEY_MASK_SETTINGS, settings);
		return this.getVMasker().toMoney(value, mergedSettings);
    }

    getRawValue(maskedValue, settings) {
        var normalized = maskedValue.replace(/[^0-9]\.\,+/g, '');
    }

    validate(value, settings) {
        return true;
    }
}