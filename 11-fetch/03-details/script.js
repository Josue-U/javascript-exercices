/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const tpl = document.querySelector("tpl-hero");
    const tagret = document.querySelector("#target");
    const input = document.querySelector("#hero-id");
    
    document.querySelector("#run").addEventListener("click", async () =>{
        const id = +input.value;

        if (isNaN(id) || id === 0){
            console.error("Invalid id !");
            return;
        }

        try{
            const reponse = await fetch(`http://localhost:3000/heroes/${id}`);
            const {name, alterEgo, abilities} = await response.json();

            const elt = tpl.cloneNode(true).textContent;

            elt.querySelector(".name").innerText = name;
            elt.querySelector(".alter-ego").innerText = alterEgo;
            elt.querySelector(".powers").innerText = abilities.join(", ");

            target.firstElementChild
                ? target.replaceChild(elt, tagret.firstElementChild)
                : target.appendChild(elt);
        }
        catch (err){
            console.error(`Unknown hero whith id: ${id}!`);
        }
    });
})();
