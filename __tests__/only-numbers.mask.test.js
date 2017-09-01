import { OnlyNumbersMask } from '../lib/masks';

test('getType results only-numbers', () => {
  const expected = 'only-numbers';
  const received = OnlyNumbersMask.getType();

  expect(received).toBe(expected);
});

test('abc123 results 123', () => {
  const mask = new OnlyNumbersMask();
  const expected = '123';
  const received = mask.getValue('abc123');

  expect(received).toBe(expected);
});

test('1 results 1', () => {
  const mask = new OnlyNumbersMask();
  const expected = '1';
  const received = mask.getValue('1');

  expect(received).toBe(expected);
});

test('abc results ', () => {
  const mask = new OnlyNumbersMask();
  const expected = '';
  const received = mask.getValue('abc');

  expect(received).toBe(expected);
});

test('1 results 1 and raw value 1', () => {
  const mask = new OnlyNumbersMask();
  const expected = '1';
  const received = mask.getValue('1');

  const expectedRawValue = '1';
  const receivedRawValue = mask.getRawValue(received);

  expect(received).toBe(expected);
  expect(receivedRawValue).toBe(expectedRawValue);
});
