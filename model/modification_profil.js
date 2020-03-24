$( document ).ready(function(){
	
	chargement_page();

    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            $("form-modification").submit();
        }
    });

    //À modifier
    $("#form-modification").submit(function(e) {
		e.preventDefault();
		$description = $("#description").val();
		$telephone = $("#telephone").val();
		$linkedin = $("#linkedin").val();
		$facebook = $("#facebook").val();
		$instagram = $("#instagram").val();
		$twitter = $("#twitter").val();
        $titre_comp1 = $("#titre_comp1").val();
        $titre_comp2 = $("#titre_comp2").val();
        $titre_comp3 = $("#titre_comp3").val();
        $titre_comp4 = $("#titre_comp4").val();
        $titre_comp5 = $("#titre_comp5").val();
        $valeur_comp1 = $("#valeur_comp1").val();
        $valeur_comp2 = $("#valeur_comp2").val();
        $valeur_comp3 = $("#valeur_comp3").val();
        $valeur_comp4 = $("#valeur_comp4").val();
        $valeur_comp5 = $("#valeur_comp5").val();
        modification_profil($description, $telephone, $linkedin, $facebook, $instagram, $twitter, $titre_comp1, $titre_comp2, $titre_comp3, $titre_comp4, $titre_comp5, $valeur_comp1, $valeur_comp2, $valeur_comp3, $valeur_comp4, $valeur_comp5);

	});

});

function chargement_page() {
	$id = getCookie("id");
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
        	$("#description").val(donnees[0]["description_personne"]);
        	$("#telephone").val(donnees[0]["telephone_personne"]);
        	$("#linkedin").val(donnees[0]["lienLinkIn_personne"]);
        	$("#facebook").val(donnees[0]["lienFacebook_personne"]);
        	$("#instagram").val(donnees[0]["lienInstagram_personne"]);
        	$("#twitter").val(donnees[0]["lienTwitter_personne"]);
        	chargementCompetences($id);
        },
 
        error : function(retVal, statut, erreur){
        }
     });
}

function modification_profil($description, $telephone, $linkedin, $facebook, $instagram, $twitter,
$titre_comp1, $titre_comp2, $titre_comp3, $titre_comp4, $titre_comp5, $valeur_comp1, $valeur_comp2,
$valeur_comp3, $valeur_comp4, $valeur_comp5) {
	
	$id_personne = getCookie("id");

	$.ajax({
	        cache : false,
	        url : "../data/modification_profil",
	        type : "POST",
	        async:false,
	        data: ({
	            id:$id_personne,
	            description:$description,
	            telephone:$telephone,
	            linkedin:$linkedin,
	            facebook:$facebook,
	            instagram:$instagram,
	            twitter:$twitter,
                titre_comp1:$titre_comp1,
                valeur_comp1:$valeur_comp1,
                titre_comp2:$titre_comp2,
                valeur_comp2:$valeur_comp2,
                titre_comp3:$titre_comp3,
                valeur_comp3:$valeur_comp3,
                titre_comp4:$titre_comp4,
                valeur_comp4:$valeur_comp4,
                titre_comp5:$titre_comp5,
                valeur_comp5:$valeur_comp5
	       }),

	        success : function(retVal, statut){ 
                //console.log(retVal);
                document.querySelector("#message_reussite").style.display="block";
                setTimeout(function() {
                    window.location.href="../view/profil.php";
                }, 1500);    	
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
            $("#titre_comp1").val(donnees[0]["titre_competence1"]);
            $("#valeur_comp1").val(donnees[0]["valeur_competence1"]);

            $("#titre_comp2").val(donnees[0]["titre_competence2"]);
            $("#valeur_comp2").val(donnees[0]["valeur_competence2"]);

            $("#titre_comp3").val(donnees[0]["titre_competence3"]);
            $("#valeur_comp3").val(donnees[0]["valeur_competence3"]);

            $("#titre_comp4").val(donnees[0]["titre_competence4"]);
            $("#valeur_comp4").val(donnees[0]["valeur_competence4"]);

            $("#titre_comp5").val(donnees[0]["titre_competence5"]);
            $("#valeur_comp5").val(donnees[0]["valeur_competence5"]);
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