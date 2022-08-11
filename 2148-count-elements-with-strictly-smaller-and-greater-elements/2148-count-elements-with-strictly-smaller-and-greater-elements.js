/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    if (nums.length < 3) return 0;
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let count = 0;
    
    for (const num of nums) {
        if (num > min && num < max) count++;
    }
    return count;
};