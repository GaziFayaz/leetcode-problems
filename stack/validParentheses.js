/**
 * Function to validate if a given string contains valid parentheses.
 * @param {string} s - The string containing parentheses.
 * @returns {boolean} - Returns true if the string contains valid parentheses, false otherwise.
 */
var isValid = function (s) {

  // An empty array 'stack' is created to store the parentheses.
  let stack = [];

  // A for-of loop is used to iterate over the string 's'.
  for (const c of s) {

      // If the current character is a closing parenthesis, it checks if the last opening parenthesis in the 'stack' matches with it.
      if (c === ")" || c === "}" || c === "]") {

          // If the current character is a closing round parenthesis, it checks if the last opening parenthesis in the 'stack' is a round parenthesis.
          // If not, it returns false.
          if (c === ")" && stack.pop() !== "(") {
              return false;
          }

          // If the current character is a closing curly parenthesis, it checks if the last opening parenthesis in the 'stack' is a curly parenthesis.
          // If not, it returns false.
          if (c === "}" && stack.pop() !== "{") {
              return false;
          }

          // If the current character is a closing square parenthesis, it checks if the last opening parenthesis in the 'stack' is a square parenthesis.
          // If not, it returns false.
          if (c === "]" && stack.pop() !== "[") {
              return false;
          }
      } else {
          // If the current character is an opening parenthesis, it is added to the 'stack'.
          stack.push(c);
      }
  }

  // If there are any remaining opening parentheses in the 'stack', it returns false.
  if (stack.length) {
      return false;
  }

  // If all the parentheses are valid, it returns true.
  return true;
};

const s = process.argv.slice(2);
// console.log(args)
const result = isValid(s[0]);
console.log(result);
