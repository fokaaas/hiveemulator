import { it, describe } from 'node:test';
import assert from 'node:assert';

describe('sample test', () => {
  it('should be zero', () => {
    const res = 9 - 9;
    assert.strictEqual(res, 0);
  });
});
