//https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    let count = 0;
    for(let i = L; i <= R; i++) {
        let num_b = i.toString(2);
        let count_bit_1 = num_b.split("").filter(b => b === "1").length;
        if(checkPrime(count_bit_1)) {
            count++;
        }
    }
    return count;
};

let checkPrime = (n) => {
    if(n < 2) return false;
    if(n === 2) return true;
    
    for(let i = 2; i <= n /2; i++) {
        if(n %i === 0) {
            return false;
        }
    }
    
    return true;
}