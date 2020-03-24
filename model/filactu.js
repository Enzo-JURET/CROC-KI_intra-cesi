$(document).ready(function () {
  preparation();
  document.getElementById('iconeCentral').src="../public/images/icones/menublanc.png";
  
});
function preparation()//permet d'afficher ou de cacher les block'
  {
  
  
    fil_actualite();
    

    var menu_Evenement = document.getElementById("menu_Evenement");
  
    var menu_Tout = document.getElementById("menu_Tout");
  
    var menu_Information = document.getElementById("menu_Information");
  
   document.getElementById('menu_Tout').addEventListener('click', function(e) {
    menu("tout");
    });
  
    document.getElementById('menu_Evenement').addEventListener('click', function(e) {
      menu("event");
      });
      document.getElementById('menu_Information').addEventListener('click', function(e) {
        menu("actu");
        });

    }

function fil_actualite()//permet d'afficher ou de cacher les block'
{
  var tabreturn = [];
  console.log("test12");

  $idUtilisateur = getCookie("id");
  var donnees = [];

  console.log("test13");
  $.ajax({
    cache: false,
    url: "../data/fil_actualite",
    type: "POST",
    async: false,
    data: ({
      //clef:'amis',
      //  idUser: $idUtilisateur
    }),

    success: function (retVal, statut) {
      console.log("test14");
      tabreturn = JSON.parse(retVal);
         //retVal (console.log(retVal) );  
      console.log("test16");

      for (var i = 0; i < tabreturn.length; i++) {

        if(tabreturn[i].image_profil =="")
        {
        var image_profil = 'public/images/photo_profil/avatar-defaut.png';
        }
        else
        {
          image_profil= tabreturn[i].image_profil;

        }
        if (tabreturn[i].status_actualite == "event") {
          var chaine = " <div class='card    divEvent '>  " + " <div class='row no-gutters'>"
            + "  <div class='col-2 alignement_center pt-4'>"
            + " <a href='../view/profil.php'><img src='../" + image_profil + "' class='avatar'></a>"
            + " <p>" + tabreturn[i].auteur + " </p> <img src='../public/images/icones/calendrier.png' class='icone_titre'>  " + tabreturn[i].date_evenement_actualite + " </div> <div class='col-10'>"
            + "  <div class='card-body'>"
            + " <h5 class='card-title'>" + tabreturn[i].titre_actualite + "  </h5>"
            + "  <h5 class='card-title text-right'>    </h5> <p class='card-text'>"
            + tabreturn[i].description_actualite
       
            + "</p> <p class='card-text'><small class='text-muted'>" + tabreturn[i].date_creation_actualite + "</small></p>"
            + "</div>  </div></div></div>";

          document.getElementById("contenu").insertAdjacentHTML('beforeend', chaine);
        }
        else if (tabreturn[i].status_actualite == "actu") {




          var chaine = "<div class='card mb-12  divActu'> <div class='row no-gutters'> <div class='col-md-2 alignement_center pt-4'>"
            + " <a href='../view/profil.php'><img src='../" + image_profil + "' class='avatar'></a> <p>" + tabreturn[i].auteur + " </p> <img src='../public/images/icones/information.png' class='icone_titre'> "
            + "</div> <div class='col-md-10'> <div class='card-body'>"
            + " <h5 class='card-title'>" + tabreturn[i].titre_actualite + " </h5>"
            + " <p class='card-text'>"
            + tabreturn[i].description_actualite
            
            + " </p> <p class='card-text'><small class='text-muted'>" + tabreturn[i].date_creation_actualite + " </small></p>"
            + " </div></div></div></div>";


          document.getElementById("contenu").insertAdjacentHTML('beforeend', chaine);
        }
      }


    },

    error: function (retVal, statut, erreur) {
      console.log("test");
      console.log("test15");
    }
  });

}






function menu(type)//permet d'afficher ou de cacher les block'
{




  var contenu = document.getElementById("contenu");
  if (type == "tout") {

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
  else if (type == "event") {
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
  else if (type == "actu") {
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



