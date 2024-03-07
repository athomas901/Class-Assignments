//03/05 Tuesday

//Regular Expressions have a pattern, input and a method
//Square Bracket Exercise
//Square brackets are used to create a matching list or any one of the characters in the bracket

const pattern = '[Aa]pple|[Bb]anana/g  //this square bracket means either A or a
const txt = 'Apple and banana are fruits.  An old cliche says an apple a day keeps the doctor away'
const matches = txt.match(pattern)
console.log(matches)