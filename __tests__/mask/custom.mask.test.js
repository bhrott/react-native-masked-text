import { CustomMask } from '../../lib/masks'

test('getType results custom', () => {
    var expected = 'custom'
    var received = CustomMask.getType()

    expect(received).toBe(expected)
})

test('123 with mask AAA9 results ', () => {
    var mask = new CustomMask()
    var expected = ''
    var received = mask.getValue('123', {
        mask: 'AAA9'
    })

    expect(received).toBe(expected)
})

test('TA3 with mask AAA9 results TA', () => {
    var mask = new CustomMask()
    var expected = 'TA'
    var received = mask.getValue('TA3', {
        mask: 'AAA9'
    })

    expect(received).toBe(expected)
})

test('TABC with mask AAA9 results TAB', () => {
    var mask = new CustomMask()
    var expected = 'TAB'
    var received = mask.getValue('TABC', {
        mask: 'AAA9'
    })

    expect(received).toBe(expected)
})

test('1111111 with mask 999-9999 results 111-1111', () => {
    var mask = new CustomMask()
    var expected = '111-1111'
    var received = mask.getValue('1111111', {
        mask: '999-9999'
    })

    expect(received).toBe(expected)
})

test('B45 with mask A#99 results B#45', () => {
    var mask = new CustomMask()
    var expected = 'B#45'
    var received = mask.getValue('B45', {
        mask: 'A#99'
    })

    expect(received).toBe(expected)
})

test('BC45 with mask AS#99 results BC#45', () => {
    var mask = new CustomMask()
    var expected = 'BC#45'
    var received = mask.getValue('BC45', {
        mask: 'AS#99'
    })

    expect(received).toBe(expected)
})

test('B345 with mask AS#99 results B3#45', () => {
    var mask = new CustomMask()
    var expected = 'B3#45'
    var received = mask.getValue('B345', {
        mask: 'AS#99'
    })

    expect(received).toBe(expected)
})

test('DWARF with mask AAAAA and custom validator results DWARF and is valid', () => {
    var mask = new CustomMask()
    var input = 'DWARF'
    var settings = {
        mask: 'AAAAA'
    }
    var validator = (value, settings) => {
        return value === 'DWARF'
    }

    var expected = 'DWARF'
    var received = mask.getValue(input, settings)
    var isValid = mask.validate(input, settings)

    expect(expected).toBe(received)
    expect(isValid).toBe(true)
})

test('ELF with mask AAAAA and custom validator results DWARF and is invalid', () => {
    var mask = new CustomMask()
    var input = 'ELF'
    var settings = {
        mask: 'AAAAA'
    }
    var validator = (value, settings) => {
        return value === 'DWARF'
    }

    var expected = 'ELF'
    var received = mask.getValue(input, settings)
    var isValid = mask.validate(input, settings)

    expect(expected).toBe(received)
    expect(isValid).toBe(true)
})

test('123 with mask 999 results 123 and raw value 123(type Number)', () => {
    var mask = new CustomMask()
    var options = {
        mask: '999',
        getRawValue: function (maskedValue, settings) {
            return Number(maskedValue)
        }
    }

    var expected = '123'
    var received = mask.getValue('123', options)

    var expectedRawValue = 123
    var receivedRawValue = mask.getRawValue(received, options)

    expect(received).toBe(expected)
    expect(receivedRawValue).toBe(expectedRawValue)
})

test('mask with custom translation and match', () => {
    var mask = new CustomMask()
    var options = {
        mask: '999&AAA',
        translation: {
            '&': function (val) {
                return ['#', '.', ':'].indexOf(val) >= 0 ? val : null
            }
        }
    }

    var expected = '123#ABC'
    var received = mask.getValue('123#ABC', options)

    expect(received).toBe(expected)
})

test('mask with custom translation and not match', () => {
    var mask = new CustomMask()
    var options = {
        mask: '999&AAA',
        translation: {
            '&': function (val) {
                return ['#', '.', ':'].indexOf(val) >= 0 ? val : '#'
            }
        }
    }

    var expected = '123#ABC'
    var received = mask.getValue('123|ABC', options)

    expect(received).toBe(expected)
})

test('mask with custom translation and optionals and matching', () => {
    var mask = new CustomMask()
    var options = {
        mask: '999***AAA&',
        translation: {
            '&': function (val) {
                return ['#', '.', ':'].indexOf(val) >= 0 ? val : null
            }
        }
    }

    var expected = '123|% ABC.'
    var received = mask.getValue('123|% ABC.', options)

    expect(received).toBe(expected)
})
