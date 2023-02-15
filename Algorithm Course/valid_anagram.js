function validAnagram(string1, string2){
    // check length of strings is same 
    if (string1.length != string2.length) {
        return false
    }
    // array to store frequency counter for each String
    var stringArray1 = []
    var stringArray2 = []
    for (const char of string1) {
        stringArray1[char] = ++stringArray1[char] || 1
    }
    for (const char of string2) {
        stringArray2[char] = ++stringArray2[char] || 1
    }
  
    // loop through one array and check for matching key value pair has same frequency
    for (let key in stringArray1) {
        if (stringArray1[key] !== stringArray2[key]) {
            return false
        }
    }
    // exit loop without false return true
    return true
}  