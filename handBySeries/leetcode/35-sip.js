var searchInsert = function(nums, target) {
    if (!nums.length) {return 0}
    
    let index = nums.indexOf(target);
    if (index !== -1) {
        return index;
    }
    
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }

    return nums.filter(num => num < target).length;
};

console.log(
searchInsert([1,2,5,6], 5),
searchInsert([1,2,5,6], 2),
searchInsert([1,2,5,6], 7),
searchInsert([1,2,5,6], 0))
