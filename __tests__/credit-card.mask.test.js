import { CreditCardMask } from '../lib/masks';

test('getType results credit-card', () => {
    var expected = 'credit-card';
    var received = CreditCardMask.getType();

    expect(received).toBe(expected);
});

test('1234123412341234 results 1234 1234 1234 1234', () => {
    var mask = new CreditCardMask();
    var expected = '1234 1234 1234 1234';
    var received = mask.getValue('1234123412341234');

    expect(received).toBe(expected);
});

test('1234123412341234 obfuscated true results 1234 **** **** 1234', () => {
    var mask = new CreditCardMask();
    var expected = '1234 **** **** 1234';
    var received = mask.getValue('1234123412341234', {
        obfuscated: true
    });

    expect(received).toBe(expected);
});

test('1234123412341234 obfuscated false results 1234 1234 1234 1234', () => {
    var mask = new CreditCardMask();
    var expected = '1234 1234 1234 1234';
    var received = mask.getValue('1234123412341234', {
        obfuscated: false
    });

    expect(received).toBe(expected);
});