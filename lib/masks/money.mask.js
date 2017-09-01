import BaseMask from './_base.mask';

const MONEY_MASK_SETTINGS = {
  precision: 2,
  separator: ',',
  delimiter: '.',
  unit: 'R$',
  suffixUnit: '',
  zeroCents: false,
};

export default class MoneyMask extends BaseMask {
  static getType() {
    return 'money';
  }

  getValue(value, settings, oldValue) {
    const mergedSettings = super.mergeSettings(MONEY_MASK_SETTINGS, settings);

    if (mergedSettings.suffixUnit && oldValue && value) {
      // value: 123 R
      // oldValue: 123 R$

      if (value.length == oldValue.length - 1) {
        const cleared = this.removeNotNumbers(value);
        value = cleared.substr(0, cleared.length - 1);
      }
    }

    const masked = this.getVMasker().toMoney(value, mergedSettings);

    return masked;
  }

  getRawValue(maskedValue, settings) {
    const mergedSettings = super.mergeSettings(MONEY_MASK_SETTINGS, settings);
    let normalized = super.removeNotNumbers(maskedValue);

    const dotPosition = normalized.length - mergedSettings.precision;
    normalized = this._insert(normalized, dotPosition, '.');

    return Number(normalized);
  }

  validate(value, settings) {
    return true;
  }

  _insert(text, index, string) {
    if (index > 0) {
      return (
        text.substring(0, index) + string + text.substring(index, text.length)
      );
    }
    return string + text;
  }
}
