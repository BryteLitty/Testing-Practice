const stringLength = require('./stringLength');

test('return string length', () => {
    expect(stringLength('BryteLitty')).toBeGreaterThan(1);
    expect(stringLength('Bright')).toBeLessThan(10)
});