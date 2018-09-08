import BaseMask from './_base.mask'
import CustomMask from './custom.mask'

import { CPF_MASK, validateCPF } from './cpf.mask'
import { CNPJ_MASK, validateCnpj } from './cnpj.mask'

export default class CpfCnpjMask extends BaseMask {
    static getType() {
        return 'cpf-cnpj'
    }

    getValue(value, settings) {
        if (this.isCNPJ(value)) {
            return CustomMask.shared.getValue(value, { mask: CNPJ_MASK })
        }

        return CustomMask.shared.getValue(value, { mask: CPF_MASK })
    }

    getRawValue(maskedValue, settings) {
        return super.removeNotNumbers(maskedValue)
    }

    isCNPJ(value) {
        return this.removeNotNumbers(value).length > 11
    }

    validate(value, settings) {
        const length = this.getLength(value)
        const isEmpty = length === 0

        if (isEmpty) {
            return false
        }

        if (this.isCNPJ(length)) {
            return validateCnpj(value)
        }

        return validateCPF(value)
    }

    getMask(value, settings) {
        if (this.isCNPJ(value)) {
            return CNPJ_MASK
        }
        return CPF_MASK
    }
}
