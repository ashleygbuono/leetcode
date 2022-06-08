/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if (nums.length < 2) return nums[0];
    
    let curr = 0;
    
    while (curr < nums.length) {
        if (nums[curr] !== nums[curr + 1]) return nums[curr];
        else {
            curr += 2;
        }
    }
    return nums[nums.length - 1];
};
