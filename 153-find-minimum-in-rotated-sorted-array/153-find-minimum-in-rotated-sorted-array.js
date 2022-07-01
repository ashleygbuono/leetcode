/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length < 2) return nums[0];
    let low = 0;
    let high = nums.length - 1;
    
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        
        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid
        }
    }
    return nums[low];
};
