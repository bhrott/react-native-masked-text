import cardTypes from 'credit-card-type'
import BaseMask from './_base.mask'
import CustomMask from './custom.mask'

const defaultType = { type: 'default', gaps: [ 4, 8, 12 ], lengths: [ 16 ] }

const MASK_TRANSLATION = {
    '*': val => '*'
}

export default class CreditCardMask extends BaseMask {
    static getType() {
        return 'credit-card'
    }

    getValue(value, settings) {
        return CustomMask.shared.getValue(value, {
            mask: this.getMask(value, settings),
            translation: MASK_TRANSLATION
        })
    }

    validate(value) {
        if (!!value) {
            const type = this.getCardType(value)
            return type.lengths.includes(value.length)
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

    getMask(value, settings = {}) {
        const type = this.getCardType(value)
        const length = Math.max(...type.lengths)
        const gaps = type.gaps.map((g, i) => g + i)

        const firstGap = gaps[0]
        const lastGap = gaps[gaps.length - 1]
        return Array.from(new Array(length + gaps.length)).map((_, i) => {
            if (gaps.includes(i)) return ' '
            if (settings.obfuscated && i > firstGap && i < lastGap) return '*'
            return 9
        }).join('')
    }

    getCardType(value) {
        return cardTypes(value)[0] || defaultType
    }
}
