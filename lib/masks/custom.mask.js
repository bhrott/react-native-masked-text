import BaseMask from './_base.mask';

export default class CustomMask extends BaseMask {
    static getType() {
        return 'custom';
    }

    getValue(value, settings) {
        return this.getVMasker().toPattern(value);
    }

    validate(value, settings) {
        if(!!settings && settings.validator) {
            return settings.validator(value, settings);
        }

        return true;
    }
}