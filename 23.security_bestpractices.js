// ===== Input Validation =====
function sanitize(input){
    return input.replace(/<[^>]*>/g,''); // remove HTML tags
}
console.log(sanitize("<script>alert(1)</script>")); // prints empty string

// ===== XSS Prevention Example =====
const userInput = "<img src=x onerror=alert(1)>";
const safeDiv = document.createElement("div");
safeDiv.textContent = userInput; // renders as text, not HTML
document.body.appendChild(safeDiv);
