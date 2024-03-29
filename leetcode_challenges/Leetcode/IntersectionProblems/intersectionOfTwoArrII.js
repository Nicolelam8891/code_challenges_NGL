/* 
350. Intersection of Two Arrays II

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
*/

var intersect = function(nums1, nums2) {
  let intersection = []; 
  for (let num of nums1) {
    let index = nums2.indexOf(num);
    if (index !== -1) {
    intersection.push(num)
    nums2.splice(index, 1); 
    }
  }
  return intersection 
};

console.log(intersect([1, 2, 2, 1],[2, 2]))
console.log(intersect([4,9,5],[9,4,9,8,4]))