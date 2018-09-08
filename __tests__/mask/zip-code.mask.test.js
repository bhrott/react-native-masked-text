import { ZipCodeMask } from '../../lib/masks'

test('getType results zip-code', () => {
    var expected = 'zip-code'
    var received = ZipCodeMask.getType()

    expect(received).toBe(expected)
})

test('11111111 results 11111-111', () => {
    var mask = new ZipCodeMask()
    var expected = '11111-111'
    var received = mask.getValue('11111111')

    expect(received).toBe(expected)
})

test('1111111 results 11111-11', () => {
    var mask = new ZipCodeMask()
    var expected = '11111-11'
    var received = mask.getValue('1111111')

    expect(received).toBe(expected)
})

test('1111111 results 11111-11 and is not valid', () => {
    var mask = new ZipCodeMask()
    var expected = '11111-11'
    var received = mask.getValue('1111111')
    var isValid = mask.validate(received)

    expect(isValid).toBe(false)
})

test('11111111 results 11111-111 and is not valid', () => {
    var mask = new ZipCodeMask()
    var expected = '11111-111'
    var received = mask.getValue('11111111')
    var isValid = mask.validate(received)

    expect(isValid).toBe(true)
})

test('11111111 results 11111-111 and raw value 11111111', () => {
    var mask = new ZipCodeMask()
    var expected = '11111-111'
    var received = mask.getValue('11111111')

    var expectedRawValue = '11111111'
    var receivedRawValue = mask.getRawValue(received)

    expect(received).toBe(expected)
    expect(receivedRawValue).toBe(expectedRawValue)
})

test('getMask returns 99999-999', () => {
    var mask = new ZipCodeMask()

    var expected = '99999-999'
    var received = mask.getMask()

    expect(received).toBe(expected)
})
