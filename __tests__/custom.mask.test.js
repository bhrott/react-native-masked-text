import { CustomMask } from '../lib/masks';

test('getType results custom', () => {
    var expected = 'custom';
    var received = CustomMask.getType();

    expect(received).toBe(expected);
});

test('123 with mask AAA9 results ', () => {
    var mask = new CustomMask();
    var expected = '';
    var received = mask.getValue('123', {
        mask: 'AAA9'
    });

    expect(received).toBe(expected);
});

test('TA3 with mask AAA9 results TA', () => {
    var mask = new CustomMask();
    var expected = 'TA';
    var received = mask.getValue('TA3', {
        mask: 'AAA9'
    });

    expect(received).toBe(expected);
});

test('TABC with mask AAA9 results TAB', () => {
    var mask = new CustomMask();
    var expected = 'TAB';
    var received = mask.getValue('TABC', {
        mask: 'AAA9'
    });

    expect(received).toBe(expected);
});

test('1111111 with mask 999-9999 results 111-1111', () => {
    var mask = new CustomMask();
    var expected = '111-1111';
    var received = mask.getValue('1111111', {
        mask: '999-9999'
    });

    expect(received).toBe(expected);
});

test('B45 with mask A#99 results B#45', () => {
    var mask = new CustomMask();
    var expected = 'B#45';
    var received = mask.getValue('B45', {
        mask: 'A#99'
    });

    expect(received).toBe(expected);
});

test('BC45 with mask AS#99 results BC#45', () => {
    var mask = new CustomMask();
    var expected = 'BC#45';
    var received = mask.getValue('BC45', {
        mask: 'AS#99'
    });

    expect(received).toBe(expected);
});

test('B345 with mask AS#99 results B3#45', () => {
    var mask = new CustomMask();
    var expected = 'B3#45';
    var received = mask.getValue('B345', {
        mask: 'AS#99'
    });

    expect(received).toBe(expected);
});