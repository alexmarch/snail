import { Snail } from './Snail';

let value: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const snail:Snail = new Snail(value);
snail.print(true);
