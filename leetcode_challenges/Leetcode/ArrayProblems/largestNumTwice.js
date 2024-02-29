/* 
747. Largest Number At Least Twice of Others

You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

Example 1:
Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.

Example 2:
Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.
*/

var dominantIndex = function(nums) {
  const max = Math.max(...nums) //find max value in array
  const maxNumIndex = nums.indexOf(max) //find index of max value
  let counter = 0; //counter for numbers that do not meet the condition 

  nums.forEach((num, idx) => {
  //if it is not the largest num && the largest is less than 2x current num 
      if (num * 2 > max && idx !== maxNumIndex) {
          counter++ //increment falsy counter
      } 
  })

  if (counter == 0) { //if counter is 0, all other nums are less than 1/2 the max
      return maxNumIndex //return index of largest num
  } else {
      return -1 // otherwise return -1
  }
}
