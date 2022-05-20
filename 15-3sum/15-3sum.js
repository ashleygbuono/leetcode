/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            if (nums[left] + nums[right] === 0 - nums[i]) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (nums[left] === nums[left - 1]) left++;
                while (nums[right] === nums[right + 1]) right--;
            } else if (nums[left] + nums[right] > 0 - nums[i]) {
                right--;
            } else {
                left++;
            }
        }
    }
    return res;
};
