import BaseMask from './_base.mask';

export default class OnlyNumbersMask extends BaseMask {
    static getType() {
        return 'only-numbers';
    }

    getValue(value, settings) {
        return this.getVMasker().toNumber(value);
    }

    validate(value, settings) {
        return true;
    }
}