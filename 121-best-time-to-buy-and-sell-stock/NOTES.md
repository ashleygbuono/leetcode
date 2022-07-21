Naive approach:
- Two loops, init a running maxProfit var = 0
- outer loop will iterate from start of input to 1 from the end (length - 1) to keep space for j loop
- inner loop will iterate from i + 1 to end of input since we can only sell on a following day
- if input[i] >= input[j], we continue since i-j would be a negative profit
- otherwise, take max of current maxProfit or input[j] - input[i]
- return maxProfit
-
- O(n^2) time, O(1) space
More optimal:
- One loop, init a running minBuyPrice var (Infinity) and a maxProfit var (0)
- At each element, if curr element is less than minBuyPrice, update mBP with curr element value
- otherwise, we can start checking following elements for max profit
- if curr element - minBuyPrice > maxProfit, update mP with curr element value - mBP
-return maxProfit
​
- O(n^2) time, O(1) space