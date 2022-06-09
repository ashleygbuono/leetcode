/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let currSum = 0;
    let seen = {0 : 1};
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        count += seen[currSum - k] || 0;
        seen[currSum] = (seen[currSum] || 0) + 1;
    }
    return count;
};
