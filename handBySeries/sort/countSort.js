// 仅适用 正整数数组
function countSort(array) {
    if (array.length < 2) {
        return array;
    }
    // 找到最大值
    const maxValue = findMaxValue(array);
    // 制造一个同样长度的数组 A
    const countArray = new Array(maxValue + 1);
    // 对原数组 累计值
    array.forEach(element => {
        // 在 数组 A 上对应的索引 初始化累计值
        if (!countArray[element]) {
            countArray[element] = 0;
        }
        countArray[element]++;
    });

    let sortIndex = 0;
    // 数组 A 进行
    countArray.forEach((count, i) => {
        while(count > 0) {
            array[sortIndex] = i;
            sortIndex++;
            count--;
        }
    })

    return array;
}

function findMaxValue(array) {
    let max = array[0];

    for(let i = 1; i < array.length; i++) {
        if (max < array[i]){
            max = array[i]
        }
    }
    return max;
}


var a = [14, 34, 112, 52, 12,34, 111];
console.log(countSort(a));