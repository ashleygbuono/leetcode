/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [];
    if (s.length < 4 || s.length > 12) return res;
    
    function backtrack(idx, curr) {
        //base case or ending condition
        //we only want to add to our res if curr list's length = 4 AND idx = s.length
        if (curr.length === 4) {
            if (idx === s.length) {
                res.push(curr.join("."));
            }
            return;
        }
        
        //recursive call
        let num = "";
        for (let i = idx; i < idx + 3; i++) {
            num += s[i];
            if (num.length > 1 && num[0] === "0") break;
            
            if (parseInt(num) >= 0 && parseInt(num) <= 255) {
                curr.push(num);
                backtrack(i + 1, curr);
                curr.pop();
            }
        }
    }
    backtrack(0, []);
    return res;
};