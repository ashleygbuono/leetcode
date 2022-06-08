**House Robber II**
​
​
Same idea as HR I => we want to keep a running max that can be stolen from the houses before. At each idx, we find max of either the running result sum before (i -1) value, or running sum two before PLUS current element.
​
Since we also know that first and last elements should be considered adjacent, we need to control for including both in our logic. To avoid this, we can run logic twice, on subarray idx 0 to n -2, and subarray idx 1 to end (n - 1).
Main fn:
- Slice copies of both subarrays, and call helper on both
- Return max of both helper returns
​
Helper fn:
- Takes subarray
- At each idx, find the max of running result sum up at the element before, and running sum two elements before plus current element
- Returns max of result spread