import { expect } from 'chai';
import nameBook from '../name-book/name-book';

describe('checkNameBookConsistency', () => {
    it('shouldBeFalse', () => {
        const result = nameBook(['bob', 'john', 'claire', 'johnson']);
        expect(result).equal(false);
    });
    it('shouldBeTrue', () => {
        const result = nameBook(['alice', 'bob']);
        expect(result).equal(true);
    });
});
