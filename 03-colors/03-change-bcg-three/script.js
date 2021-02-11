/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function() {

       var colors =["green","yellow","red","purple","orange","grey","pink","blue","lightblue","black"];
       
        

        Array.prototype.sample = function(){  //ramdomisator de tab[]: The function
            return this[Math.floor(Math.random()*this.length)];
        }
          
        
        document.querySelector("body").style.backgroundColor = colors.sample();
        


        
           
       
    

    });

})();
