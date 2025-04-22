import { add, subtract, multiply, divide } from './math';

describe('Math module', () => {
  describe('add function', () => {
    it('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should handle negative numbers', () => {
      expect(add(-1, -2)).toBe(-3);
      expect(add(-1, 5)).toBe(4);
    });
  });

  describe('subtract function', () => {
    it('should subtract two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should handle negative numbers', () => {
      expect(subtract(2, 5)).toBe(-3);
    });
  });

  describe('multiply function', () => {
    it('should multiply two numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('should handle zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide function', () => {
    it('should divide two numbers correctly', () => {
      expect(divide(6, 3)).toBe(2);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });
}); 