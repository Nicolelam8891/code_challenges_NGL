/* 
2154. Keep Multiplying Found Values by Two

You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

You then do the following steps:

If original is found in nums, multiply it by two (i.e., set original = 2 * original).
Otherwise, stop the process.
Repeat this process with the new number as long as you keep finding the number.
Return the final value of original.

Example 1:
Input: nums = [5,3,6,1,12], original = 3
Output: 24
Explanation: 
- 3 is found in nums. 3 is multiplied by 2 to obtain 6.
- 6 is found in nums. 6 is multiplied by 2 to obtain 12.
- 12 is found in nums. 12 is multiplied by 2 to obtain 24.
- 24 is not found in nums. Thus, 24 is returned.

Example 2:
Input: nums = [2,7,9], original = 4
Output: 4
Explanation:
- 4 is not found in nums. Thus, 4 is returned.
*/

//Used a while loop because I needed to repeat an action until a certain condition ahcnges. It will continue to execute the condition as long as it remains true
//Need to repeat a block of code based on a condition that changes over time
//for...of loop is used when you need to iterate over each item in an iterable (array or string) and you know in advance that you want to examine or perform actions on each of those items

var findFinalValue = function(nums, original) {

  let currNum = original 
  
  //sorting it first makes it faster
  nums.sort((a, b) => a - b)

  //used a while loop to check if current is in nums, if it is, it will double the original value; otherwise, it'll stop.
      while (nums.includes(currNum)) {
      currNum = currNum * 2
      }
      return currNum //update the original value, which is what we are looking for
  }