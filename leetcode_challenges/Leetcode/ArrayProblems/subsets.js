/* In this challenge you are given an array of unique integers. Your job is to return all the possible combinations of unique pairs (2 integers only). No duplicate pairs are allowed. Below are some examples:

    #Example 1
    Input: [1, 2, 3, 4]
    Output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
    
    #Example 2
    Input: [54, 77]
    Output[[54, 77]]
    
    #Example 3
    Input: []
    Output: [] */

    const subsetArray = (array) => {
      const outcome = [];

      for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
          outcome.push([array[i], array[j]])
        }
      }
      return outcome
    }
    console.log(subsetArray([1, 2, 3, 4]))
    console.log(subsetArray([54, 77]));     
    console.log(subsetArray([]));   


  
