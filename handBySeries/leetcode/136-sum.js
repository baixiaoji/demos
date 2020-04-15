/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0
    let j = numbers.length - 1;

    let sum = numbers[i] + numbers[j];

    while(sum !== target) {
        if (i >= j) {
            return [];
        }
        if (sum > target) {
            j--;
        } else {
            i++
        }
        sum = numbers[i] + numbers[j]; 
    }

    return [i+1, j+1];
};
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]

console.log(twoSum([2,7,11,15], 9));