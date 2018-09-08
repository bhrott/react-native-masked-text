import { CpfCnpjMask } from '../../lib/masks'

test('getType results cpf-cnpj', () => {
    var expected = 'cpf-cnpj'
    var received = CpfCnpjMask.getType()

    expect(received).toBe(expected)
})

test('01234567891 results in cpf format', () => {
    var mask = new CpfCnpjMask()
    var expected = '012.345.678-91'
    var received = mask.getValue('01234567891')

    expect(received).toBe(expected)
})

test('79885262000130 results in cnpj format', () => {
    var mask = new CpfCnpjMask()
    var expected = '79.885.262/0001-30'
    var received = mask.getValue('79885262000130')

    expect(received).toBe(expected)
})
