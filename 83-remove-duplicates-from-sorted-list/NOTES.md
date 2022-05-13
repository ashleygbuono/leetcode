**Remove Duplicates from Sorted List**
​
We know our input is sorted, so any duplicate nodes will be adjacent. To traverse the list, we set a curr pointer, looking ahead to curr's next. If curr and next have same value, we break the link to next and set it to the following node. Otherwise, we move curr to the next node, and return head of list.