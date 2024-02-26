/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (numbers, target) {
	low = 0;
	high = numbers.length - 1;
	while (low < high) {
		if (numbers[low] + numbers[high] === target) {
			break;
		} else if (numbers[low] + numbers[high] > target) {
			high--;
		} else {
			low++;
		}
	}
	return [low + 1, high + 1];
};

const args = process.argv.slice(2);
// console.log(args)
const target = parseInt(args.splice(args.length - 1)[0]);
const numbers = args.map((x) => {
	return parseInt(x);
});
const result = twoSum(numbers, target);
console.log(result);
