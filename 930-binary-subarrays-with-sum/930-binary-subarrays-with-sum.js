/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    let tempSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        tempSum += nums[i];
        if (tempSum === goal) count++;
        for (let j = i + 1; j < nums.length; j++) {
            tempSum += nums[j];
            if (tempSum === goal) {
                count++;
            } else if (tempSum > goal) break;
        }
        tempSum = 0;
    }
    return count;
};