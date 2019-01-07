//https://leetcode.com/problems/majority-element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    for(let i = 0 ; i < nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    let values = Object.values(obj);
    let keys = Object.keys(obj);
    let max = Math.max(...values);
    let num_max_time = nums[0];
    for(let i = 0 ; i < values.length; i++) {
        if(values[i] === max) {
            num_max_time = parseInt(keys[i]);
            break;
        }
    }
    return num_max_time;
};