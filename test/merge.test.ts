import { merge } from '../src/merge';

describe('merge', () => {
    it('merges three arrays correctly', () => {
        const a = [1, 3, 5];
        const b = [6, 4, 2];
        const c = [7, 9, 10];
        const result = merge(a, b, c);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 9, 10]);
    });

    it('works with empty arrays', () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([], [5, 4, 3], [])).toEqual([3, 4, 5]);
    });

    it('works with duplicates', () => {
        const a = [1, 2];
        const b = [2, 1];
        const c = [1, 2];
        const result = merge(a, b, c);
        expect(result).toEqual([1, 1, 1, 2, 2, 2]);
    });

    it('works with negative numbers', () => {
        const a = [-5, -3, 0];
        const b = [2, -1, -4]; 
        const c = [-2, 1, 3];
        const result = merge(a, b, c);
        expect(result).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3]);
    });

    it('works with floating point numbers', () => {
        const a = [0.1, 2.5, 3.3];
        const b = [5.5, 2.2, 0.0]; 
        const c = [4.4, 6.6];
        const result = merge(a, b, c);
        expect(result).toEqual([0.0, 0.1, 2.2, 2.5, 3.3, 4.4, 5.5, 6.6]);
    });

    it('works with arrays of very different sizes', () => {
        const a = [1];
        const b = [10, 9, 8, 7, 6, 5, 4, 3, 2]; 
        const c = [11];
        const result = merge(a, b, c);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    it('works with large arrays', () => {
        const a = Array.from({ length: 1000 }, (_, i) => i);            // 0 → 999
        const b = Array.from({ length: 1000 }, (_, i) => 1999 - i);     // 1999 → 1000 
        const c = Array.from({ length: 1000 }, (_, i) => 2000 + i);     // 2000 → 2999

        const result = merge(a, b, c);

        const expected = Array.from({ length: 3000 }, (_, i) => i);     // 0 → 2999
        expect(result).toEqual(expected);
    });
});
