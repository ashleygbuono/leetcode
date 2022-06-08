/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length < 2) return nums[0] ?? 0;
    
    const res = new Array(nums.length).fill(0);
    
    for (const i in nums) {
        res[i] = Math.max(res[i - 1] ?? nums[i], (res[i - 2] ?? 0) + nums[i]);
    }
   return Math.max(...res);
};
