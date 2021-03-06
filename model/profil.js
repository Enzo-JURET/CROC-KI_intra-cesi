var amis = [];

$( document ).ready(function(){
    $id_personne = getCookie("affichage_profil_id");
	chargement_page_profil($id_personne);
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
            
            if (donnees[0]["connecte_personne"] == "true") {
                $("#connexion-status").replaceWith("<img class='icone-status' alt='Connecté' src='../public/images/icones/rond-connecte.png'> Actuellement connecté");   
            }
            else {
                $("#connexion-status").replaceWith("<img class='icone-status' alt='Déconnecté' src='../public/images/icones/rond-deconnecte.png'> Actuellement déconnecté");    
            }
        	
            $("#pseudo-info").text(donnees[0]["prenom_personne"]+" "+donnees[0]["nom_personne"]);
        	$("#promo-info").text("Promotion : "+donnees[0]["libelle_promotion"]);
        	$("#description-info").text(donnees[0]["description_personne"]);
        	$("#email").text("Email : "+donnees[0]["e_mail_personne"]);
        	$("#telephone").text("Tél : "+donnees[0]["telephone_personne"]);
        	$("#linkedin").attr('href', donnees[0]["lienLinkIn_personne"]);
        	$("#facebook").attr('href', donnees[0]["lienFacebook_personne"]);
        	$("#instagram").attr('href', donnees[0]["lienInstagram_personne"]);
        	$("#twitter").attr('href', donnees[0]["lienTwitter_personne"]);
            recupererAmisEtPromotion($id);
            listeGroupes($id);
            chargementCompetences($id);
        },
 
        error : function(retVal, statut, erreur){
        }
     });
}

function recupererAmisEtPromotion($id)
{
    $idUtilisateur = $id;
    $promotion = getCookie("promotion_personne");
    var donnees = [];
    $.ajax({
        cache : false,
        url : "../data/getSomething",
        type : "POST",
        async:false,
        data: ({
            clef:'amisEtPromotion',
            idUser: $idUtilisateur,
            promotionUser: $promotion
       }),

        success : function(retVal, statut){
            $donnees = JSON.parse(retVal);           
            console.log($donnees);
            amis = $donnees["amis"];
            afficherAmis();
        },
 
        error : function(retVal, statut, erreur){
 
        }
     });
}

function afficherAmis()
{
    document.getElementById("liste-amis").innerHTML = "";
    if (amis != null) {
        for(var i=0;i<amis.length;i++)
        {

            document.getElementById("liste-amis").innerHTML += "<a onclick='visionageProfil("+amis[i].id+")' href='../view/profil.php'><p class='labelConnaissance'>"+amis[i].prenom + " " + amis[i].nom + "</p>";
        }
    }
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

function chargementCompetences($id) {
    $.ajax({
        cache : false,
        url : "../data/getSomething",
        type : "POST",
        async:false,
        data: ({
            clef:'competences',
            idUser:$id
       }),

        success : function(retVal, statut){
            donnees = JSON.parse(retVal);
            $("#comp1").text(donnees[0]["titre_competence1"]);
            $("#val_comp1").attr('value',donnees[0]["valeur_competence1"]);
            $("#comp2").text(donnees[0]["titre_competence2"]);
            $("#val_comp2").attr('value',donnees[0]["valeur_competence2"]);
            $("#comp3").text(donnees[0]["titre_competence3"]);
            $("#val_comp3").attr('value',donnees[0]["valeur_competence3"]);
            $("#comp4").text(donnees[0]["titre_competence4"]);
            $("#val_comp4").attr('value',donnees[0]["valeur_competence4"]);
            $("#comp5").text(donnees[0]["titre_competence5"]);
            $("#val_comp5").attr('value',donnees[0]["valeur_competence5"]);
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