// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Please read all questions thoroughly
// Psuedo coding is highly recommended


// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212
const tempPoint = (temp) => {
    //checks for temp below boiling point.
    if (temp < 212) {
        return `${temp} is below boiling point`
    }
    //checks for temp above boiling point.
    else if (temp > 212) {
        return `${temp} is above boiling point`
    }
    //checks for temp that is boiling point.
    else {
        return `${temp} is at boiling point`
    }
}
console.log(tempPoint(temp1));
console.log(tempPoint(temp2));
console.log(tempPoint(temp3));



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]
const multiply = (array) => {
    //create new array to put modified #'s in.
    let newArray = []
    //loop through each index.
    for (let i = 0; i < array.length; i++) {
        //push the index value multiplied by 5 into newArray.
        newArray.push(array[i] * 5)
    }
    return newArray
}
console.log(multiply(myNumbers1));



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]
const multiplier = (array) => {
    //gives back index value that is multiplied by 5. 
    return array.map(value => {
        return value * 5
    })
}
console.log(multiplier(myNumbers2))



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
const vowelRem = (string) => {
    //separeates string into array, filters out any vowels and puts them into a new array, then joins the array together to form a string again.
    return string.split("").filter(value => {
        return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
    }).join("")
}
console.log(vowelRem(stringWithVowels1));
console.log(vowelRem(stringWithVowels2));



// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

var notAString1 = true
var notAString2 = 42
const vowelRem2 = (string) => {
    //checks to see if string is not type string
    if (string !== "string") {
        return `${string} is not a string`
    }
    else {
        return string.split("").filter(value => {
            return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
        }).join("")
    }
}
console.log(vowelRem2(notAString1));
console.log(vowelRem2(notAString2));



// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [{ name: "Itchy", animal: "mouse" },
{ name: "Stimpy", animal: "cat" },
{ name: "Daffy", animal: "duck" },
{ name: "Scratchy", animal: "cat" },
{ name: "Ren", animal: "dog" },
{ name: "Felix", animal: "cat" }]
const toonObjects = (array) => {
    //filters out objects that are not cats.
    return array.filter(value => {
        return value.animal === "cat"
    })
}
console.log(toonObjects(toonimals));



// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

const noCats = (array) => {
    //filters out all cat objects.
    let animal = array.filter(value => {
        return value.animal !== "cat"
    })
    //returns a new array that holds the names of the animals.
    let names = animal.map(value => {
        return value.name
    })
    //joins the names of animals from array to string.
    return names.join(" ")
}
console.log(noCats(toonimals));