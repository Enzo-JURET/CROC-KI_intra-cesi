$( document ).ready(function(){
});

function rechercherPersonne() {

    $email_personne = $("#barre-recherche").val();
    console.log($email_personne);

    $.ajax({
        cache : false,
        url : "../data/getSomething",
        type : "POST",
        async:false,
        data: ({
            clef:'recherchePersonne',
            email:$email_personne
       }),

        success : function(retVal, statut){
            //console.log(retVal);
            $donnees = JSON.parse(retVal);
            setCookie("affichage_profil_id" ,$donnees);
            window.location="../view/profil.php";
        },
 
        error : function(retVal, statut, erreur){
        }
     });
}

function chargementProfil() {
	$id_personne_connectee = getCookie("id");
	setCookie("affichage_profil_id" ,$id_personne_connectee);
}

function deconnexion() {
	$id_personne = getCookie("id");
    setCookie("etat_connexion" ,false);
    etat_connexion($id_personne);
}

function etat_connexion($id) {

    $etat = getCookie('etat_connexion');

    $.ajax({
        cache : false,
        url : "../data/etat_connexion",
        type : "POST",
        async:false,
        data: ({
            id:$id,
            etat:$etat
       }),

        success : function(retVal, statut){
            console.log(retVal);
        },
 
        error : function(retVal, statut, erreur){
        }
     });
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