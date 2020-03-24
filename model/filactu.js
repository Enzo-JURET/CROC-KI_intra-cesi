$(document).ready(function () {
  preparation();
  document.getElementById('iconeCentral').src="../public/images/icones/menublanc.png";
  
});
function preparation()//permet de preparer la page
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

       boutonsuppressionActualite();
        

    }

function fil_actualite()//charge le fil d'actualite
{
  var tabreturn = [];

  $idUtilisateur = getCookie("id");
  var donnees = [];

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
      tabreturn = JSON.parse(retVal);
         //retVal (console.log(retVal) );  

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
          var chaine = " <div class='card    divEvent  profil-"+tabreturn[i].identifiant_personne+"'>  " + " <div class='row no-gutters'>"
            + "  <div class='col-2 alignement_center pt-4'>"
            + " <a href='../view/profil.php'><img onclick='BoutonProfil("+tabreturn[i].identifiant_personne+")' src='../" + image_profil + "' class='avatar profil-"+tabreturn[i].identifiant_personne+"'></a>"
            + " <p>" + tabreturn[i].auteur + " </p> <img src='../public/images/icones/calendrier.png' class='icone_titre'>  " + tabreturn[i].date_evenement_actualite + " </div> <div class='col-10'>"
            + "  <div class='card-body'>"
            + " <h5 class='card-title'>" + tabreturn[i].titre_actualite + " <a  href='../view/actualite.php'  onclick='suppression_article("+tabreturn[i].id_actualite+")' ><img src='../public/images/icones/poubelle.png' class='detail  suppression suppression-profil-"+tabreturn[i].identifiant_personne+"'></a>  </h5> "
            + "  <h5 class='card-title text-right'>    </h5> <p class='card-text'>"
            + tabreturn[i].description_actualite
       
            + "</p> <p class='card-text'><small class='text-muted'>" + tabreturn[i].date_creation_actualite + "</small></p>"
            + "</div>  </div></div></div>";

          document.getElementById("contenu").insertAdjacentHTML('beforeend', chaine);
        }
        else if (tabreturn[i].status_actualite == "actu") {




          var chaine = "<div class='card mb-12  divActu  profil-"+tabreturn[i].identifiant_personne+"'> <div class='row no-gutters'> <div class='col-md-2 alignement_center pt-4'>"
            + " <a href='../view/profil.php'><img onclick='BoutonProfil("+tabreturn[i].identifiant_personne+")' src='../" + image_profil + "' class='avatar profil-"+tabreturn[i].identifiant_personne+"'></a> <p>" + tabreturn[i].auteur + " </p> <img src='../public/images/icones/information.png' class='icone_titre'> "
            + "</div> <div class='col-md-10'> <div class='card-body'>"
            + " <h5 class='card-title'>" + tabreturn[i].titre_actualite + " <a href='../view/actualite.php' onclick='suppression_article("+tabreturn[i].id_actualite+")'><img src='../public/images/icones/poubelle.png' class='detail suppression suppression-profil-"+tabreturn[i].identifiant_personne+"'></a></h5>"
            + " <p class='card-text'>"
            + tabreturn[i].description_actualite
            
            + " </p> <p class='card-text'><small class='text-muted'>" + tabreturn[i].date_creation_actualite + " </small></p>"
            + " </div></div></div></div>";


          document.getElementById("contenu").insertAdjacentHTML('beforeend', chaine);
        }
      }


    },

    error: function (retVal, statut, erreur) {

    }
  });

}






function menu(type)//permet d'afficher ou de cacher les block en fonction du choix de l'utilsateur dans le menu
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


function BoutonProfil(profil_id)//permet d'afficher ou de cacher les block'
{
setCookie("affichage_profil_id", profil_id) ;
}



function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function boutonsuppressionActualite()//permet d'afficher le bouton de actualite des utilisateur
{console.log("test13");
var contenu = document.getElementById("contenu");
console.log("test10");
  x=contenu.getElementsByClassName("suppression-profil-"+getCookie("id"));
  console.log("test11");
    var i;
    for (i = 0; i < x.length; i++) {
      console.log("test9");
      x[i].style.display = "block";
      
    
}
}


function suppression_article(id_actualite)//permet d'afficher le bouton de actualite des utilisateur
{



  $.ajax({
      cache: false,
      url: "../data/supprime_actualite",
      type: "POST",
      async: false,
      data: ({
        id_actualite: id_actualite
          
      }),

      success: function (retVal, statut) {
          
         
      },

      error: function (retVal, statut, erreur) {
      }
  });



}

