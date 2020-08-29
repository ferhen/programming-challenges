import { expect } from 'chai';
import factorialHash from '../factorial-hash/factorial-hash';

describe('calculateFactorial', () => {
    it('factorialOf0', () => {
        const result = factorialHash(0n);
        expect(result).equal(1n);
    });

    it('factorialOf1', () => {
        const result = factorialHash(1n);
        expect(result).equal(1n);
    });

    it('factorialOf2', () => {
        const result = factorialHash(2n);
        expect(result).equal(2n);
    });

    it('factorialOf3', () => {
        const result = factorialHash(3n);
        expect(result).equal(6n);
    });
    
    it('factorialOf4', () => {
        const result = factorialHash(4n);
        expect(result).equal(24n);
    });
    
    it('factorialOf5', () => {
        const result = factorialHash(5n);
        expect(result).equal(120n);
    });

    it('factorialOf100', () => {
        const result = factorialHash(100n);
        expect(result).equal(93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000n);
    });

    it('shouldThrowWhenNegative', () => {
        expect(() => factorialHash(-1n)).to.throw('Value must be positive');
    });
});