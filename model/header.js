$( document ).ready(function(){
});

function chargementProfil() {
	$id_personne_connectee = getCookie("id");
	setCookie("affichage_profil_id" ,$id_personne_connectee);
}

function deconnexion() {
    deleteCookie("etat_connexion");
}

function deleteCookie(name) {
    value = "";
    days = -1;
    if (days) {
    	var date = new Date();
    	date.setTime(date.getTime() + (days * 24 * 60 *60 * 1000));
    	var exprires = "; exprires=" + date.toGMTString();
    }
    else var exprires = "";
    	document.cookie = name + "=" + value + exprires + "; path=/";
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