/* 234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
 */

var isPalindrome = function(head) {
  let array = []
  while(head) {
      array.push(head.val)//property of a node in the linked list. 
      head = head.next
  }
  const toString = array.join('')
  const arrayReverse = array.reverse().join('')
      if (toString === arrayReverse) {
          return true
      }
          return false
};

/* 
1. head.val refers to the value stored in the node that head currently points to. It's the data part of the node.
2. head.next refers to the pointer (or reference) to the next node in the linked list. It effectively links one node to the next node in the sequence.

let node = {
  val: someValue,  // The data stored in the node
  next: nextNode   // Reference to the next node in the list
};
*/