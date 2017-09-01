import { CnpjMask } from '../lib/masks';

test('getType results cnpj', () => {
  const expected = 'cnpj';
  const received = CnpjMask.getType();

  expect(received).toBe(expected);
});

test('79885262000130 results 79.885.262/0001-30', () => {
  const mask = new CnpjMask();
  const expected = '79.885.262/0001-30';
  const received = mask.getValue('79885262000130');

  expect(received).toBe(expected);
});

test('798852 results 79.885.2', () => {
  const mask = new CnpjMask();
  const expected = '79.885.2';
  const received = mask.getValue('798852');

  expect(received).toBe(expected);
});

test('79885262000130 results 79.885.262/0001-30 and is valid', () => {
  const mask = new CnpjMask();
  const expected = '79.885.262/0001-30';
  const received = mask.getValue('79885262000130');
  const isValid = mask.validate(received);

  expect(received).toBe(expected);
  expect(isValid).toBe(true);
});

test('79885262000140 results 79.885.262/0001-40 and is not valid', () => {
  const mask = new CnpjMask();
  const expected = '79.885.262/0001-40';
  const received = mask.getValue('79885262000140');
  const isValid = mask.validate(received);

  expect(received).toBe(expected);
  expect(isValid).toBe(false);
});

test('7988526200013 results 79.885.262/0001-3 and is not valid', () => {
  const mask = new CnpjMask();
  const expected = '79.885.262/0001-3';
  const received = mask.getValue('7988526200013');
  const isValid = mask.validate(received);

  expect(received).toBe(expected);
  expect(isValid).toBe(false);
});

test('79885262000130 results 79.885.262/0001-30 and raw value 79885262000130', () => {
  const mask = new CnpjMask();
  const expected = '79.885.262/0001-30';
  const received = mask.getValue('79885262000130');

  const expectedRawValue = '79885262000130';
  const receivedRawValue = mask.getRawValue(received);

  expect(received).toBe(expected);
  expect(receivedRawValue).toBe(expectedRawValue);
});
