// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const paragraph = document.querySelector("p")
console.log(paragraph)
// Get each of the the paragraph using document.querySelector('#id') and by their id

const paragraphOne =document.querySelector('#One')
console.log(paragraphOne)


const paragraphThree =document.querySelector('#One')
console.log(paragraphThree)
// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

const nodeList = document.querySelectorAll("p")
console.log(nodeList)
// Loop through the nodeList and get the text content of each paragraph

const paragraphs = document.querySelectorAll("P");
paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph

paragraphs[3].textContent = "Fourth Paragraph";

// Set id and class attribute for all the paragraphs using different attribute setting methods

paragraphs.forEach((paragraph, index)=>{paragraph.id = `paragraph${index+1}`;

paragraph.className = `paragraphClass`})