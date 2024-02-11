/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	const processedS = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
	let i = 0;
	let j = processedS.length - 1;
	while (i <= processedS.length / 2) {
		if (processedS.charAt(i) !== processedS.charAt(j)) {
			return false;
		}
		i++;
		j--;
	}
	return true;
};

const s = "race a car";
const result = isPalindrome(s);
console.log(result);
