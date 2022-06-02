/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let map = {};
    
    for(let i = 0; i < s.length; i++){
        map[s[i]] = i;
    }
    
    let result = [];
    let start = 0;
    let last = 0;
    
    for(let i = 0; i < s.length; i++){
        last = Math.max(last,map[s[i]]);
        if(i == last){
            result.push(last-start+1);
            start = last+1;
        }
    }
    return result;
};