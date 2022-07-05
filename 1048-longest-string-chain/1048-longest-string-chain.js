/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    let map = new Map();
    let result = 0;
    
    words = words.sort((a, b) => a.length - b.length);
    
    for (let i = 0; i < words.length; i++) {
        let currBest = 0;
        const currWord = words[i];
        for (let j = 0; j < currWord.length; j++) {
            const prevWord = currWord.substring(0, j) + currWord.substring(j + 1);

            currBest = Math.max(currBest, map.has(prevWord) ? map.get(prevWord) + 1 : 1);
        }
        map.set(currWord, currBest);
        
        result = Math.max(result, currBest);
    }
    return result;
};
