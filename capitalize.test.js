const capitalize = require('./capitalize');

test('capitalize string', () => {
    expect(capitalize('bright')).toBe('Bright');
})