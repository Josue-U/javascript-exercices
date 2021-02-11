/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function() {

        var current = new Date();

        var cdms = Date.now(); // en millisecond depuis 1970?

        var currentDate = current.toDateString();
        var currentDay = current.getDay();
        var currentMonth = current.getMonth() + 1;
        var currentYear = current.getFullYear();

        //il faut que l'année passe  à la suivnte lorsque dobmonth > month alors si dobday > day = on peut ajouté +1 à l'age 

       // var dob =  new Date();//(dobYear,dobMonth - 1,dobDay);

        var dobDay = document.getElementById("dob-day").value;
        var dobMonth = document.getElementById("dob-month").value;
        var dobYear = document.getElementById("dob-year").value;

        var age = currentYear - dobYear;

        if (currentMonth <= dobMonth & currentDay < dobDay){
            console.log(age -1);
        }

        else{
            console.log(age);
        }







        

    

    });

})();
