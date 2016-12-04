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
        let mergedSettings = super.mergeSettings(MONEY_MASK_SETTINGS, settings);
        let normalized = super.removeNotNumbers(maskedValue);

        let dotPosition = normalized.length - mergedSettings.precision;
        normalized = this._insert(normalized, dotPosition, '.');

        return Number(normalized);
    }

    validate(value, settings) {
        return true;
    }

    _insert(text, index, string) {
        if (index > 0) {
            return text.substring(0, index) + string + text.substring(index, text.length);
        }
        else {
            return string + text;
        }   
    };
}