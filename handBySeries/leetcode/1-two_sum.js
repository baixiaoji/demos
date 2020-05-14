// [1,2,4,6] 3 [0,1]
// function twoSum(arr, target) {
//     const map = {};
//     const res = [];

//     for (let index = 0; index < arr.length; index++) {
//         const num = arr[index];
//         const implement = target - num;
    
//         if (map[implement] !== undefined) {
//             res.push(map[implement])
//             res.push(index);
//         }

//         map[num] = index;
//     }

//     return res;
// }

function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const implement = target - nums[i];

        if (map.has(implement)) {
            return [i, map.get(implement)];
        }
        map.set(nums[i], i);
    }
}

console.log(twoSum([1,2,3,4], 3))