//https://leetcode.com/problems/reverse-string-ii
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function(s, k) {
    let arr = _.chunk(s.split(''), 2*k);
      return arr.map(a => {
          return _.first(a, k).reverse().join('') + _.rest(a, k).join('');        
      }).join('');
  };
  
  let resverseString = (str, k) => {
      str = str.split("");
      let new_str = str.splice(0, k);
      new_str = new_str.reverse().join("");
      return new_str + str.join("");
  }