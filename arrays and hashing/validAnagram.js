var isAnagram = function(s="",t=""){
    dictS = {}
    dictT = {}

    if(s.length != t.length){
        return false;
    }
    for (let i=0; i<s.length; i++){
        if(s[i] in dictS){
            dictS[s[i]] = ++dictS[s[i]];
        }
        else {
            dictS[s[i]] = 1;
        }

        if(t[i] in dictT){
            dictT[t[i]] = ++dictT[t[i]];
        }
        else{
            dictT[t[i]] = 1;
        }
    }
    for (i of s){
        if (!(i in dictT)){
            return false
        }
        if (!(dictS[i] == dictT[i])){
            return false
        }
    }
    // console.log(dictS)
    // console.log(dictT)
    return true;
}
// Read inputs from command-line arguments
const s = process.argv[2];
const t = process.argv[3];

// Call the solution function with inputs
const result = isAnagram(s, t);
console.log(result);