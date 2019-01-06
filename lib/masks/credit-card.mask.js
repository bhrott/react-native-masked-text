import BaseMask from './_base.mask'
import CustomMask from './custom.mask'

const CREDIT_CARD_MASKS = {
    'visa-or-mastercard': {
        regular: '9999 9999 9999 9999',
        obfuscated: '9999 **** **** 9999'
    },
    'amex': {
        regular: '9999 999999 99999',
        obfuscated: '9999 ****** 99999'
    },
    'diners': {
        regular: '9999 999999 9999',
        obfuscated: '9999 ****** 9999'
    },
}

const CREDIT_CARD_SETTINGS = {
    obfuscated: false,
    issuer: 'visa-or-mastercard'
}

const MASK_TRANSLATION = {
    '*': val => null
}

export default class CreditCardMask extends BaseMask {
    static getType() {
        return 'credit-card'
    }

    getValue(value, settings) {
        let selectedMask = this.getMask(value, settings)
        return CustomMask.shared.getValue(value, {
            mask: selectedMask,
            translation: MASK_TRANSLATION
        })
    }

    validate(value, settings) {
        if (!!value) {
            let selectedMask = this.getMask(value, settings)
            return value.length === selectedMask.length
        }

        return true
    }

    getRawValue(maskedValue, settings) {
        if (!maskedValue) return []

        return maskedValue.split(' ').map(val => {
            if (!val) return ''

            return val.trim()
        })
    }

    getMask(value, settings) {
        let mergedSettings = super.mergeSettings(CREDIT_CARD_SETTINGS, settings)
        const selectedMask = this._selectMask(mergedSettings.issuer, mergedSettings.obfuscated)

        return selectedMask
    }

    _selectMask(issuer, obfuscated) {
        const maskType = obfuscated ? 'obfuscated' : 'regular'

        return CREDIT_CARD_MASKS[issuer][maskType]
    }
}
