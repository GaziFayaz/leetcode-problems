/**
 * Groups the given array of strings into anagrams.
 * Anagrams are strings made up of the same letters.
 *
 * Loops through the array to find all anagrams for each string.
 * Uses character counts to check if two strings are anagrams.
 * Stores grouped anagrams in result array.
 * Uses a Set to avoid duplicate checks.
 * Returns the array of anagram groups.
 */
var groupAnagrams = function (strs) {
  // console.log(strs)
  result = [];
  usedSet = new Set();
  for (let i = 0; i < strs.length; i++) {
    if (!usedSet.has(strs[i])) {
      anagramGroups = [strs[i]];
      for (let j = i + 1; j < strs.length; j++) {
        if (strs[i].length == strs[j].length) {
          let count = new Array(26).fill(0); // creating an array of size 26 filled with zeros. each position indicates count of a letter in the alphabet.
          for (let k = 0; k < strs[i].length; k++) {
            count[strs[i].charCodeAt(k) - "a".charCodeAt(0)]++; // comparing current letter code with base letter code which is 'a' to determine the index of the current letter in count array. then incrementing the count of the current letter by 1.
          }
          for (let k = 0; k < strs[j].length; k++) {
            count[strs[j].charCodeAt(k) - "a".charCodeAt(0)]--; // comparing current letter code with base letter code which is 'a' to determine the index of the current letter in count array. then decreasing the count of the current letter by 1.
          }
          if (count.every((x) => x == 0)) {
            anagramGroups.push(strs[j]);
            usedSet.add(strs[j]);
          }
        }
      }
      result.push(anagramGroups);
    }
  }
  return result;
};
const args = process.argv.slice(2);
const strs = args.slice(0, args.length);
// console.log(strs)
result = groupAnagrams(strs);
console.log(result);
console.log(result.length)