// 递归
var invertTree = function (root) {
    const treenode = root;
    if (treenode) {
        const leftnode = treenode.left;
        const rightnode = treenode.right;
        treenode.left = rightnode;
        treenode.right = leftnode;
        invertTree(treenode.left);
        invertTree(treenode.right);
    }
    return treenode;
};

// 非递归实现
var invertTree = function (root) {
    const treenode = root;
    if (!treenode) {
        return treenode;
    }
    const queue = [];
    queue.push(treenode);
    while (queue.length > 0) {
        const firstNode = queue.shift();
        const leftNode = firstNode.left;
        const rightNode = firstNode.right;
        firstNode.left = rightNode;
        firstNode.right = leftNode;
        if (firstNode.left) {
            queue.push(firstNode.left)
        }
        if (firstNode.right) {
            queue.push(firstNode.right)
        }
    }
    return treenode;
};



function hasChildNode(root) {
    return root.left && root.right;
}

function invertTree(root) {
    // 不是空节点 以及  节点存在子节点
    if (!root || !hasChildNode(root)) return root;

    const { left, right } = root;
    // 节点之间进行交换
    // 若存在子节点，进行递归处理
    root.left = hasChildNode(right) ? inverTree(right) : right;
    root.right = hasChildNode(left) ? inverTree(left) : left;


    return root;
}