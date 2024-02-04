var MinStack = function () {
  let top = 0;
  let min = 2 ** 31 - 1;
  let len = 0;
  let stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(5)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push()
console.log(obj)
