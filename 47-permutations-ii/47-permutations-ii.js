/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = [];
    const perm = [];
    let count = new Map();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    
    function dfs() {
        if (perm.length === nums.length) {
            res.push(perm.slice());
            return;
        }
        for (const key of count.keys()) {
            if (count.get(key) > 0) {
                perm.push(key);
                count.set(key, count.get(key) - 1);
                
                dfs();
                
                count.set(key, count.get(key) + 1);
                perm.pop();
            }
        }
    }
    dfs();
    
    return res;
};