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
Output: [[3],[]]
/* 

/* 
PSEUDOCODE
//Goal: return an array of the nums1 and nums2 array
//1. Iterate through both arrays
  a. use a for of loop?
//2. conditional
    //a. if nums1 value is also found in nums2 value, we don't want it in the new array
        //will need to remove the value? slice method?
        //push into a new array? 
        //then push that array into another array
    //b. if nums1 value is not found in nums2 arry, keep the values in the array
//3. will need to push the array into an empty array
  //will need to push that into the empty array
  //empty array will have both arrays in it
//4. return the empty array 

//nums1.length => 1, which means that there will always be something in it
//nums2.length <= 1000, will never be larger than 1000 elements
//nums1[i] => -1000
//nums2[i] <= 1000
*/

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