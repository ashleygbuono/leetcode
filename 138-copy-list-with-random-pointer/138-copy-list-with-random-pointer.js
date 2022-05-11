/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    let oldToCopy = new Map();

    let curr = head;
    while (curr) {
        oldToCopy.set(curr, new Node(curr.val, curr.next, curr.random));
        curr = curr.next;
    }
    let newHead = oldToCopy.get(head);

    for (let newNode of oldToCopy.values()) {
        if (newNode.next) newNode.next = oldToCopy.get(newNode.next);
        if (newNode.random) newNode.random = oldToCopy.get(newNode.random);
    }
    return newHead;
};