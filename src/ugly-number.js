//https://leetcode.com/problems/ugly-number
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num <= 0) return false;
    let arrPrime = [2,3,5];

    arrPrime.forEach(prime => {
       while(num % prime === 0) {
           num = parseInt(num / prime);
       } 

    });
    
    if(num !== 1) {
        return false;
    }
    
    return true;
};