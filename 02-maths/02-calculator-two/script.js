/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var opone = (parseFloat (document.getElementById("op-one").value) );
    var optwo = (parseFloat (document.getElementById("op-two").value));
    
    const performOperation = operation => {
        // perform the operation

        

        switch (operation){

            case "addition": 
            alert(opone + optwo);
            break;
            case "substraction": 
            alert(opone - optwo);
            break;
            case "multiplication": 
            alert(opone * optwo);
            break;
            case "division": 
            alert(opone / optwo);
            break;
        }
        
       
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
