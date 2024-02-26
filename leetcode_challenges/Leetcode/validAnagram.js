/*
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
    const arrayS = s.split("").sort().join("")
    const arrayT = t.split("").sort().join("")

  return arrayS === arrayT

};
console.log(isAnagram(s = "anagram", t = "nagaram"))
console.log(isAnagram( s = "rat", t = "car"))
