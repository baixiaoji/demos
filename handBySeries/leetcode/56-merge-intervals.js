// 1. 数组先进行升序排序
// 2. 申明 result 数据 和 start  end 变量;
// 3. for 循环
// 3.1 if start end 为初始化状态，进行赋值
// 3.2 firstValue 小于 end 值，  end 值 需要 对当下的 endValue 和 全局 end 取最大
// 3.3 最后不满足，将当下 start 和 end 推进  result 数组   start 和  end 指向当下的 firstValue 和 endValue
function _merge(matrix) {
    // 1.
    matrix.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }

        return a[1] - b[1];
    })

    let result = [];
    let start;
    let end;

    for(let i = 0; i < matrix.length; i++) {
        const firstValue = matrix[i][0];
        const endValue = matrix[i][1];
        if (start === undefined) {
            start = firstValue;
            end = endValue
        } else if (firstValue <=  end) {
            end = Math.max(end, endValue);
        } else {
            const item = [start, end];
            result.push(item);

            start = firstValue;
            end = endValue;
        }
    }

    if (start !== undefined) {
        result.push([
            start, end
        ])
    }

    return result;
}

function merge(intervals) {
  if (!intervals.length) return intervals;

  intervals.sort((a,b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i<intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastInterval = result[result.length - 1];

    if (currentInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(currentInterval[1], lastInterval[1]);
    } else if (currentInterval[0] <= lastInterval[0]) {
      lastInterval[0] = Math.min(currentInterval[0], lastInterval[0]);
    } else {
      result.push(currentInterval);
    }
  }

  return result;
}
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
