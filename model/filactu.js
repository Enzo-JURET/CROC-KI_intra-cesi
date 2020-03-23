

$( document ).ready(function() {
    
      
    
    var menuevent = document.getElementById("menuevent"); 
   
    var menutout = document.getElementById("menutout");

    var menuactu = document.getElementById("menuactu");


    $('#menutout').on('click', function () {
        menu("tout");
      })

      $('#menuevent').on('click', function () {
        menu("event");
      })
      $('#menuactu').on('click', function () {
        menu("actu");
      })

    });


   

      
      



function menu(type)//permet d'afficher ou de cacher les block'
{

    


    var contenu = document.getElementById("contenu");
    if(type=="tout")
    { 
        
        var x = contenu.getElementsByClassName("divEvent");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";  
    } 
    var x = contenu.getElementsByClassName("divActu");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";  
    }
       

    }
    else if(type=="event")
    {
        console.log("test9");


        var x = contenu.getElementsByClassName("divActu");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        } 
        var x = contenu.getElementsByClassName("divEvent");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "block";  
        }

       // contenu.getElementsByClassName("divEvent").display = "none";  

    }
    else if(type=="actu")
    {
        console.log("test9");


        var x = contenu.getElementsByClassName("divEvent");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        } 
        var x = contenu.getElementsByClassName("divActu");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "block";  
        } 

       // contenu.getElementsByClassName("divEvent").display = "none";  

    }


}



