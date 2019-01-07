//https://leetcode.com/problems/number-complement
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let numBinary = changeBinary(num);
    let numComplement = complementBinary(numBinary);
    return parseInt(numComplement, 2);
};

let changeBinary = (num) => {
    let str = "";
    
    while(num !== 0) {
        str += num % 2 + "";
        num = parseInt(num / 2) ;
    }
    
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i] + "";
    }
    return newStr;
}

let complementBinary = (numBinary) => {
    let str = numBinary.split("").reduce((prev, current) => {
        return prev += (current === "1" ? "0" : "1");
    }, "");
    return str;
}
