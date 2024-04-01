/* Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

var longestCommonPrefix = function(strs) {
  //check if array is empty
  if (strs.length === 0) return ""; 

  let prefix = strs[0];
 for (let i = 0; i < strs.length; i++) {

  while (strs[i].startsWith(prefix) === false) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix === "") return "";
  }
 }
return prefix
};