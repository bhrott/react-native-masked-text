import { CustomMask } from '../lib/masks';

test('getType results custom', () => {
  const expected = 'custom';
  const received = CustomMask.getType();

  expect(received).toBe(expected);
});

test('123 with mask AAA9 results ', () => {
  const mask = new CustomMask();
  const expected = '';
  const received = mask.getValue('123', {
    mask: 'AAA9',
  });

  expect(received).toBe(expected);
});

test('TA3 with mask AAA9 results TA', () => {
  const mask = new CustomMask();
  const expected = 'TA';
  const received = mask.getValue('TA3', {
    mask: 'AAA9',
  });

  expect(received).toBe(expected);
});

test('TABC with mask AAA9 results TAB', () => {
  const mask = new CustomMask();
  const expected = 'TAB';
  const received = mask.getValue('TABC', {
    mask: 'AAA9',
  });

  expect(received).toBe(expected);
});

test('1111111 with mask 999-9999 results 111-1111', () => {
  const mask = new CustomMask();
  const expected = '111-1111';
  const received = mask.getValue('1111111', {
    mask: '999-9999',
  });

  expect(received).toBe(expected);
});

test('B45 with mask A#99 results B#45', () => {
  const mask = new CustomMask();
  const expected = 'B#45';
  const received = mask.getValue('B45', {
    mask: 'A#99',
  });

  expect(received).toBe(expected);
});

test('BC45 with mask AS#99 results BC#45', () => {
  const mask = new CustomMask();
  const expected = 'BC#45';
  const received = mask.getValue('BC45', {
    mask: 'AS#99',
  });

  expect(received).toBe(expected);
});

test('B345 with mask AS#99 results B3#45', () => {
  const mask = new CustomMask();
  const expected = 'B3#45';
  const received = mask.getValue('B345', {
    mask: 'AS#99',
  });

  expect(received).toBe(expected);
});

test('DWARF with mask AAAAA and custom validator results DWARF and is valid', () => {
  const mask = new CustomMask();
  const input = 'DWARF';
  const settings = {
    mask: 'AAAAA',
  };
  const validator = (value, settings) => value === 'DWARF';

  const expected = 'DWARF';
  const received = mask.getValue(input, settings);
  const isValid = mask.validate(input, settings);

  expect(expected).toBe(received);
  expect(isValid).toBe(true);
});

test('ELF with mask AAAAA and custom validator results DWARF and is invalid', () => {
  const mask = new CustomMask();
  const input = 'ELF';
  const settings = {
    mask: 'AAAAA',
  };
  const validator = (value, settings) => value === 'DWARF';

  const expected = 'ELF';
  const received = mask.getValue(input, settings);
  const isValid = mask.validate(input, settings);

  expect(expected).toBe(received);
  expect(isValid).toBe(true);
});

test('123 with mask 999 results 123 and raw value 123(type Number)', () => {
  const mask = new CustomMask();
  const options = {
    mask: '999',
    getRawValue(maskedValue, settings) {
      return Number(maskedValue);
    },
  };

  const expected = '123';
  const received = mask.getValue('123', options);

  const expectedRawValue = 123;
  const receivedRawValue = mask.getRawValue(received, options);

  expect(received).toBe(expected);
  expect(receivedRawValue).toBe(expectedRawValue);
});

test('mask with custom translation and match', () => {
  const mask = new CustomMask();
  const options = {
    mask: '999&AAA',
    translation: {
      '&': function (val) {
        return ['#', '.', ':'].indexOf(val) >= 0 ? val : null;
      },
    },
  };

  const expected = '123#ABC';
  const received = mask.getValue('123#ABC', options);

  expect(received).toBe(expected);
});

test('mask with custom translation and not match', () => {
  const mask = new CustomMask();
  const options = {
    mask: '999&AAA',
    translation: {
      '&': function (val) {
        return ['#', '.', ':'].indexOf(val) >= 0 ? val : null;
      },
    },
  };

  const expected = '123';
  const received = mask.getValue('123|ABC', options);

  expect(received).toBe(expected);
});

test('mask with custom translation and optionals and matching', () => {
  const mask = new CustomMask();
  const options = {
    mask: '999***AAA&',
    translation: {
      '&': function (val) {
        return ['#', '.', ':'].indexOf(val) >= 0 ? val : null;
      },
    },
  };

  const expected = '123|%ABC';
  const received = mask.getValue('123|%ABC.', options);

  expect(received).toBe(expected);
});
