import { ZipCodeMask } from '../lib/masks';

test('getType results zip-code', () => {
  const expected = 'zip-code';
  const received = ZipCodeMask.getType();

  expect(received).toBe(expected);
});

test('11111111 results 11111-111', () => {
  const mask = new ZipCodeMask();
  const expected = '11111-111';
  const received = mask.getValue('11111111');

  expect(received).toBe(expected);
});

test('1111111 results 11111-11', () => {
  const mask = new ZipCodeMask();
  const expected = '11111-11';
  const received = mask.getValue('1111111');

  expect(received).toBe(expected);
});

test('1111111 results 11111-11 and is not valid', () => {
  const mask = new ZipCodeMask();
  const expected = '11111-11';
  const received = mask.getValue('1111111');
  const isValid = mask.validate(received);

  expect(isValid).toBe(false);
});

test('11111111 results 11111-111 and is not valid', () => {
  const mask = new ZipCodeMask();
  const expected = '11111-111';
  const received = mask.getValue('11111111');
  const isValid = mask.validate(received);

  expect(isValid).toBe(true);
});

test('11111111 results 11111-111 and raw value 11111111', () => {
  const mask = new ZipCodeMask();
  const expected = '11111-111';
  const received = mask.getValue('11111111');

  const expectedRawValue = '11111111';
  const receivedRawValue = mask.getRawValue(received);

  expect(received).toBe(expected);
  expect(receivedRawValue).toBe(expectedRawValue);
});
