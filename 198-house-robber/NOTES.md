**House Robber**
​
What do we know?
* Since adjacent houses are connected, any subsequent houses we choose to rob has to be at least 1 away.
​
At each index of our input, we can decide to either use that element's value alone, or add it to a running sum from the house two indexes down. We can init a result array that's the same length as our input, and iterate over our input. At each index, the element in our result array will be the max of either the running result max one index before, or input at that index plus the result element two indices smaller. Since our result is an array, we return the max of the spread of all elements in result to find that max amount of money that can be stolen in one night.
​
Time: O(n), where n is the length of our input
Space: O(n), we allocated additional space to create a result array the same size as our input