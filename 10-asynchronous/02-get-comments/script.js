/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", function() {

        window.lib.getPosts ( function(error,array){

            let tabPost = array;
            //console.log(tabA);//test
            
            tabPost.forEach(element =>  {

                window.lib.getComments(element.id, function(error,comments){

                    
                    if(error){
                        console.log(error);
                    }
                    else{
                        //console.log(array); // comments from users
                        tabPost.push(comments);
                        console.log(tabPost); //FINAL result
                    }                    

                });
                
            });


        
        /* */    
          
             
        });

    });

})();
