class HD {
    static STATUS_PENDING = 'pending';
    static TATUS_RESOLVE = 'resolve';
    static STATUS_REJECT = 'reject';

    constructor(executor) {
        this.value = HD.STATUS_PENDING
        executor()
    }
}