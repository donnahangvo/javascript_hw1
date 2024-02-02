//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/


// Turn dog_string into an array for each word .split()
// Loop through each index to match arrays 


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// console.log(typeof(dog_names))



function findWords(string, list) {
    //Your code goes here
    
    
    // const newString = string.replace(",", "");
    // const dogStringArray = newString.split(" ");
    // console.log(dogStringArray);

    console.log(list);

    for (let i = 0; i < list.length; i++){
        const dogArray = list[i];
        // console.log(dogArray)
        if (string.match(dogArray)) {
            return "Matched dog_names"
        }
        return "No Matches"
    }

}

//Call method here with parameters
console.log(findWords(dog_string, dog_names))

console.log("End of Exercise #1")


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// // console.log(typeof(givenArr))
console.log(givenArr)

function replaceEvens(arr){
//     // code goes here
    for (let i = 0; i < arr.length; i += 2){
        arr.splice(i, 1, "even index");
        console.log(arr)
    }
}

replaceEvens(givenArr)

console.log("End of Exercise #2")



// FAILED CODE PLEASE IGNORE -_-


    // const replacedEvens = arr[i] 
    // console.log(replacedEvens)
    // const newStr = replacedEvens.replaceAll(replacedEvens, 'even index');
    // console.log(newStr);
    // console.log(arr)

    // const replacedEvens = arr[i]
    // if (replacedEvens.forE) {
    //     arr.splice(i, 1, "even index");
    // }
    // console.log(arr)

    // const replacedEvens = arr[i] // picks out the right elements of array
    // // console.log(typeof(replacedEvens))
    // const newArr = arr.splice(replacedEvens, 6, 'even index')
    // console.log(newArr)

    // console.log(replacedEvens)
    // const newStr = replacedEvens.replaceAll(replacedEvens, 'even index');
    // console.log(newStr);
    // console.log(arr)
    // const newArr = arr.push(newStr)
    // console.log(newArr)

    // console.log(typeof(newArr))
    // console.log(typeof(arr))
    // console.log(arr.replace(newArr, "even index"))
//     console.log(newArr.forEach(element => console.log()))
    // arr.splice(newArr[i], newArr, "even index");
    // const replaceArr = "even index";
    // arr[newArr] = replaceArr;
    // console.log(arr);
    // let repEven = arr.map( i => ){
    //     for (let i = 0; i < arr.length; i += 2){
    //         arr.splice("even index")
    //     }
    // }




//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"] 


// CODEWARS PROBLEMS

// Array plus array
// def array_plus_array(arr1,arr2):
//     return sum(arr1 + arr2)

function sumArrPlus(arr1,arr2){
    function sumArr(arr){
        let sum = arr [0];
        for (i = 1; i < arr.length; i++){
            sum = sum +arr[i];
        }
    return sum;
}

return sumArr(arr1)+ sumArr(arr2);

}

console.log(sumArrPlus([1,2,3], [1,2,3]))
console.log(sumArrPlus([10,20,30], [10,20,30]))

console.log("End of CodeWars Problem #1")

// MakeUpperCase
// def make_upper_case(s):
//     return s.upper()

function makeUpperCase(s){
    const upperCase = s.toUpperCase()
    return upperCase
}

console.log(makeUpperCase("hello world"))
console.log(makeUpperCase("this is a test"))

console.log("End of CodeWars Problem #2")

// Remove First and Last Character
// def remove_char(s):
//     return s[1:-1]

function removeChar(s){
    return s.slice(1,-1);
}

console.log(removeChar("this is a test"))
console.log(removeChar("another test"))

console.log("End of CodeWars Problem #3")

// Convert a String to a Number!
// def string_to_number(s):
//     return int(s)

function stringToNumber(s){
    return Number(s)
}

console.log(stringToNumber("20"))
console.log(stringToNumber("30000"))

console.log("End of CodeWars Problem #4")