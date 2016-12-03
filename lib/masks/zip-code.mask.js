import BaseMask from './_base.mask';
const ZIP_CODE_MASK = '99999-999';

export default class ZipCodeMask extends BaseMask {
    static getType() {
        return 'zip-code';
    }

    getValue(value, settings) {
        return this.getVMasker().toPattern(value, ZIP_CODE_MASK);
    }

    getRawValue(maskedValue, settings) {
        return super.removeNotNumbers(maskedValue);
    }

    validate(value, settings) {
        if(!!value) {
            return value.length === ZIP_CODE_MASK.length;
        }

        return true;
    }
}