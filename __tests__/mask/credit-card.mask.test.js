import { CreditCardMask } from '../../lib/masks'

const testCards = {
    visa: '4263982640269299',
    mastercard: '5425233430109903',
    amex: '374245455400126',
    maestro: '6759649826438453'
}

test('getType results credit-card', () => {
    var expected = 'credit-card'
    var received = CreditCardMask.getType()

    expect(received).toBe(expected)
})

test('basic formatting', () => {
    var mask = new CreditCardMask()
    var expected = '4263 9826 4026 9299'
    var received = mask.getValue(testCards.visa)

    expect(received).toBe(expected)
})

test('obfuscated formatting', () => {
    var mask = new CreditCardMask()
    var expected = '4263 **** **** 9299'
    var received = mask.getValue(testCards.visa, {
        obfuscated: true
    })

    expect(received).toBe(expected)
})

test('correct raw value of basic formatting', () => {
    var mask = new CreditCardMask()
    var received = mask.getValue(testCards.visa)

    var expectedRawValue = ['4263', '9826', '4026', '9299']
    var receivedRawValue = mask.getRawValue(received)

    expectedRawValue.forEach((val, index) => {
        expect(val).toBe(receivedRawValue[index])
    })
})

test('correct raw value of obfuscated formatting', () => {
    var mask = new CreditCardMask()
    var options = {
        obfuscated: true
    }

    var received = mask.getValue(testCards.visa, options)

    var expectedRawValue = ['4263', '****', '****', '9299']
    var receivedRawValue = mask.getRawValue(received, options)

    expectedRawValue.forEach((val, index) => {
        expect(val).toBe(receivedRawValue[index])
    })
})

test('returns correct default regular mask', () => {
    var mask = new CreditCardMask()
    var expected = '9999 9999 9999 9999'
    var received = mask.getMask()

    expect(received).toBe(expected)
})

test('returns correct default obfuscated mask', () => {
    var mask = new CreditCardMask()
    var expected = '9999 **** **** 9999'
    var received = mask.getMask(null, { obfuscated: true })

    expect(received).toBe(expected)
})

test('basic formatting of amex card', () => {
    var mask = new CreditCardMask()
    var expected = '3742 454554 00126'
    var received = mask.getValue(testCards.amex)

    expect(received).toBe(expected)
})

test('obfuscated formatting of amex card', () => {
    var mask = new CreditCardMask()
    var expected = '3742 ****** 00126'
    var received = mask.getValue(testCards.amex, { obfuscated: true })

    expect(received).toBe(expected)
})

test('basic formatting of mastercard card', () => {
    var mask = new CreditCardMask()
    var expected = '5425 2334 3010 9903'
    var received = mask.getValue(testCards.mastercard)

    expect(received).toBe(expected)
})

test('basic formatting of maestro card', () => {
    var mask = new CreditCardMask()
    var expected = '6759 6498 2643 8453'
    var received = mask.getValue(testCards.maestro)

    expect(received).toBe(expected)
})
