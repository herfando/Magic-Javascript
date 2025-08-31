// ===== Classes =====
class Person {
    constructor(name, age){                   // constructor
        this.name = name;
        this.age = age;
    }
    greet(){                                  // method
        return "Hello, " + this.name;
    }
}

const herfando = new Person("Herfando", 25); // create instance
console.log(herfando.greet());               // call method
