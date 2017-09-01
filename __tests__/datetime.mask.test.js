import { DatetimeMask } from '../lib/masks';

const moment = require('moment');

function compareMomentObj(dateTimeA, dateTimeB) {
  const momentA = moment(dateTimeA, 'DD/MM/YYYY');
  const momentB = moment(dateTimeB, 'DD/MM/YYYY');
  if (momentA > momentB) return 1;
  else if (momentA < momentB) return -1;
  return 0;
}

test('getType results datetime', () => {
  const expected = 'datetime';
  const received = DatetimeMask.getType();

  expect(received).toBe(expected);
});

test('01011990174030 with format DD/MM/YYYY HH:mm:ss results 01/01/1990 17:40:30', () => {
  const mask = new DatetimeMask();
  const expected = '01/01/1990 17:40:30';
  const received = mask.getValue('01011990174030');

  expect(received).toBe(expected);
});

test('01011990174030 with format DD-MM-YYYY HH:mm:ss results 01-01-1990 17:40:30', () => {
  const mask = new DatetimeMask();
  const expected = '01-01-1990 17:40:30';
  const received = mask.getValue('01011990174030', {
    format: 'DD-MM-YYYY HH:mm:ss',
  });

  expect(received).toBe(expected);
});

test('01011990 with format DD-MM-YYYY results 01-01-1990', () => {
  const mask = new DatetimeMask();
  const expected = '01-01-1990';
  const received = mask.getValue('01011990', {
    format: 'DD-MM-YYYY HH:mm:ss',
  });

  expect(received).toBe(expected);
});

test('191050 with format HH:mm:ss results 19:10:50 and is valid', () => {
  const mask = new DatetimeMask();
  const input = '191050';
  const settings = {
    format: 'HH:mm:ss',
  };

  const expected = '19:10:50';
  const received = mask.getValue(input, settings);
  const isValid = mask.validate(input, settings);

  expect(received).toBe(expected);
  expect(isValid).toBe(true);
});

test('99999999 with format DD/MM/YYYY results 99/99/9999 and is invalid', () => {
  const mask = new DatetimeMask();
  const input = '99999999';
  const settings = {
    format: 'DD/MM/YYYY',
  };

  const expected = '99/99/9999';
  const received = mask.getValue(input, settings);
  const isValid = mask.validate(input, settings);

  expect(received).toBe(expected);
  expect(isValid).toBe(false);
});

test('01011990174030 with format DD/MM/YYYY HH:mm:ss results 01/01/1990 17:40:30 and is valid', () => {
  const mask = new DatetimeMask();
  const input = '01011990174030';
  const settings = {
    format: 'DD/MM/YYYY HH:mm:ss',
  };

  const expected = '01/01/1990 17:40:30';
  const received = mask.getValue(input, settings);
  const isValid = mask.validate(input, settings);

  expect(received).toBe(expected);
  expect(isValid).toBe(true);
});

test('01011990174030 with format DD/MM/YYYY HH:mm:ss results 01/01/1990 17:40:30 and raw value Date', () => {
  const mask = new DatetimeMask();
  const expected = '01/01/1990 17:40:30';
  const received = mask.getValue('01011990174030');

  const expectedRawValue = moment(received, 'DD/MM/YYYY HH:mm:ss', true);
  const receivedRawValue = mask.getRawValue(received);

  expect(received).toBe(expected);
  expect(compareMomentObj(receivedRawValue, expectedRawValue)).toBe(0);
});
