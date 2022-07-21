/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minBuyPrice = Infinity, maxProfit = 0;
    
    for (const price of prices) {
        if (price < minBuyPrice) minBuyPrice = price;
        if (price - minBuyPrice > maxProfit) maxProfit = price - minBuyPrice;
    }
    return maxProfit > 0 ? maxProfit : 0;
};