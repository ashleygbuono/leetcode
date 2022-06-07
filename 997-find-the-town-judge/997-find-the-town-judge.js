/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n === 1) return n;
    let map = new Map, set = new Set();
    
    for (const [a, b] of trust) {
        map.set(b, (map.get(b) || 0) + 1);
        set.add(a);
    }
    
    for (const [key, val] of map) {
        if (val >= n - 1 && !set.has(key)) return key;
    }
    return -1;
};
