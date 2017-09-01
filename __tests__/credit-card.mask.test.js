import { CreditCardMask } from '../lib/masks';

test('getType results credit-card', () => {
  const expected = 'credit-card';
  const received = CreditCardMask.getType();

  expect(received).toBe(expected);
});

test('1234123412341234 results 1234 1234 1234 1234', () => {
  const mask = new CreditCardMask();
  const expected = '1234 1234 1234 1234';
  const received = mask.getValue('1234123412341234');

  expect(received).toBe(expected);
});

test('1234123412341234 obfuscated true results 1234 **** **** 1234', () => {
  const mask = new CreditCardMask();
  const expected = '1234 **** **** 1234';
  const received = mask.getValue('1234123412341234', {
    obfuscated: true,
  });

  expect(received).toBe(expected);
});

test('1234123412341234 obfuscated false results 1234 1234 1234 1234', () => {
  const mask = new CreditCardMask();
  const expected = '1234 1234 1234 1234';
  const received = mask.getValue('1234123412341234', {
    obfuscated: false,
  });

  expect(received).toBe(expected);
});

test('1234123412341234 obfuscated false results 1234 1234 1234 1234 and raw value [1234, 1234, 1234, 1234]', () => {
  const mask = new CreditCardMask();
  const options = {
    obfuscated: false,
  };

  const expected = '1234 1234 1234 1234';
  const received = mask.getValue('1234123412341234', options);

  const expectedRawValue = ['1234', '1234', '1234', '1234'];
  const receivedRawValue = mask.getRawValue(received, options);

  expect(received).toBe(expected);

  expectedRawValue.forEach((val, index) => {
    expect(val).toBe(receivedRawValue[index]);
  });
});

test('1234123412341234 obfuscated true results 1234 **** **** 1234 and raw value [1234, ****, ****, 1234]', () => {
  const mask = new CreditCardMask();
  const options = {
    obfuscated: true,
  };

  const expected = '1234 **** **** 1234';
  const received = mask.getValue('1234123412341234', options);

  const expectedRawValue = ['1234', '****', '****', '1234'];
  const receivedRawValue = mask.getRawValue(received, options);

  expect(received).toBe(expected);

  expectedRawValue.forEach((val, index) => {
    expect(val).toBe(receivedRawValue[index]);
  });
});
