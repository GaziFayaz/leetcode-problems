/**
 * Function to return an array output such that output[i] is equal to the product of all the numbers in the original array except nums[i].
 * @param {number[]} nums - The array of numbers.
 * @returns {number[]} - An array where each element is the product of all the numbers in the original array except for the number at the same index.
 */
var productExceptSelf = function (nums) {
    // Two arrays 'leftArr' and 'rightArr' are created and filled with 1s. They will store the product of all numbers to the left and right of each number in 'nums' respectively.
    let leftArr = Array(nums.length).fill(1);
    let rightArr = Array(nums.length).fill(1);

    // A for loop is used to iterate over the 'nums' array from the second element to the end.
    for (let i = 1; i < nums.length; i++) {
        // For each number, the product of all numbers to its left is calculated and stored in 'leftArr'.
        leftArr[i] = leftArr[i - 1] * nums[i - 1];
    }

    // A for loop is used to iterate over the 'nums' array from the second last element to the start in reverse order.
    for (let i = nums.length - 2; i >= 0; i--) {
        // For each number, the product of all numbers to its right is calculated and stored in 'rightArr'.
        rightArr[i] = rightArr[i + 1] * nums[i + 1];
    }

    // An empty array 'result' is created to store the final result.
    let result = [];

    // A for loop is used to iterate over the 'nums' array.
    for (let i = 0; i < nums.length; i++) {
        // For each number, the product of the corresponding elements in 'leftArr' and 'rightArr' is calculated and added to 'result'.
        result.push(leftArr[i] * rightArr[i]);
    }

    // The 'result' array, which contains the product of all numbers in 'nums' except for the number at the same index, is returned.
    return result;
};

const args = process.argv.slice(2);
let nums = args.map((args) => {
    return parseInt(args);
});
console.log(nums);
let result = productExceptSelf(nums);
// console.log(result);
