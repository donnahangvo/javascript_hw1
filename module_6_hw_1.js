//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/


// Turn dog_string into an array for each word .split()
// Loop through each index to match arrays 


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


// const newString = dog_string.replace(",", "");
// const stringArray = newString.split(" ");

// console.log(stringArray)

// dogArray = stringArray

// for (let i = 0; i < dog_names.length; i++){
//     const value = dog_names[i];
//     console.log(value)

//     if (dog_names[i] !== dogArray[i]){
//         return false;
//     }
//     return true;
// }


function findWords(string, list){
    //Your code goes here
    
    
    const newString = string.replace(",", "");
    const dogStringArray = newString.split(" ");
    console.log(dogStringArray);

    console.log(list);

    for (let i = 0; i < list.length; i++){
        // const word = dogStringArray[i];
        if (list[i] === dogStringArray[i]) {
            return "Matched dog_names"
        }
        return "No Matches"
    }

}

//Call method here with parameters
console.log(findWords(dog_string, dog_names))






//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

givenArr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr){
    //code goes here
for (let i = 0; i < arr.length; i += 2){
    const newArr = arr.replace([i], "even index");
    console.log (newArr)
}

    // }


// console.log(replaceEvens(givenArr))


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"] 