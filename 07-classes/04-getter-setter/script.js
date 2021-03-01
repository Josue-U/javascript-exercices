/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const Person = class {
        constructor(firstnme, lastName){
            this.firstnme = firstnme;
            this.lastName = lastName;
        }

        get name(){
            return (`${this.firstnme} ${this.lastName}`);
        }

        set name(text){
            let arrName = text.split(" ");
            this.firstnme = arrName[0];
            this.lastName = arrName[1];
        }
    }

    const fullName = new Person("Jimmy", "Hendrix");
    const newPerson = new Person();
    //newPerson.setName = "Jim Morrisson";

    document.querySelector("#run").addEventListener("click", () => {
        console.log(fullName.name);
        fullName.setName = "John Cena";
        console.log(fullName.getName);
        console.log(newPerson);
    });
})();
