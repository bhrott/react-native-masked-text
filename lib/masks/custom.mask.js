import BaseMask from './_base.mask'

function getDefaultTranslation() {
    return {
        '9': function(val) {
            return val.replace(/[^0-9]+/g, '')
        },
        A: function(val) {
            return val.replace(/[^a-zA-Z]+/g, '')
        },
        S: function(val) {
            return val.replace(/[^a-zA-Z0-9]+/g, '')
        },
        '*': function(val) {
            return val
        }
    }
}

function toPattern(value, mask, translation = DEFAULT_TRANSLATION) {
    let result = ''

    let maskCharIndex = 0
    let valueCharIndex = 0

    while (true) {
        // if mask is ended, break.
        if (maskCharIndex === mask.length) {
            break
        }

        // if value is ended, break.
        if (valueCharIndex === value.length) {
            break
        }

        let maskChar = mask[maskCharIndex]
        let valueChar = value[valueCharIndex]

        // value equals mask, just set
        if (maskChar === valueChar) {
            result += maskChar
            valueCharIndex += 1
            maskCharIndex += 1
            continue
        }

        // apply translator if match
        const translationHandler = translation[maskChar]
        if (translationHandler) {
            // if (translation[maskChar].hasMatch(valueChar)) {
            //     result += valueChar
            //     maskCharIndex += 1
            // }

            result += translationHandler(valueChar) || ''
            maskCharIndex += 1

            valueCharIndex += 1
            continue
        }

        // not masked value, fixed char on mask
        result += maskChar
        maskCharIndex += 1
        continue
    }

    return result
}

const DEFAULT_TRANSLATION = getDefaultTranslation()

export default class CustomMask extends BaseMask {
    static getType() {
        return 'custom'
    }

    static getDefaultTranslation() {
        return getDefaultTranslation()
    }

    static shared = new CustomMask()

    getKeyboardType() {
        return 'default'
    }

    getValue(value, settings) {
        if (value === '') {
            return value
        }
        let { mask } = settings
        let translation = this.mergeSettings(
            DEFAULT_TRANSLATION,
            settings.translation
        )

        var masked = toPattern(value, mask, translation)
        return masked
    }

    getRawValue(maskedValue, settings) {
        if (!!settings && settings.getRawValue) {
            return settings.getRawValue(maskedValue, settings)
        }

        return maskedValue
    }

    validate(value, settings) {
        if (!!settings && settings.validator) {
            return settings.validator(value, settings)
        }

        return true
    }
}
