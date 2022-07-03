/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxDistance = 0;
    
    for (let i = 0; i < nums.length; i++) {
        maxDistance = Math.max(maxDistance, nums[i] + i);
        if (maxDistance === i) break;
    }
    return maxDistance >= nums.length - 1;
};
