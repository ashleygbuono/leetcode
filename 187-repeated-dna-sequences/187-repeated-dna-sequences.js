/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let set = new Set();
    let res = new Set();
    for (let i = 0; i <= s.length - 10; i++) {
        let str = s.substring(i, i + 10) 
        set.has(str) ? res.add(str) : set.add(str)
    }
    return [...res]
};