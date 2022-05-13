**Remove Linked List Elements**
​
​
What cases do we need to think of?
> Input list is empty
> List nodes at middle/end of list get removed
> List node at head of list gets removed
> Dummy node
​
By creating a dummy node and setting next to the head of our input, we allow for edge case of removing 1st node of input. Set a curr pointer to dummy node so that we can anticipate/check for curr's next value. While curr's next is not null, we check if curr's next val equals our target val. If it does, we break the link to curr's next and set it to the following node. Otherwise, we move curr pointer to the next node and return dummy node's next.