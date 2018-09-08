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

test('getMask for 12345678901 returns 999.999.999-99', () => {
    var mask = new CpfCnpjMask()
    var expected = '999.999.999-99'
    var received = mask.getMask('12345678901')

    expect(received).toBe(expected)
})

test('getMask for 123456789010 returns 99.999.999/9999-99', () => {
    var mask = new CpfCnpjMask()
    var expected = '99.999.999/9999-99'
    var received = mask.getMask('123456789010')

    expect(received).toBe(expected)
})
