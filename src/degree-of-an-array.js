//https://leetcode.com/problems/degree-of-an-array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    if(nums.length === 1) return 1;
    let obj = {};
    for(let i = 0 ; i < nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }

    let arrMax = [];
    let max = Math.max(...Object.values(obj));
    let entries = Object.entries(obj);
    for(let i = 0; i < entries.length; i++) {
        if(entries[i][1] === max) {
            arrMax.push(parseInt(entries[i][0]));
        }
    }
    let minLength = 50000;
    for(let i = 0; i < arrMax.length; i++) {
        minLength = Math.min(minLength, nums.lastIndexOf(arrMax[i]) - nums.indexOf(arrMax[i]) + 1);
    }
    return minLength;
};