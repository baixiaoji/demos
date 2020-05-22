function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while(current) {
        let temp = current.next;

        // current next 指向 prev
        current.next = prev;

        // prev 指向当前的节点
        prev = current;
        // current 指向原本的 next
        current = temp;
    }
    // 将最后的 prev 成为 linkedlist head 导出
    return prev;
}