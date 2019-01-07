//https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(nums[i]);
    }
    
    for(let i = 0 ; i <= n ; i++) {
        let index = arr.findIndex(num => num === i);
        if(index === -1){
            return i;
        }
    }
 
};