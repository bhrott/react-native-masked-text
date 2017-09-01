import TinyMask from 'tinymask';
import BaseMask from './_base.mask';

const DEFAULT_TRANSLATION = {
  9(val) {
    return val.replace(/[^0-9]+/g, '');
  },
  A(val) {
    return val.replace(/[^a-zA-Z]+/g, '');
  },
  S(val) {
    return val.replace(/[^a-zA-Z0-9]+/g, '');
  },
  '*': function (val) {
    return val;
  },
};

const invalidValues = [null, undefined, ''];

export default class CustomMask extends BaseMask {
  static getType() {
    return 'custom';
  }

  getKeyboardType() {
    return 'default';
  }

  getValue(value, settings) {
    if (value === '') {
      return value;
    }
    const { mask } = settings;
    const translation = this.mergeSettings(
      DEFAULT_TRANSLATION,
      settings.translation,
    );

    const masked = new TinyMask(mask, { translation }).mask(
      this.removeWhiteSpaces(value),
    );
    return masked;
  }

  getRawValue(maskedValue, settings) {
    if (!!settings && settings.getRawValue) {
      return settings.getRawValue(maskedValue, settings);
    }

    return maskedValue;
  }

  validate(value, settings) {
    if (!!settings && settings.validator) {
      return settings.validator(value, settings);
    }

    return true;
  }
}
