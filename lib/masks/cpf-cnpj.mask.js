import BaseMask from './_base.mask'
import { CPF_MASK, validateCPF } from './cpf.mask'
import { CNPJ_MASK, validateCnpj } from './cnpj.mask'

export default class CpfCnpjMask extends BaseMask {
    static getType() {
        return 'cpf-cnpj'
    }

    getValue(value, settings) {
        const length = this.getLength(value)
        if (this.isCNPJ(length)) {
            return this.getVMasker().toPattern(value, CNPJ_MASK)
        }

        return this.getVMasker().toPattern(value, CPF_MASK)
    }

    getRawValue(maskedValue, settings) {
        return super.removeNotNumbers(maskedValue)
    }

    getLength(value) {
        return (value || '').trim().replace(/[.\-/]/g, '').length
    }

    isCNPJ(length) {
        return length > 11
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
}
