import { MoneyMask } from '../../lib/masks'

test('getType results money', () => {
    var expected = 'money'
    var received = MoneyMask.getType()

    expect(received).toBe(expected)
})

test('1 results R$0,01', () => {
    var mask = new MoneyMask()
    var expected = 'R$0,01'
    var received = mask.getValue('1')

    expect(received).toBe(expected)
})

test('111 results R$1,11', () => {
    var mask = new MoneyMask()
    var expected = 'R$1,11'
    var received = mask.getValue('111')

    expect(received).toBe(expected)
})

test('1111 results R$11,11', () => {
    var mask = new MoneyMask()
    var expected = 'R$11,11'
    var received = mask.getValue('1111')

    expect(received).toBe(expected)
})

test('11111 results R$111,11', () => {
    var mask = new MoneyMask()
    var expected = 'R$111,11'
    var received = mask.getValue('11111')

    expect(received).toBe(expected)
})

test('111111 results R$1.111,11', () => {
    var mask = new MoneyMask()
    var expected = 'R$1.111,11'
    var received = mask.getValue('111111')

    expect(received).toBe(expected)
})

test('111111111 results R$1.111.111,11', () => {
    var mask = new MoneyMask()
    var expected = 'R$1.111.111,11'
    var received = mask.getValue('111111111')

    expect(received).toBe(expected)
})

test(' results R$0,00', () => {
    var mask = new MoneyMask()
    var expected = 'R$0,00'
    var received = mask.getValue('')

    expect(received).toBe(expected)
})

test('11111 precision 3 results R$11,111', () => {
    var mask = new MoneyMask()
    var expected = 'R$11,111'
    var received = mask.getValue('11111', {
        precision: 3
    })

    expect(received).toBe(expected)
})

test('111 separator . results R$1.11', () => {
    var mask = new MoneyMask()
    var expected = 'R$1.11'
    var received = mask.getValue('111', {
        separator: '.'
    })

    expect(received).toBe(expected)
})

test('111111 delimiter , results R$1,111,11', () => {
    var mask = new MoneyMask()
    var expected = 'R$1,111,11'
    var received = mask.getValue('111111', {
        delimiter: ','
    })

    expect(received).toBe(expected)
})

test('1 unit US$ results US$0,01', () => {
    var mask = new MoneyMask()
    var expected = 'US$0,01'
    var received = mask.getValue('1', {
        unit: 'US$'
    })

    expect(received).toBe(expected)
})

test('1 suffixUnit $$$ results R$0,01', () => {
    var mask = new MoneyMask()
    var expected = 'R$0,01 $$$'
    var received = mask.getValue('1', {
        suffixUnit: '$$$'
    })

    expect(received).toBe(expected)
})

test('US$ config with value 1234567 results US$12,345.67', () => {
    var mask = new MoneyMask()
    var expected = 'US$12,345.67'
    var received = mask.getValue('1234567', {
        unit: 'US$',
        delimiter: ',',
        separator: '.'
    })

    expect(received).toBe(expected)
})

test('1 results R$0,01 and raw value 0.01', () => {
    var mask = new MoneyMask()
    var expected = 'R$0,01'
    var received = mask.getValue('1')

    var expectedRawValue = 0.01
    var receivedRawValue = mask.getRawValue(received)

    expect(received).toBe(expected)
    expect(receivedRawValue).toBe(expectedRawValue)
})

test('111111 results R$1.111,11 and raw value 1111.11', () => {
    var mask = new MoneyMask()
    var expected = 'R$1.111,11'
    var received = mask.getValue('111111')

    var expectedRawValue = 1111.11
    var receivedRawValue = mask.getRawValue(received)

    expect(received).toBe(expected)
    expect(receivedRawValue).toBe(expectedRawValue)
})

test('111111 delimiter , results R$1,111,11 and raw value 1111.11', () => {
    var mask = new MoneyMask()
    var expected = 'R$1,111,11'
    var received = mask.getValue('111111', {
        delimiter: ','
    })

    var expectedRawValue = 1111.11
    var receivedRawValue = mask.getRawValue(received)

    expect(received).toBe(expected)
    expect(receivedRawValue).toBe(expectedRawValue)
})

test('1 unit US$  results US$ 0,01', () => {
    var mask = new MoneyMask()
    var expected = 'US$ 0,01'
    var received = mask.getValue('1', {
        unit: 'US$ '
    })

    expect(received).toBe(expected)
})

test('number 1.9 must return R$1,90', () => {
    var mask = new MoneyMask()
    const expected = 'R$1,90'
    const received = mask.getValue(1.9)

    expect(received).toBe(expected)
})

test('number 0.05 must return R$0,05', () => {
    var mask = new MoneyMask()
    const expected = 'R$0,05'
    const received = mask.getValue(0.05)

    expect(received).toBe(expected)
})

test('number 0.85 must return R$0,85', () => {
    var mask = new MoneyMask()
    const expected = 'R$0,85'
    const received = mask.getValue(0.85)

    expect(received).toBe(expected)
})

test('number 1111.2 must return R$1.111,20', () => {
    var mask = new MoneyMask()
    const expected = 'R$1.111,20'
    const received = mask.getValue(1111.2)

    expect(received).toBe(expected)
})
