function containsDuplicate(nums) {

    let dict = {}
    
    for (let i=0; i<nums.length; i++){
        // for(let j=i+1 ; j<nums.length; j++){
        //     if (nums[i] == nums[j]) return true;
        // }
        if (nums[i] in dict){
            return true
        }
        dict[nums[i]] = 0; 
    }
    return false;

};

// Read inputs from command-line arguments
const numOfBags = parseInt(process.argv[2]);
const numOfShirts = parseInt(process.argv[3]);

// Call the solution function with inputs
const result = containsDuplicate(nums);
console.log(result);