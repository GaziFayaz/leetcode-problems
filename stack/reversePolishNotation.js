/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!["+", "-", "*", "/"].includes(tokens[i])) {
      stack.push(parseInt(tokens[i]));
    } else {
      const top = stack.pop();
      const secondTop = stack.pop();
      if (tokens[i] === "+") {
        stack.push(secondTop + top);
      } else if (tokens[i] === "-") {
        stack.push(secondTop - top);
      } else if (tokens[i] === "*") {
        stack.push(secondTop * top);
      } else if (tokens[i] === "/") {
        if(secondTop/top >= 0){
          stack.push(Math.floor(secondTop/top))
        }
        if(secondTop/top<0){
          stack.push(Math.ceil(secondTop/top))
        }
      }
    }
  }
  return stack[0];
};

const tokens = process.argv.slice(2);
console.log(tokens);
const result = evalRPN(tokens);
console.log(`Result is ${result}`);
