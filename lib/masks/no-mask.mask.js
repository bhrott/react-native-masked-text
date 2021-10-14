import BaseMask from './_base.mask'

export default class OnlyNumbersMask extends BaseMask {
    static getType() {
        return 'no-mask'
    }

    getValue(value, settings) {
        return String(value)
    }

    getRawValue(maskedValue, settings) {
        return String(maskedValue)
    }

    validate(value, settings) {
        return true
    }

    getMask(value, settings) {
        return ''
    }
}
