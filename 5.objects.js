let person = {
    name: "Herfando",          // property name
    age: 25,                   // property age
    greet: function() {        // method greet
        console.log("Hello, " + this.name); // print greeting
    }
};

person.greet();                // call greet method
console.log(person.age);       // access age property
