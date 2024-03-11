/* Instructions
You are given three arrays of equal size. Each array has 1 million RANDOM integer values.

Assume that each array is already sorted in ascending order and that no individual array has any duplicate values.

Your goal is to write a method/function that will return an array of any/all values which are present in all three arrays.

Bonus: Once you’ve found a working solution, try to optimize to run in O(n) time and 1x space complexity.

Small Scale Example Below
    #JavaScript
    nums1 = [1, 2, 4, 5, 8]
    nums2 = [2, 3, 5, 7, 9]
    nums3 = [1, 2, 5, 8, 9]
    findMatches(nums1, nums2, nums3)
    => [2, 5]
*/

//solving it with filter method

      nums1 = [1, 2, 4, 5, 8]
      nums2 = [2, 3, 5, 7, 9]
      nums3 = [1, 2, 5, 8, 9]
      
const findMatches = (nums1, nums2, nums3) => {
  const filterMatch = nums1.filter(item => nums2.includes(item) && nums3.includes(item)) 
    return filterMatch
}

console.log(findMatches([1, 2, 4, 5, 8], [2, 3, 5, 7, 9], [1, 2, 5, 8, 9]))

//solving it with a 3-pointer approach

const find_Matches = (nums1, nums2, nums3) => {
  let i = 0, j = 0, k = 0;
  const result = [];

  while (i < nums1.length && j < nums2.length && k < nums3.length) {
    if (nums1[i] === nums2[j] && nums3[k]) {
      result.push(nums1[i]);
      i++;
      j++;
      k++;
    } else {
      // Increment the smallest value's pointer to try to find a match
      if (nums1[i] < nums2[j] || nums1[i] < nums3[k]) {
        i++;
      } else if (nums2[j] < nums1[i] || nums2[j] < nums3[k]) {
        j++;
      } else {
        k++;
      }
    }
  }
  return result;
}

console.log(find_Matches([1, 2, 4, 5, 8], [2, 3, 5, 7, 9], [1, 2, 5, 8, 9]))

