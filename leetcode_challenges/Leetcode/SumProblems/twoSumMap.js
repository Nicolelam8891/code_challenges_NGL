/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // First, I create a map to store numbers and their corresponding indices
    let numMap = new Map();
    
    // Second, I create a forLoop
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]; // This is the current number
        let complement = target - num; // Complement needed to reach target
        
        // Third, write a conditional to check if the complement exists in the map
        if (numMap.has(complement)) {
            // If it exists, return the indices
            return [numMap.get(complement), i];
        }
        //The function checks if the complement exists in the numMap, if it does, it means that the complement and the currently number num add up to the target

        // If the complement does not exist in the map, the current number num and its index i are added to the map
        numMap.set(num, i);
    }
    
    // If no solution is found, return an empty array
    return [];
};
