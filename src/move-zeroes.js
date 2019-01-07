//
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let obj = {};
    
    for(let i = 0; i < nums.length ; i++) {
        if(nums[i] === 0) {
            if(obj[nums[i]]) {
                obj[nums[i]].push(i);
            } else {
                obj[nums[i]] = [i];
            }
        }
    }
    
    let pos = obj['0'] ? obj['0'] : [];
    for(let i = 0 ; i < pos.length; i++) {
        nums.splice(pos[i] - i,1);
    }
    
    for(let i = 0 ; i < pos.length; i++) {
        nums.push(0);
    }
    
    return nums;
};