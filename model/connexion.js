$( document ).ready(function(){
    
    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            $("form-connexion").submit();
        }
    });

	$("#form-connexion").submit(function(e) {
		e.preventDefault();
		var email = $("#email").val();
		var password = $("#password").val();
		authentification(email, password);
	});
});

function authentification($email, $password) {
	$.ajax({
        cache : false,
        url : "../data/authentification",
        type : "POST",
        async:false,
        data: ({
            email:$email,
            password:$password
       }),

        success : function(retVal, statut){
            donnees = JSON.parse(retVal);
            if (donnees["etat"] == false) {
            	alert("Email ou Mot de passe incorrect");
            }
            else {
                setCookie("id" ,donnees["id"]);
            	setCookie("email" ,donnees["email"]);
            	setCookie("password" ,donnees["password"]);
            	setCookie("nom_personne" ,donnees["nom"]);
            	setCookie("prenom_personne" ,donnees["prenom"]);
            	setCookie("role_personne" ,donnees["role"]);
            	setCookie("promotion_personne" ,donnees["promotion"]);
            	setCookie("etat_connexion" ,donnees["etat"]);
                etat_connexion(donnees["id"]);
                window.location.href="../view/conversation.php";
            }
        },
 
        error : function(retVal, statut, erreur){
 
        }
     });
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


function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";path=/";
}