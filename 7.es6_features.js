// Arrow function
const multiply = (x, y) => x * y;   // x and y are parameters

// Template literals
let name = "Herfando";
console.log(`Hello, ${name}`);      // embed variable in string

// Destructuring
const user = { id: 1, username: "magic" };
const { id, username } = user;      // extract id and username

// Spread operator
const nums1 = [1,2,3];
const nums2 = [...nums1,4,5];       // copy elements and add more
console.log(nums2);
