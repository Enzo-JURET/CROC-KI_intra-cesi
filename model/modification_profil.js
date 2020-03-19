$( document ).ready(function(){
	
	$("#description").val("coucou");
	//document.getElementById("description").innerHTML="coucou";

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
		modification_donnees_profil($description, $email, $telephone, $linkedin, $facebook, $instagram, $twitter);
	});

});

function chargement_page() {
	$.ajax({
		
    });	
}

function modification_profil($description, $email, $telephone, $linkedin, $facebook, $instagram, $twitter) {
	
	$id_personne = getCookieID("id");

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
	       }),

	        success : function(retVal, statut){
	        	window.location.href="../view/profil.php";
	        },
	 
	        error : function(retVal, statut, erreur){
	        }
     });
}

function getCookieID(cname) {
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