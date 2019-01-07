//https://leetcode.com/problems/reverse-linked-list
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let currentNode = head;
    while(currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = nextNode;
    }
    return prev;
};