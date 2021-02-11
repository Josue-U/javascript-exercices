/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

       /* alert(2);
        alert(4);
        alert(10);
        alert(14);
        alert(16);
        alert(23);
        alert(90);  //lol */ 

        var getNumbers = document.getElementById("numbers").value;

        var tableau = getNumbers.split(", ");

        

        for (var i=0;i<tableau.length;i++) {
            tableau[i]=parseInt(tableau[i]);
        }

        for (var x = 0; x < tableau.length - 1; x++) {
            for (var i = 0; i < tableau.length - 1; i++) {
                if (tableau[i] > tableau[i + 1]) {
                    var temp = tableau[i + 1];
                    tableau[i + 1] = tableau[i];
                    tableau[i] = temp;
                }
            }
        }

        console.log(tableau);

        alert(tableau);

    });

})();
