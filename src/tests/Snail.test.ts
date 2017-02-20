import { Snail } from '../Snail';
import * as assert from 'assert';

describe('Snail', () => {
  it('should return Array with 1, 4, 7, 8, 9, 6, 3, 2, 5', () => {
    let testValue: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const snail: Snail = new Snail(testValue);
    const result: any[] = snail.print();
    assert.deepEqual(result, [1, 4, 7, 8, 9, 6, 3, 2, 5]);
  })
});