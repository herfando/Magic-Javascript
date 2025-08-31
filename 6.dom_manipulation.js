const heading = document.createElement("h1");  // create h1 element
heading.textContent = "Welcome to MagicJS";    // set text content
document.body.appendChild(heading);           // add to webpage

const button = document.createElement("button"); // create button
button.textContent = "Click Me";               // set button text
document.body.appendChild(button);             // add to webpage

button.addEventListener("click", function() {  // add click event
    alert("Button clicked!");                  // show alert on click
});
