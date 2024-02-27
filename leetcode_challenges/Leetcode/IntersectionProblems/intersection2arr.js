/* 
349. Intersection of Two Arrays

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

var intersection = function(nums1, nums2) {
  let intersectionSet = new Set()
  //create an object of values
  for (let num of nums1) {
    if (nums2.includes(num)) {
   //if it is included, add the number to the empty set object, which will contain the value {2}. Will not have any duplicates because of the Set method.
  intersectionSet.add(num)
    }
  }
  return Array.from(intersectionSet)
  //Array.from will change the array-like object into an array
  //Array.from() lets you create Arrays from: iterable objects (objects such as Map and Set); or, if the object is not iterable,  array-like objects (objects with a length property and indexed elements).
};

console.log(intersection(nums1 = [1,2,2,1], nums2 = [2,2])) //output [2]