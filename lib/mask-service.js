import MaskResolver from './mask-resolver'

export default class MaskService {
    static toMask(type, value, settings) {
        return MaskResolver.resolve(type).getValue(value, settings)
    }

    static toRawValue(type, maskedValue, settings) {
        return MaskResolver.resolve(type).getRawValue(maskedValue, settings)
    }

    static isValid(type, value, settings) {
        return MaskResolver.resolve(type).validate(value, settings)
    }

    static getMask(type, value, settings) {
        return MaskResolver.resolve(type).getMask(value, settings)
    }
}
