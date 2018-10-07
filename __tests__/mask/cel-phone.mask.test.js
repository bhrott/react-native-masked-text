import { CelPhoneMask } from '../../lib/masks'

test('getType results cel-phone', () => {
    var expected = 'cel-phone'
    var received = CelPhoneMask.getType()

    expect(received).toBe(expected)
})

test('5188888888 results (51) 8888-8888', () => {
    var mask = new CelPhoneMask()
    var expected = '(51) 8888-8888'
    var received = mask.getValue('5188888888')

    expect(received).toBe(expected)
})

test('51888888888 results (51) 88888-8888', () => {
    var mask = new CelPhoneMask()
    var expected = '(51) 88888-8888'
    var received = mask.getValue('51888888888')

    expect(received).toBe(expected)
})

test('88888888 withDDD=false results 8888-8888', () => {
    var mask = new CelPhoneMask()
    var expected = '8888-8888'
    var received = mask.getValue('88888888', {
        withDDD: false
    })

    expect(received).toBe(expected)
})

test('888888888 withDDD=false results 88888-8888', () => {
    var mask = new CelPhoneMask()
    var expected = '88888-8888'
    var received = mask.getValue('888888888', {
        withDDD: false
    })

    expect(received).toBe(expected)
})

test('12377777777 dddMask=999  results 123 7777-7777', () => {
    var mask = new CelPhoneMask()
    var expected = '123 7777-7777'
    var received = mask.getValue('12377777777', {
        dddMask: '999 '
    })

    expect(received).toBe(expected)
})

test('123777777777 dddMask=999  results 123 77777-7777', () => {
    var mask = new CelPhoneMask()
    var expected = '123 77777-7777'
    var received = mask.getValue('123777777777', {
        dddMask: '999 '
    })

    expect(received).toBe(expected)
})

test('123123 is not valid', () => {
    var mask = new CelPhoneMask()
    var expected = false
    var received = mask.validate('123123')

    expect(received).toBe(expected)
})

test('5188888888 is valid', () => {
    var mask = new CelPhoneMask()
    var isValid = mask.validate('5188888888')

    expect(isValid).toBe(true)
})

test('123777777777 dddMask=999  is valid', () => {
    var mask = new CelPhoneMask()
    var isValid = mask.validate('123777777777', {
        dddMask: '999 '
    })

    expect(isValid).toBe(true)
})

test('1237777777 dddMask=999  is not valid', () => {
    var mask = new CelPhoneMask()
    var isValid = mask.validate('1237777777', {
        dddMask: '999 '
    })

    expect(isValid).toBe(false)
})

test('5188888888 results (51) 8888-8888 and raw value 5188888888', () => {
    var mask = new CelPhoneMask()
    var expected = '(51) 8888-8888'
    var received = mask.getValue('5188888888')

    var expectedRawValue = '5188888888'
    var receivedRawValue = mask.getRawValue(received)

    expect(received).toBe(expected)
    expect(receivedRawValue).toBe(expectedRawValue)
})

test('123777777777 dddMask=999  results 123 77777-7777 and raw value 123777777777', () => {
    var mask = new CelPhoneMask()
    var expected = '123 77777-7777'
    var received = mask.getValue('123777777777', {
        dddMask: '999 '
    })

    var expectedRawValue = '123777777777'
    var receivedRawValue = mask.getRawValue(received, {
        dddMask: '999 '
    })

    expect(received).toBe(expected)
    expect(receivedRawValue).toBe(expectedRawValue)
})

test('getMask for 99999999 returns (99) 9999-9999', () => {
    var mask = new CelPhoneMask()
    var expected = '(99) 9999-9999'
    var received = mask.getMask('99999999')

    expect(received).toBe(expected)
})

test('getMask for 9988887777 returns (99) 9999-9999', () => {
    var mask = new CelPhoneMask()
    var expected = '(99) 9999-9999'
    var received = mask.getMask('9988887777')

    expect(received).toBe(expected)
})

test('getMask for 99888877776 returns (99) 99999-9999', () => {
    var mask = new CelPhoneMask()
    var expected = '(99) 99999-9999'
    var received = mask.getMask('99888877776')

    expect(received).toBe(expected)
})

test('getMask for 999998888 without DDD returns 99999-9999', () => {
    var mask = new CelPhoneMask()
    var expected = '99999-9999'
    var received = mask.getMask('999998888', { withDDD: false })

    expect(received).toBe(expected)
})

test('getValue for (12) 1234-56789 must return (12) 12345-6789', () => {
    var mask = new CelPhoneMask()
    var expected = '(12) 12345-6789'
    var received = mask.getValue('(12) 1234-56789')

    expect(received).toBe(expected)
})
