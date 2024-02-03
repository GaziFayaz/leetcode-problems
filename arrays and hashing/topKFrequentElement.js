/**
 * Function to find the k most frequent elements in an array.
 * @param {number[]} nums - The array of numbers.
 * @param {number} k - The number of most frequent elements to find.
 * @returns {number[]} - An array of the k most frequent elements.
 */
var topKFrequent = function (nums, k) {
    // An empty object 'count' is created to store each number from the 'nums' array as a key and its frequency as the value.
    let count = {};

    // A for loop is used to iterate over the 'nums' array.
    for (let i = 0; i < nums.length; i++) {
        // For each number in the 'nums' array, if the number already exists as a key in the 'count' object, its value (frequency) is incremented by 1.
        // If the number does not exist as a key in the 'count' object, it is added with a value (frequency) of 1.
        count[nums[i]] = (count[nums[i]] || 0) + 1;
    }

    // An empty array 'result' is created to store the 'k' most frequent numbers.
    let result = [];

    // A for loop is used to iterate 'k' times.
    for (let i = 0; i < k; i++) {
        // Variables 'max' and 'max_key' are created and set to 0 and empty string respectively.
        // These will be used to keep track of the number with the highest frequency and its corresponding key.
        let max = 0;
        let max_key = "";

        // A for-of loop is used to iterate over the entries in the 'count' object.
        for (const [key, value] of Object.entries(count)) {
            // If the frequency of the current key is greater than 'max', 'max' is updated to the current frequency and 'max_key' is updated to the current key.
            if (value > max) {
                max = value;
                max_key = key;
            }
        }

        // The key with the highest frequency is added to the 'result' array.
        result.push(max_key);

        // The key that was just added to the 'result' array is removed from the 'count' object to prevent it from being added to the 'result' array again in the next iteration.
        delete count[max_key];
    }

    // The 'result' array, which contains the 'k' most frequent numbers, is returned.
    return result;
};

const args = process.argv.slice(2);
const k = args.slice(args.length - 1);
const nums = args.slice(0, args.length - 1).map((num) => {
    return parseInt(num);
});
console.log(nums);
console.log(k);
const result = topKFrequent(nums, k);
console.log(result);
