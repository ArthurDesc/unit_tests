const { calculate } = require('../../src/js/calculator');

describe('Calculator', () => {
    test('addition simple', () => {
        expect(calculate('2 + 2')).toBe(4);
        expect(calculate('-2 + 2')).toBe(0);
        expect(calculate('5.5 + 5')).toBe(10.5);
    });

    test('soustraction', () => {
        expect(calculate('2 - 2')).toBe(0);
        expect(calculate('-2 - 2')).toBe(-4);
        expect(calculate('5.5 - 5')).toBe(0.5);
    });

    test('multiplication', () => {
        expect(calculate('2 * 2')).toBe(4);
        expect(calculate('-2 * 2')).toBe(-4);
        expect(calculate('5.5 * 5')).toBe(27.5);
    });

    test('division', () => {
        expect(calculate('2 / 2')).toBe(1);
        expect(calculate('-2 / 2')).toBe(-1);
        expect(calculate('5.5 / 5')).toBe(1.1);
    });

    test('priorités des opérations', () => {
        expect(calculate('2 + 3 * 4')).toBe(14);
        expect(calculate('10 - 2 * 3')).toBe(4);
    });

    test('parenthèses', () => {
        expect(calculate('(2 + 3) * 4')).toBe(20);
        expect(calculate('2 * (3 + 4)')).toBe(14);
    });

    test('expression invalide', () => {
        expect(() => calculate('2 + bad')).toThrow('Expression invalide');
        expect(() => calculate('2 +')).toThrow('Expression invalide');
    });

    // Bonus : Test pour une chaîne vide
    test('chaîne vide', () => {
        expect(() => calculate('')).toThrow('Expression vide');
    });
}); 