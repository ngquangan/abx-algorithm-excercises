//https://leetcode.com/problems/array-partition-i
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => b-a);
    
    let arr = _.chunk(nums, 2);
    
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        sum += Math.min(...arr[i]);
    }
    return sum;
};