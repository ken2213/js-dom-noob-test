/*

  Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.

1. a <p> with red text that says “Hey I’m red!”

2. an <h3> with blue text that says “I’m a blue h3!”

3. a <div> with a black border and pink background color with the following elements inside of it:

  a. another <h1> that says “I’m in a div”

  b. a <p> that says “ME TOO!”

  c. Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

*/

//Selecting "container" on HTML file
const container = document.querySelector('#container');


//Creating Child Element Variables
const newP = document.createElement('p');
const newH3 = document.createElement('h3');
const newDiv = document.createElement('div');


//Styling Child Elements

newP.textContent = "Hey I'm Red";
newP.style.color = "red";

newH3.textContent = "I'm a blue h3!";
newH3.style.color = "blue";

newDiv.style.backgroundColor = "pink";
newDiv.style.borderColor = "black";
newDiv.style.borderWidth = "thick";
newDiv.style.borderStyle = "solid";

//Appending Child Nodes to Parent Node 
container.appendChild(newP);
container.appendChild(newH3);
container.appendChild(newDiv);


// The newDiv will become a Parent Node and it will have Child Nodes

//Creating Child Element Variables
const newDivH1 = document.createElement("h1");
const newDivP = document.createElement("p");

//Styling Child Element Variables
newDivH1.textContent = "Anong gentle gentle?";
newDivP.textContent = "Gusto mo bang makita ang aking isandaang porsyentong lakas"


//Appending Child Nodes to Parent Node
newDiv.appendChild(newDivH1);
newDiv.appendChild(newDivP);


