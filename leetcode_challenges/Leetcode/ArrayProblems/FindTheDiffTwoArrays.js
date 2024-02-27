/* 2215. Find the Difference of Two Arrays 

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

Example 1: 
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Example 2: 
Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]] */ 

var findDifference = function(nums1, nums2) {
  const firstAnswer = [];
  const secondAnswer = [];
  const totalAnswer = [];

  for (let num of nums1) {
      if (!nums2.includes(num)){
          firstAnswer.push(num)
      } 
  }

  for ( let num of nums2) {
      if (!nums1.includes(num)) {
          secondAnswer.push(num)
      }
  }

  totalAnswer.push([...new Set(firstAnswer)])
  totalAnswer.push([...new Set(secondAnswer)])
  return totalAnswer
};

console.log(findDifference([1, 2, 3], [2, 4, 6])) //[[1,3],[4,6]]
console.log(findDifference([1,2,3,3], [1,1,2,2])) //[[3],[]]