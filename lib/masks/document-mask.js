import BaseMask from './_base.mask'
import CustomMask from './custom.mask'
import { validateCnpj, CNPJ_MASK } from './cnpj.mask'
import { validateCPF, CPF_MASK } from './cpf.mask'

const customMaskOptions = (value) => { 
    if(value && value.length > 13 && !validateCPF(value)) {
        return { mask: CNPJ_MASK };
    }
    return { mask: CPF_MASK };
}

export default class DocumentMask extends BaseMask {
    static getType() {
        return 'document'
    }

    getValue(value, settings) {
        return CustomMask.shared.getValue(value, customMaskOptions(value))
    }

    getRawValue(maskedValue, settings) {
        return super.removeNotNumbers(maskedValue)
    }

    validate(value, settings) {
        var isEmpty = (value || '').trim().length === 0
        return !isEmpty && (validateCPF(value) || validateCnpj(value))
    }

    getMask(value, settings) {
        return customMaskOptions(value).mask
    }
}
