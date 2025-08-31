// ===== LocalStorage =====
localStorage.setItem("username", "Herfando");   // save item
console.log(localStorage.getItem("username"));  // get item
localStorage.removeItem("username");            // remove item

// ===== SessionStorage =====
sessionStorage.setItem("sessionId", "12345");  // save session
console.log(sessionStorage.getItem("sessionId")); // get session
