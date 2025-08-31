// ===== Array Methods =====
const numbers = [1,2,3,4,5];
const evens = numbers.filter(n => n % 2 === 0);   // filter even numbers
const sum = numbers.reduce((a,b) => a+b, 0);      // sum of array
console.log(evens); console.log(sum);

// ===== Object Methods =====
const user = { id:1, name:"Magic" };
console.log(Object.keys(user));    // ["id","name"]
console.log(Object.values(user));  // [1,"Magic"]
console.log(Object.entries(user)); // [["id",1],["name","Magic"]]
