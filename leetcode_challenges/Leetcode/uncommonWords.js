/*
884. Uncommon Words from Two Sentences

A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

Example 1:
Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]

Example 2:
Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]
*/

var uncommonFromSentences = function(s1, s2) {
  //words -> arrays 
  let words1 = s1.split(" ");
  let words2 = s2.split(" ");

  map1 = {}
  map2 = {}
    //map1[word]: This is accessing the value associated with the key word in the hash map of map1. If word is "apple", map1['apple'] would give you the number of times "apple" has been encountered so far in s1, which is only once. 
  
  for (let word of words1) {
    map1[word] = (map1[word] || 0) + 1;
  //map2[word] || 0. This wil use the logical OR operator II. If map1[word] is undefined, which happens the first time a new word is encounted, since it is not yet a key in the map, the expression will evaluate to 0. If map2[word] is already defined, meaning the word has been encounted before, it will use that value. It will use that value. If map1[word] doesn't exsist, the it will use 0 as the default value. 
    //+1 increments the count by 1
    //increase the count of word in map2 by 1, and if word isn't in the map2 yet, start counting from 1
  }
    for (let word of words2) {
      map2[word] = (map2[word] || 0) + 1; 
    }
  
    let uncommonWordsArray = [];
  
    for (let word in map1) {
      if (map1[word] === 1 && !map2[word]) {
        uncommonWordsArray.push(word)
      }
    }
    for (let word in map2) {
      if (map2[word] === 1 && !map1[word]) {
        console.log('map2[word] after', map2[word])
        uncommonWordsArray.push(word)
      }
    }
    return uncommonWordsArray
  };
  
  console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"))