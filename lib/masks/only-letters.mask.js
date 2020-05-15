import BaseMask from './_base.mask'

export default class OnlyLettersMask extends BaseMask {
    static getType() {
        return 'only-letters'
    }

    getValue(value, settings) {
        return this.removeNotLetters(String(value))
    }

    getRawValue(maskedValue, settings) {
        return super.removeNotLetters(String(maskedValue))
    }

    validate(value, settings) {
        return true
    }

    getMask(value, settings) {
        return ''
    }
}
