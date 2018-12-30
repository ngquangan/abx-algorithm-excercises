//https://leetcode.com/problems/self-dividing-numbers
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let nums = [];
    for(let i = left; i <= right ; i++) {
        let arr = getArr(i);
        let check = true;
        for(let j = 0; j < arr.length; j++) {
            if(i % arr[j] !== 0) {
                check = false;
            }
        }
        
        if(check) {
            nums.push(i);
        }
        
    }
    
    return nums;
};

let getArr = (num) => {
    let arr = [];
    while(num !== 0) {
        arr.push(num%10);
        num = parseInt(num/10);
    }
    return arr;
}