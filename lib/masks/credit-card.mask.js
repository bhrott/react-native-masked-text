import BaseMask from './_base.mask';

const CREDIT_CARD_MASK = '9999 9999 9999 9999';
const CREDIT_CARD_OBFUSCATED_MASK = '9999 **** **** 9999';

const CREDIT_CARD_SETTINGS = {
  obfuscated: false,
};

export default class CreditCardMask extends BaseMask {
  static getType() {
    return 'credit-card';
  }

  getValue(value, settings) {
    const selectedMask = this._getMask(settings);
    return this.getVMasker().toPattern(value, selectedMask);
  }

  validate(value, settings) {
    if (value) {
      const selectedMask = this._getMask(settings);
      return value.length === selectedMask.length;
    }

    return true;
  }

  getRawValue(maskedValue, settings) {
    if (!maskedValue) return [];

    return maskedValue.split(' ').map(val => {
      if (!val) return '';

      return val.trim();
    });
  }

  _getMask(settings) {
    const mergedSettings = super.mergeSettings(CREDIT_CARD_SETTINGS, settings);
    const selectedMask = mergedSettings.obfuscated
      ? CREDIT_CARD_OBFUSCATED_MASK
      : CREDIT_CARD_MASK;
    return selectedMask;
  }
}
