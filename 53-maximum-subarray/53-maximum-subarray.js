/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length < 2) return nums[0];
    let maxSoFar = nums[0];
    let maxSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxSoFar = Math.max(maxSoFar + nums[i], nums[i]);
        
        maxSum = Math.max(maxSoFar, maxSum);
    }
    return maxSum;
};