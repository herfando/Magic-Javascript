// ===== Simple Test Example =====
function add(a,b){ return a+b; }
console.assert(add(2,3) === 5, "2+3 should equal 5");
console.assert(add(2,3) === 6, "This will fail and show error");

// ===== Debugging =====
debugger;  // pause code in dev tools
console.log("Check variable values here");
