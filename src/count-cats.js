const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  //throw new NotImplementedError('Not implemented');
  let catNumber = 0;
  let cat = "^^";
  function itemComparing (item) {
    if (item == cat) {
      catNumber++;
    }
  }
  arr.forEach(element => {
    element.forEach( item => itemComparing(item))
  });
  return catNumber;
}
module.exports = {
  countCats
};
