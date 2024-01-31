var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
// Read inputs from command-line arguments
const args = process.argv.slice(2);
const target = parseInt(args.slice(args.length - 1));
const nums = args.slice(0, args.length - 1).map((num) => {
  return parseInt(num);
});
// console.log(args)
// console.log(target)
// console.log(nums)
// Call the solution function with inputs
const result = twoSum(nums, target);
console.log(result);