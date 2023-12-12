/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong (i){
 if (i.length > 20){
  console.log("That's a long string!")
 }
}

isItLong("This should be longer than 20 letters")

function isItMedium (i) {
  if (i.length >= 10 && i.length <= 20) {
    console.log("That's a regular sized string!")
  }
}
isItMedium("This is a string")


function isItShort (i)  {
  if (i.length < 10) {
    console.log("That's a small string!")
  }
  isItShort("That's a small string!")
}
function howLongIsMyString (i)  {
  if (i.length > 20){
    console.log("That's a long string!")
  }else if (i.length >= 10 && i.length <= 20) {
    console.log("That's a long string!")
  }else if (i.length < 10) {
    console.log("That's a small string!")
  } 

  }
  function personsHeight (i) {
    if (i == "Shaq"){
    console.log(85)
    }else if (i == "Zooey"){
    console.log(65)
    } else{
    console.log("I don't know everyone's height")
    }

  }
    
  
// personsHeight("Shaq")   not really sure about this


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}