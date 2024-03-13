// //Period(.)

// const pattern = /[a]./g //this square bracket means a and . means any character except new line
// const txt ='Apple and banana fruits'
// const matches = txt.match(pattern)

// console.log(matches)  //["an", "an", "an", "a","ar"]

//FInd all of the letter b and the letter directly behind it (uppercase and lowercase)

//Input string

const str = "I love blue Balloons and brown teddy BEARS because I like to see  the balloons float and the bears play with balls and the bears learn their abc"
const pattern = /[B].[l].[o]/gi
const result = str.match(pattern)
console.log(result)
