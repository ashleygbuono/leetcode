/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if (nums.length < 2) return nums;
    
    let curr = 0;
    let left = 0; 
    let right = nums.length - 1;
    
    while (curr <= right) {
        if (nums[curr] === 0) {
            [nums[curr], nums[left]] = [nums[left], nums[curr]];
            curr++;
            left++;
        } else if (nums[curr] === 2) {
            [nums[curr], nums[right]] = [nums[right], nums[curr]];
            right--;
        } else {
            curr++;
        }
    }
    return nums;
};
