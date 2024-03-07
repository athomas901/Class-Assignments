//Tuesday 03/05

//Escape character(\) in RegExp
//To match a character having special meaning in regex, you need to use escape
//sequence prefix with a backslash(\)

const pattern =/\d/g  // d is a special character which means digits (0-9)
const txt = 'This regular expression example was made in January 12, 2020.'
const matches = txt.match(pattern)

console.log(matches)  //["1", "2", "2", "0", "2", "0"], /9 indicates 0-9

//This example includes the number 12
const pattern = /\d+/g //d is a special character which means digits, the + allows you to go past nine.
const txt = 'This  regular expression example was made in January 12, 2020.'
const matches = txt.match(pattern)

console.log(matches)  //["12", "2020"]