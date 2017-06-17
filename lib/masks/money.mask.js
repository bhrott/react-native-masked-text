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

    getValue(value, settings, oldValue) {
        let mergedSettings = super.mergeSettings(MONEY_MASK_SETTINGS, settings);

        if (mergedSettings.suffixUnit && oldValue && value) {
            // value: 123 R
            // oldValue: 123 R$

            if (value.length == oldValue.length - 1) {
                let cleared = this.removeNotNumbers(value);
                value = cleared.substr(0, cleared.length - 1);
            }
        }

        let masked = this.getVMasker().toMoney(value, mergedSettings);

        return masked;
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