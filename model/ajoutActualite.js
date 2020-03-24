$(document).ready(function () {
    document.getElementById('iconeCentral').src = "../public/images/icones/menublanc.png";

    var date = new Date()

    document.getElementById('date').innerHTML = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    $id_personne = getCookie("id");
    chargement_page_profil($id_personne);

    document.getElementById('EnvoieInformation').addEventListener('click', function(e) {
              ajout_actualite("actu", 
              document.getElementById("titre").value ,
              document.getElementById("description").value, 
              getCookie("id"), 
               '');
        });

        document.getElementById('EnvoieEvenement').addEventListener('click', function(e) {
            ajout_actualite("actu", 
            document.getElementById("titre").value ,
            document.getElementById("description").value, 
            getCookie("id"), 
            document.getElementById("dateEvent").value);
      });


});




function chargement_page_profil($id) {
    $.ajax({
        cache: false,
        url: "../data/getSomething",
        type: "POST",
        async: false,
        data: ({
            clef: 'infos_utilisateur',
            idUser: $id
        }),

        success: function (retVal, statut) {
            donnees = JSON.parse(retVal);
            console.log(donnees[0]["avatar_personne"]);
            if (donnees[0]["avatar_personne"] = " ") {

                $("#image_profil").attr('src', '../public/images/photo_profil/avatar-defaut.png');
            }
            else {
                $("#image_profil").attr('src', "../"+donnees[0]["avatar_personne"]);
            }

            $("#pseudo").text(donnees[0]["prenom_personne"] + " " + donnees[0]["nom_personne"]);

        },

        error: function (retVal, statut, erreur) {
        }
    });
}



function ajout_actualite($status_actualite, $titre_actualite, $description_actualite, $id_personne, $date_evenement_actualite) {
        
        $id_personne = getCookie("id");
    
        $.ajax({
                cache : false,
                url : "../data/ajout_actualite",
                type : "POST",
                async:false,
                data: ({
                    status_actualite:$status_actualite,
                    titre_actualite:$titre_actualite,
                    description_actualite:$description_actualite,
                    id_personne:$id_personne,
                    date_evenement_actualite:$date_evenement_actualite
               }),
    
                success : function(retVal, statut){
                    document.querySelector("#message_reussite").style.display="block";
                    setTimeout(function() {
                        
                    }, 1500);    	
                },
         
                error : function(retVal, statut, erreur){
                }
         });
    }