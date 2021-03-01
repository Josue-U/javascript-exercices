/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click", function(){
        
        let myCat1 = new Cat("Skitty", "9 years old");
        let myCat2 = new Cat("Pixel", "6 years old");
        console.log(myCat1);
        console.log(myCat2);
    });
})();
