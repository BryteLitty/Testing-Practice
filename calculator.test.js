const Calculate = require('./calculator');

const calculate = new Calculate();

describe('add numbers', () => {
    test('add 1 + 2 equals 3', () => {
        expect(calculate.add(1, 2)).toBe(3);
        expect(calculate.add(4, 7)).toBe(11);
        expect(calculate.add(14, -7)).toBe(7);
    });

    test('substraction', () => {
        expect(calculate.substract(5, 3)).toBe(2);
        expect(calculate.substract(4, 7)).toBe(-3);
        expect(calculate.substract(5, -0)).toBe(5);
    });

    test('multiplication', () => {
        expect(calculate.multiply(1, 5)).toBe(5);
        expect(calculate.multiply(4, 7)).toBe(28);
        expect(calculate.multiply(5, 5)).toBe(25);
    });

    test('division', () => {
        expect(calculate.divide(4, 2)).toBe(2);
        expect(calculate.divide(21, 7)).toBe(3);
        expect(calculate.divide(15, 3)).toBe(5);
    });
})