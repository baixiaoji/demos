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
  getLast() {
    if (!this.head) return null;

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }

  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) return;

    this.head = this.head.next
  }
  removeLast() {
    // 空链表
    if (!this.head) return;
    // 只有一个节点
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;

    while (node.next) {
      prev = node;
      node = node.next;
    }

    prev.next = null;
  }
  insertLast(data) {
    const node = new Node(data);
    const lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = node;
    } else {
      this.head = node;
    }

  }
  getAt(index) {
    if (!this.head) return null;

    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }
  removeAt(index) {
    if (!this.head) return ;

    if (index === 0) {
      this.head = this.head.next;
      return ;
    }

    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return ;
    }

    prev.next = prev.next.next;

  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {

      this.head = new Node(data, this.head);
      return;
    }
    let prevNode = this.getAt(index - 1) || this.getLast();

    prevNode.next = new Node(data, prevNode.next);

  }
  forEach(cb) {
    let node = this.head;
    let counter = 0;

    while (node) {
      cb(node, counter)
      counter++;
      node = node.next;
    }
  }

  *[Symbol.iterator] () {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
