function packShirts(numOfBags, numOfShirts) {
  /*
    Each element is considered contents of bags where indices are the bag numbers..there are two possible contents, shirts indicated by numbers or bags indicated with an index of the array
  */
  let bags = [];

  /*
    highest number of bags but is lower than the total bags that can be filled equally with all the shirts
  */
  let optimalBags; //highest number of bags but is lower than the total bags that can be filled equally with all the shirts

  for (let i = numOfBags; i > 0; i -= 1) {
    if (numOfShirts % i == 0) {
      optimalBags = i; //highest value of bags that can be filled equally

      for (let i = 0; i < optimalBags; i++) {
        bags[i] = numOfShirts / optimalBags; // fill the first optimal number of bags with shirts
      }

      for (let i = optimalBags; i < numOfBags; i++) {
        bags[i] = `bags[${i - optimalBags}]`; // fill the remaining bags with with filled up bags
      }
      break;
    }
  }
  // console.log(bags)
  return bags; // return the array of bags
}
// Read inputs from command-line arguments
const numOfBags = parseInt(process.argv[2]);
const numOfShirts = parseInt(process.argv[3]);

// Call the solution function with inputs
const result = packShirts(numOfBags, numOfShirts);
console.log(result);
