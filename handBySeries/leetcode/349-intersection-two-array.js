/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if (!nums1.length || !nums2.length) {
        return [];
    }

    const sameValueArray = nums1.filter(item => nums2.includes(item));

    return [...new Set(sameValueArray)]
};

console.log(intersection([1,2,3], [2]));