/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat extends Animal{
        constructor(name){
            super(name);
        }
        static greeting = "Meow !"
    }

    class Dog extends Animal{
        constructor(name){
            super(name);
        }
        static greeting = "Wouf !"
    }

    document.querySelector("#run").addEventListener("click", function() {
    

        let d = new Dog ("John");
        let z = new Cat ("Cena");
        console.log(d.sayHello());
        console.log(z.sayHello());
    });

    // à corriger
    

})();
