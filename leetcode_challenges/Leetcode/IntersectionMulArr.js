/* 
2248. Intersection of Multiple Arrays

Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.
 
Example 1:
Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
Output: [3,4]
Explanation: 
The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].

Example 2:
Input: nums = [[1,2,3],[4,5,6]]
Output: []
Explanation: 
There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].
*/

var intersection = function(nums) {
//start with an array first
  let sameNums = nums[0]

  for (let i = 1; i < nums.length; i++){ 
      sameNums = sameNums.filter(num => nums[i].includes(num))
  //will return truthy
  }
//sort ascending order
return sameNums.sort((a, b) => a - b);
};

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))
console.log(intersection([[1,2,3],[4,5,6]]))

//for of loop version 

var intersection = function(nums) {
  let sameNums = nums[0]

//skip over first array
  for (const array of nums.slice(1)) {
  sameNums = sameNums.filter(num => array.includes(num))
  }
  return sameNums.sort((a, b) => a - b)
};

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))
console.log(intersection([[1,2,3],[4,5,6]]))
