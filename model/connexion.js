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
            //type:'amis',
            email:$email,
            password:$password
       }),

        success : function(retVal, statut){
            donnees = JSON.parse(retVal);
            //console.log(donnees["etat"]);
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
            	window.location.href="../view/conversation.php";
            }
        },
 
        error : function(retVal, statut, erreur){
 
        }
     });
}

function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";path=/";
}