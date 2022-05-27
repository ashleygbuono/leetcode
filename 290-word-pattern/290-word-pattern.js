/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = new Map();
    
    let sSplit = s.split(" ");
    if (pattern.length !== sSplit.length) return false;
    if (new Set(pattern).size !== new Set(sSplit).size) return false;
    
    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i]) && map.get(pattern[i]) !== sSplit[i]) {
            return false;
        } else {
            map.set(pattern[i], sSplit[i]);
        }
    }
    return true;
};