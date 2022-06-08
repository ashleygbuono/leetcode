/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length < 3) return Math.max(...nums) ?? 0;
    
    let subarr1 = nums.slice(0, nums.length - 1);
    let subarr2 = nums.slice(1);
    
    function helper(arr) {
        if (arr.length < 3) return Math.max(...arr) ?? 0;
        let res = [];
        
        for (const i in arr) {
            res[i] = Math.max(res[i - 1] ?? arr[i], (res[i - 2] ?? 0) + arr[i])
        }
        return Math.max(...res);
    }
    return Math.max(helper(subarr1), helper(subarr2));
};