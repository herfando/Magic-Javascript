// ===== Event Listeners =====
const btn = document.createElement("button"); // create button
btn.textContent = "Click Me";                 // set text
document.body.appendChild(btn);               // add to page

btn.addEventListener("click", function() {   // click event
    console.log("Button clicked!");          // log when clicked
});

document.addEventListener("keydown", (e) => { // key press event
    console.log(`Key pressed: ${e.key}`);     // show key pressed
});
