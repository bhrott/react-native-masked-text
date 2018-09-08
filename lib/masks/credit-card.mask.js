import BaseMask from './_base.mask'
import CustomMask from './custom.mask'

const CREDIT_CARD_MASK = '9999 9999 9999 9999'
const CREDIT_CARD_OBFUSCATED_MASK = '9999 **** **** 9999'

const CREDIT_CARD_SETTINGS = {
    obfuscated: false
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
        let selectedMask = mergedSettings.obfuscated
            ? CREDIT_CARD_OBFUSCATED_MASK
            : CREDIT_CARD_MASK
        return selectedMask
    }
}
