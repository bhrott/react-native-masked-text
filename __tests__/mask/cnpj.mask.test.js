import { CnpjMask } from '../../lib/masks'

test('getType results cnpj', () => {
    var expected = 'cnpj'
    var received = CnpjMask.getType()

    expect(received).toBe(expected)
})

test('79885262000130 results 79.885.262/0001-30', () => {
    var mask = new CnpjMask()
    var expected = '79.885.262/0001-30'
    var received = mask.getValue('79885262000130')

    expect(received).toBe(expected)
})

test('798852 results 79.885.2', () => {
    var mask = new CnpjMask()
    var expected = '79.885.2'
    var received = mask.getValue('798852')

    expect(received).toBe(expected)
})

test('79885262000130 results 79.885.262/0001-30 and is valid', () => {
    var mask = new CnpjMask()
    var expected = '79.885.262/0001-30'
    var received = mask.getValue('79885262000130')
    var isValid = mask.validate(received)

    expect(received).toBe(expected)
    expect(isValid).toBe(true)
})

test('79885262000140 results 79.885.262/0001-40 and is not valid', () => {
    var mask = new CnpjMask()
    var expected = '79.885.262/0001-40'
    var received = mask.getValue('79885262000140')
    var isValid = mask.validate(received)

    expect(received).toBe(expected)
    expect(isValid).toBe(false)
})

test('7988526200013 results 79.885.262/0001-3 and is not valid', () => {
    var mask = new CnpjMask()
    var expected = '79.885.262/0001-3'
    var received = mask.getValue('7988526200013')
    var isValid = mask.validate(received)

    expect(received).toBe(expected)
    expect(isValid).toBe(false)
})

test('79885262000130 results 79.885.262/0001-30 and raw value 79885262000130', () => {
    var mask = new CnpjMask()
    var expected = '79.885.262/0001-30'
    var received = mask.getValue('79885262000130')

    var expectedRawValue = '79885262000130'
    var receivedRawValue = mask.getRawValue(received)

    expect(received).toBe(expected)
    expect(receivedRawValue).toBe(expectedRawValue)
})

test('empty cnpj is invalid', () => {
    var mask = new CnpjMask()
    var received = mask.validate('', {})

    expect(received).toBeFalsy()
})

test('getMask returns 99.999.999/9999-99', () => {
    var mask = new CnpjMask()
    var expected = '99.999.999/9999-99'
    var received = mask.getMask()

    expect(expected).toBe(received)
})
