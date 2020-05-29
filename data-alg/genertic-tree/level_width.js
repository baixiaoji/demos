// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    // 增加一个结束mark标记当前层级   核心用到了宽度优先遍历
    const arr = [root,'end'];
    const count = [];
    let index = 0
    while(arr.length > 1) {
        const first = arr.shift();

        if (first === 'end') {
            index += 1;
            // 'end' tag push last arr
            arr.push(first);
            continue;
        }
        if (typeof count[index] === 'undefined') {
            count[index] = 0;
        }
        count[index] += 1;
        arr.push(...first.children);
    }

    return count;
}

module.exports = _levelWidth;



function _levelWidth(root) {
    // 增加一个结束mark标记当前层级   核心用到了宽度优先遍历
    const arr = [root,'end'];
    const count = [0];

    while(arr.length > 1) {
        
        const first = arr.shift();

        if (first === 'end') {
            // 'end' tag push last arr
            arr.push(first);
            count.push(0);
            continue;
        }
        
        count[count.length - 1] += 1;
        arr.push(...first.children);
    }

    return count;
}