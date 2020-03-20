function array2Tree(arr, pos = 0) {
    if (arr[pos] == null) return null;

    const node = {
        val: arr[pos],
        left: array2Tree(arr, 2 * pos + 1),
        right: array2Tree(arr, 2 * pos + 2),
    }

    return node;
}


function tree2Arr(root, arr = []) {
    if (root) {
        arr.push(root.val);
        tree2Arr(root.left, arr);
        tree2Arr(root.right, arr);
    }

    return arr;
}

const root = array2Tree([1,2,3,4,5,7])
console.log(root);
console.log('------------------');
console.log(tree2Arr(root))



function preOrderSearch(root, cb = console.log) {
    if (root) {
        cb(root.val);
        preOrderSearch(root.left, cb)
        preOrderSearch(root.right, cb)
    }
}
preOrderSearch(root);
