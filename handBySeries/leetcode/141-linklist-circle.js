function circle(head) {
    
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = head.next;
        fast = head.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}