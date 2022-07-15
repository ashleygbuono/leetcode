/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    if (nums.length < 2) return false;
    
    let total = nums.reduce((a, b) => a + b);
    if (total % 2 !== 0) return false;
    
    let res = new Array((total / 2) + 1).fill(0);
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = total / 2; j >= nums[i]; j--) {
            res[j] = Math.max(res[j], res[j - nums[i]] + nums[i]);
        }
    }
    return res[total / 2] === (total / 2);
};