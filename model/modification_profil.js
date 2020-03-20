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
		modification_profil($description, $telephone, $linkedin, $facebook, $instagram, $twitter);
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
        	$("#description").val(donnees[0]["description_personne"]);
        	$("#telephone").val(donnees[0]["telephone_personne"]);
        	$("#linkedin").val(donnees[0]["lienLinkIn_personne"]);
        	$("#facebook").val(donnees[0]["lienFacebook_personne"]);
        	$("#instagram").val(donnees[0]["lienInstagram_personne"]);
        	$("#twitter").val(donnees[0]["lienTwitter_personne"]);
        },
 
        error : function(retVal, statut, erreur){
        }
     });
}

function modification_profil($description, $telephone, $linkedin, $facebook, $instagram, $twitter) {
	
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
	            twitter:$twitter
	       }),

	        success : function(retVal, statut){
	        	document.querySelector("#message_reussite").style.display="block";
	        	setTimeout(function() {
	        		window.location.href="../view/profil.php";
	        	}, 1500);     	
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