// utils.js
export function greet(name){ return "Hello, " + name; }  // greet function
export const PI = 3.14;                                   // constant

// main.js
import { greet, PI } from "./utils.js";       // import functions
console.log(greet("Herfando"));              // Hello, Herfando
console.log(PI);                             // 3.14
