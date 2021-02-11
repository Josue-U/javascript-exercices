/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {

        var year =document.getElementById("year").value;

        var d = new Date(year);
        d.setDate(13);

        for (var i =0; i <= 11 ; i++){

            d.setMonth(i);
            var day = d.getDay();

            if (day == 5){
                console.log(d);
            }

        }


        

    });

})();
