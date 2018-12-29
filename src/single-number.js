//https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let n = nums.length;
    if(n === 1) return nums[0];
    for(let i = 0 ; i < n ; i++) {
        let indexes = findIndex(nums, nums[i]);
        
        if(indexes.length === 1){
            return nums[i];
        }
    }
};

let findIndex = (nums, n) => {
    let arr = [];
    for(let i = 0 ; i < nums.length ; i++) {
        if(nums[i] === n) arr.push(i);
    }
    return arr;
}