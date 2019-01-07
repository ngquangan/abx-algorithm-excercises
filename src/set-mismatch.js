//https://leetcode.com/problems/set-mismatch
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findErrorNums = function(nums) {
    var sum = (1 + nums.length) * nums.length / 2;
    var real_sum = 0;
    var double = 0;
    var map = {};
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            double += nums[i];
        }
        else{
            map[nums[i]] = 1;
        }
        real_sum += nums[i];
    }
    return [double, sum - (real_sum - double)];
};