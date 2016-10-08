import {MaskService} from '../lib/mask-service';

test('12312312356 toCpf results 123.123.123.56', () => {
    let maskService = new MaskService();
    let valueToMask = '12312312356';
    let maskedValue = '123.123.123-56';

    let maskedResult = maskService.toCpf(valueToMask);

    expect(maskedResult).toBe(maskedValue);
});

test('12312 toCpf results 123.12', () => {
    let maskService = new MaskService();
    let valueToMask = '12312';
    let maskedValue = '123.12';

    let maskedResult = maskService.toCpf(valueToMask);

    expect(maskedResult).toBe(maskedValue);
});

test('99999999 toZipCode results 99999-999', () => {
    let maskService = new MaskService();
    let valueToMask = '99999999';
    let maskedValue = '99999-999';

    let maskedResult = maskService.toZipCode(valueToMask);

    expect(maskedResult).toBe(maskedValue);
});

test('123 toMoney results R$ 1,23', () => {
    let maskService = new MaskService();
    let valueToMask = '123';
    let maskedValue = 'R$ 1,23';

    let maskedResult = maskService.toMoney(valueToMask);

    expect(maskedResult).toBe(maskedValue);
});

test('123456 toMoney results R$ 1.234,56', () => {
    let maskService = new MaskService();
    let valueToMask = '123456';
    let maskedValue = 'R$ 1.234,56';

    let maskedResult = maskService.toMoney(valueToMask);

    expect(maskedResult).toBe(maskedValue);
});

test('12345678989 toMoney results R$ 123.456.789,89', () => {
    let maskService = new MaskService();
    let valueToMask = '12345678989';
    let maskedValue = 'R$ 123.456.789,89';

    let maskedResult = maskService.toMoney(valueToMask);

    expect(maskedResult).toBe(maskedValue);
});

test('12345678989 toMoney({unit: "US$", separator: ".", delimiter: ","}) results US$ 123,456,789.89', () => {
    let maskService = new MaskService();
    let valueToMask = '12345678989';
    let maskedValue = 'US$ 123,456,789.89';

    let maskedResult = maskService.toMoney(valueToMask, {unit: "US$", separator: ".", delimiter: ","});

    expect(maskedResult).toBe(maskedValue);
});

test('123456 toMoney({precision: 3}) results R$ 123,456', () => {
    let maskService = new MaskService();
    let valueToMask = '123456';
    let maskedValue = 'R$ 123,456';

    let maskedResult = maskService.toMoney(valueToMask, {precision: 3});

    expect(maskedResult).toBe(maskedValue);
});

test('123456 toMoney({zeroCents: true}) results R$ 123.456,00', () => {
    let maskService = new MaskService();
    let valueToMask = '123456';
    let maskedValue = 'R$ 123.456,00';

    let maskedResult = maskService.toMoney(valueToMask, {zeroCents: true});

    expect(maskedResult).toBe(maskedValue);
});

test('1234123412 toCelPhone results (12) 3412-3412', () => {
    let maskService = new MaskService();
    let valueToMask = '1234123412';
    let maskedValue = '(12) 3412-3412';

    let maskedResult = maskService.toCelPhone(valueToMask);

    expect(maskedResult).toBe(maskedValue);
});

test('12341234123 toCelPhone results (12) 34123-4123', () => {
    let maskService = new MaskService();
    let valueToMask = '12341234123';
    let maskedValue = '(12) 34123-4123';

    let maskedResult = maskService.toCelPhone(valueToMask);

    expect(maskedResult).toBe(maskedValue);
});

test('1234 toNumber results 1234', () => {
    let maskService = new MaskService();
    let valueToMask = '1234';
    let maskedValue = '1234';

    let maskedResult = maskService.toNumber(valueToMask);

    expect(maskedResult).toBe(maskedValue);
});

test('12A34 toNumber results 1234', () => {
    let maskService = new MaskService();
    let valueToMask = '1234';
    let maskedValue = '1234';

    let maskedResult = maskService.toNumber(valueToMask);

    expect(maskedResult).toBe(maskedValue);
});

test('1234 toCustom({mask: "9-999"}) results 1-234', () => {
    let maskService = new MaskService();
    let valueToMask = '1234';
    let maskedValue = '1-234';

    let maskedResult = maskService.toCustom(valueToMask, { mask: '9-999'});

    expect(maskedResult).toBe(maskedValue);
});

test('ABC123 toCustom({mask: "AAAA"}) results ABC', () => {
    let maskService = new MaskService();
    let valueToMask = 'ABC123';
    let maskedValue = 'ABC';

    let maskedResult = maskService.toCustom(valueToMask, { mask: 'AAAA'});

    expect(maskedResult).toBe(maskedValue);
});

test('ABCD123 toCustom({mask: "AAAA-9"}) results ABCD-1', () => {
    let maskService = new MaskService();
    let valueToMask = 'ABCD123';
    let maskedValue = 'ABCD-1';

    let maskedResult = maskService.toCustom(valueToMask, { mask: 'AAAA-9'});

    expect(maskedResult).toBe(maskedValue);
});