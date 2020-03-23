$( document ).ready(function(){
	$id_personne = getCookie("affichage_profil_id");
	chargement_page_profil($id_personne);
	listeAmis($id_personne);
	listeGroupes($id_personne);
	votreProfil($id_personne);
});

function chargement_page_profil($id) {
	$.ajax({
        cache : false,
        url : "../data/getSomething",
        type : "POST",
        async:false,
        data: ({
            clef:'infos_utilisateur',
            idUser:$id
       }),

        success : function(retVal, statut){
        	donnees = JSON.parse(retVal);
        	$("#image-banniere").attr('src',"../"+donnees[0]["fond_ecran_profil_personne"]);
			$("#image-profil").attr('src',"../"+donnees[0]["avatar_personne"]);
        	$("#pseudo-info").text(donnees[0]["prenom_personne"]+" "+donnees[0]["nom_personne"]);
        	$("#promo-info").text("Promotion : "+donnees[0]["libelle_promotion"]);
        	$("#description-info").text(donnees[0]["description_personne"]);
        	$("#email").text("Email : "+donnees[0]["e_mail_personne"]);
        	$("#telephone").text("Tél : "+donnees[0]["telephone_personne"]);
        	$("#linkedin").attr('href', donnees[0]["lienLinkIn_personne"]);
        	$("#facebook").attr('href', donnees[0]["lienFacebook_personne"]);
        	$("#instagram").attr('href', donnees[0]["lienInstagram_personne"]);
        	$("#twitter").attr('href', donnees[0]["lienTwitter_personne"]);
        },
 
        error : function(retVal, statut, erreur){
        }
     });
}

function listeAmis($id) {
    $idUtilisateur = $id;
    var donnees = [];
    $.ajax({
        cache : false,
        url : "../data/getSomething",
        type : "POST",
        async:false,
        data: ({
            clef:'amis',
            idUser: $idUtilisateur
       }),

        success : function(retVal, statut){
            amis = JSON.parse(retVal);           
            console.log(amis);
            for(var i=0;i<amis.length;i++)
            {
            	// PAUSE DU MIDI
            	//<a onclick="visionageProfil()" href="../view/profil.php"></a>
                document.getElementById("liste-amis").innerHTML += "<a onclick='visionageProfil("+amis[i].id_ami+")' href='../view/profil.php'><p id='ami_"+amis[i].id_ami+"' class='labelAmi'>" + amis[i].prenom_ami + " " + amis[i].nom_ami + "</p></a>";
            }
        },
 
        error : function(retVal, statut, erreur){
 
        }
     });
}

function listeGroupes($id) {
    $idUtilisateur = $id;
    var donnees = [];
    $.ajax({
        cache : false,
        url : "../data/getSomething",
        type : "POST",
        async:false,
        data: ({
            clef:'groupes',
            idUser: $idUtilisateur
       }),

        success : function(retVal, statut){
            groupes = JSON.parse(retVal);
            console.log(groupes);
            for(var i=0;i<groupes.length;i++) {
                document.getElementById("liste-groupes").innerHTML += "<p>"+groupes[i].nom_groupe+"</p>";
            }
        },
 
        error : function(retVal, statut, erreur){
        }
     });
}

function visionageProfil($id) {
	setCookie("affichage_profil_id" ,$id);
}

function votreProfil($affichage_profil_id) {
	$id_personne = getCookie("id");
	if ($affichage_profil_id != $id_personne) {
		$("#modifier-profil").hide();
	}
	else {
		$("#ajouter-ami").hide();
		$("#envoyer-message").hide();
	}
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