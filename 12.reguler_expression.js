// ===== Regular Expressions =====
const pattern = /^[A-Z][a-z]+$/;            // regex: start uppercase, then lowercase
console.log(pattern.test("Herfando"));      // true
console.log(pattern.test("herfando"));      // false

const emailPattern = /\S+@\S+\.\S+/;       // simple email regex
console.log(emailPattern.test("test@mail.com")); // true
