/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const dummy = {next: null};

  let head = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val){
      head.next = l1;
      head = head.next;
      l1 = l1.next;
    } else {
      head.next = l2;
      head = head.next;
      l2 = l2.next;
    }
  }

  head.next = l1 || l2;

  return dummy.next;
};
