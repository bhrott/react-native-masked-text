import { CpfMask } from '../lib/masks';

test('getType results cpf', () => {
  const expected = 'cpf';
  const received = CpfMask.getType();

  expect(received).toBe(expected);
});

test('12312312356 results 123.123.123-56', () => {
  const mask = new CpfMask();
  const expected = '123.123.123-56';
  const received = mask.getValue('12312312356');

  expect(received).toBe(expected);
});

test('123123 results 123.123', () => {
  const mask = new CpfMask();
  const expected = '123.123';
  const received = mask.getValue('123123');

  expect(received).toBe(expected);
});

test('07833823678 results 078.338.236-78 and is valid', () => {
  const mask = new CpfMask();
  const expected = '078.338.236-78';
  const received = mask.getValue('07833823678');
  const isValid = mask.validate(received);

  expect(received).toBe(expected);
  expect(isValid).toBe(true);
});

test('11111111111 results 111.111.111-11 and is not valid', () => {
  const mask = new CpfMask();
  const expected = '111.111.111-11';
  const received = mask.getValue('11111111111');
  const isValid = mask.validate(received);

  expect(received).toBe(expected);
  expect(isValid).toBe(false);
});

test('1234567890 results 123.456.789-0 and is not valid', () => {
  const mask = new CpfMask();
  const expected = '123.456.789-0';
  const received = mask.getValue('1234567890');
  const isValid = mask.validate(received);

  expect(received).toBe(expected);
  expect(isValid).toBe(false);
});

test('12312312356 results 123.123.123-56 and raw value 12312312356', () => {
  const mask = new CpfMask();
  const expected = '123.123.123-56';
  const received = mask.getValue('12312312356');

  const expectedRawValue = '12312312356';
  const receivedRawValue = mask.getRawValue(received);

  expect(received).toBe(expected);
  expect(receivedRawValue).toBe(expectedRawValue);
});
