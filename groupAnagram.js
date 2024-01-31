var groupAnagrams = function (strs) {
  // console.log(strs)
  result = [];
  usedSet = new Set();
  for (let i = 0; i < strs.length; i++) {
    if (!usedSet.has(strs[i])) {
      anagramGroups = [strs[i]];
      for (let j = i + 1; j < strs.length; j++) {
        if (strs[i].length == strs[j].length) {
          let count = new Array(26).fill(0);
          for (let k = 0; k < strs[i].length; k++) {
            count[strs[i].charCodeAt(k) - "a".charCodeAt(0)]++;
          }
          for (let k = 0; k < strs[j].length; k++) {
            count[strs[j].charCodeAt(k) - "a".charCodeAt(0)]--;
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
