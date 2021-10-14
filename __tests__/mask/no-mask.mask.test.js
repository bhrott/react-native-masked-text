import { NoMask } from '../../lib/masks'

test('getType results no-mask', () => {
    var expected = 'no-mask'
    var received = NoMask.getType()

    expect(received).toBe(expected)
})

test('abc123$%.,* results abc123$%.,* and raw value abc123$%.,*', () => {
    var mask = new NoMask()
    var expected = 'abc123$%.,*'
    var received = mask.getValue('abc123$%.,*')

    var expectedRawValue = 'abc123$%.,*'
    var receivedRawValue = mask.getRawValue(received)

    expect(received).toBe(expected)
    expect(receivedRawValue).toBe(expectedRawValue)
})
