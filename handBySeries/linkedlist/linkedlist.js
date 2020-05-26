// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let count = 0;
    let head = this.head;

    while (head) {
      count++;
      head = head.next;
    }

    return count;
  }
  getFirst() {
    return this.head;
  }
}

module.exports = { Node, LinkedList };
