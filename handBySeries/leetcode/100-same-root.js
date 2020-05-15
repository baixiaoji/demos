function sameTree(p, q) {
    let isSameTree = true;

    function helper(p, q) {
        if (!p && !q) {
            return;
        } else if( !p || !q) {
            isSameTree = false;
            return;
        } else if (p.val !== q.val) {
            isSameTree = false;
            return;
        }

        helper(p.left, q.left);
        helper(p.right, q.right);
    }
    helper(p, q);
    return isSameTree;
}