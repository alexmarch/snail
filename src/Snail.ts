
/**
 * 
 * 
 * @export
 * @class Snail
 */
export class Snail {
  public movementPath: number[][] = [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
    [2, 2],
    [1, 2],
    [0, 2],
    [0, 1],
    [1, 1]
  ];
  public values: any[][];

  /**
   * Creates an instance of Snail.
   * 
   * @param {any[][]} values
   * @param {number[][]} [movementPath]
   * 
   * @memberOf Snail
   */
  constructor(values: any[][], movementPath?: number[][]) {
    this.movementPath = movementPath || this.movementPath;
    this.values = values;
  }

  /**
   * 
   * 
   * @param {boolean} format
   * 
   * @memberOf Snail
   */
  print(format?: boolean): any {
    let result: any = [];
    let colors = require('colors');

    for (let item of this.movementPath) {
      let arrValue = this.values[item[0]];
      if (arrValue && arrValue[item[1]]) {
        result.push(arrValue[item[1]]);
      }
    }
    if (format) {
      console.log(`Result: ${colors.rainbow(result.join(', '))}`)
    }
    return result;
  }
}