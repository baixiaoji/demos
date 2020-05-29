/*
* Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
*
*
* Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
*
*
*
* Input: [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
*
* */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (!intervals.length) return 0;

  intervals.sort((a, b) => a[0] - b[0]);

  let counter = 0;

  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const intervalStart = currentInterval[0];
    const intervalEnd = currentInterval[1];
    if (intervalStart < end) {
      counter++;
      end = Math.min(intervalEnd, end);
    } else {
      end = intervalEnd;
    }
  }

  return counter
};
