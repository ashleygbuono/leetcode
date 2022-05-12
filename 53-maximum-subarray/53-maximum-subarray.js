/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSoFar = -Infinity;
    let maxSum = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        maxSoFar = Math.max(nums[i], nums[i] + maxSoFar);
        maxSum = Math.max(maxSoFar, maxSum);
    }
    return maxSum;
};