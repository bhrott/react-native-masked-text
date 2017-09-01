import BaseMask from './_base.mask';

const PHONE_8_MASK = '9999-9999';
const PHONE_9_MASK = '99999-9999';
const CEL_PHONE_SETTINGS = {
  withDDD: true,
  dddMask: '(99) ',
};

export default class CelPhoneMask extends BaseMask {
  static getType() {
    return 'cel-phone';
  }

  getValue(value, settings) {
    const mask = this._getMask(value, settings);
    return this.getVMasker().toPattern(value, mask);
  }

  getRawValue(maskedValue, settings) {
    return super.removeNotNumbers(maskedValue);
  }

  validate(value, settings) {
    let valueToValidate = super.getDefaultValue(value);
    valueToValidate = this.getValue(value, settings);

    const mask = this._getMask(value, settings);

    return valueToValidate.length === mask.length;
  }

  _getMask(value, settings) {
    const mergedSettings = super.mergeSettings(CEL_PHONE_SETTINGS, settings);

    const numbers = super.removeNotNumbers(value);
    let mask = PHONE_8_MASK;

    const use9DigitMask = (() => {
      if (mergedSettings.withDDD) {
        const numbersDDD = super.removeNotNumbers(mergedSettings.dddMask);
        const remainingValueNumbers = numbers.substr(numbersDDD.length);
        return remainingValueNumbers.length >= 9;
      }
      return numbers.length >= 9;
    })();

    if (use9DigitMask) {
      mask = PHONE_9_MASK;
    }

    if (mergedSettings.withDDD) {
      mask = `${mergedSettings.dddMask}${mask}`;
    }

    return mask;
  }
}
