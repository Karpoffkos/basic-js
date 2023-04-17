const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //console.log(arr, 00000000000000000000000000000000000000000000000000000000000034)
  if (!Array.isArray(arr)){return false};
  let letterArr = [];
  let firstletter = [];
  function defineString(item){
    if (typeof item == 'string' && item.length > 0 ){
      letterArr.push(item)
    }
  }

  arr.forEach(element => {
    defineString(element);
  });
  letterArr.forEach(el => firstletter.push(el.trim().slice(0,1).toUpperCase()))
  let string = firstletter.sort().join('');
  //console.log(string, 00000000000000000000000000000000000000000000000000000000000034)
  return string;
 
}

module.exports = {
  createDreamTeam
};
