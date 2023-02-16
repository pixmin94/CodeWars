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

function validAnagram2(first, second) {
    if(first.length !== second.length) {
        return false
    }

    const lookup = {}

    for (let i = 0; i < first.length; i++) {
        let letter = first[i]
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i]
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }

    return true
}