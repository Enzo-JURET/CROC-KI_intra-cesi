var amis = [];
var promotion = [];

$( document ).ready(function() {
    containerInit();
    $("#barreEnvoiMessage").focus();

    keyEnterListenerOnMessageInput();

    recupererAmisEtPromotion();
});

function recupererAmisEtPromotion()
{
    $idUtilisateur = getCookie("id");
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
            promotion = $donnees["promotion"];

            afficherAmis();
            afficherPromotion();
            $(".labelConnaissance").mouseenter(openPersonTooltipAmi).mouseleave(closePersonTooltipAmi);


        },
 
        error : function(retVal, statut, erreur){
 
        }
     });
}

function afficherAmis()
{
    document.getElementById("amis").innerHTML = "";
    for(var i=0;i<amis.length;i++)
    {
        document.getElementById("amis").innerHTML += "<p id='ami_"+amis[i].id+"' class='labelConnaissance'>" + amis[i].prenom + " " + amis[i].nom + "</p>";
    }
}

function afficherPromotion() 
{
    document.getElementById("promotion").innerHTML = "";
    for(var i=0;i<promotion.length;i++)
    {
        document.getElementById("promotion").innerHTML += "<p id='promotion_"+promotion[i].id+"' class='labelConnaissance'>" + promotion[i].prenom + " " + promotion[i].nom + "</p>";
    }
}

function openPersonTooltipAmi(event)
{
    $idUtilisateur = getCookie("id");

    var target = $(event.target);
    var elId = target.attr('id');

    var idPersonne = 0;
    var indexPersonne = 0;

    var nomPersonne = "";
    var prenomPersonne = "";
    var emailPersonne = "";
    var avatarPersonne = "";

    var posX = event.pageX-50;

    if(elId.substring(0,3) == "ami") // ami
    {
        idPersonne = elId.substring(4);
        for(var i = 0;i<amis.length;i++)
        {
            if(amis[i].id == idPersonne)
            {
                indexPersonne = i;
            }
        }

        nomPersonne = amis[indexPersonne].nom;
        prenomPersonne = amis[indexPersonne].prenom;
        emailPersonne = amis[indexPersonne].email;
        avatarPersonne = amis[indexPersonne].avatar;

        if(avatarPersonne == "")
        {
            avatarPersonne = "public/images/photo_profil/avatar-defaut.png";
            amis[indexPersonne].avatar = "public/images/photo_profil/avatar-defaut.png";
        }

        if($("#customTooltip").length)
        {
            $("#customTooltip").remove();
        }
        div = $("<div />");
        div.attr({id: 'customTooltip', class: 'personTooltip'});
        div.css({top: event.pageY, left: posX});
        div.html("<div id='conteneurTooltip'><div><div class='textLabelAmi'>"+prenomPersonne + " " + nomPersonne +"</div><div class='textLabelAmi'>"+emailPersonne+"</div><div id='divDejaAmi'><img id='iconeDejaAmi' src='../public/images/icones/friends-white.png' alt=''/></div></div><div><img class='avatarAmi' src='../"+avatarPersonne+"' alt=''/></div></div>");
        $("#boiteFenetre").append(div);

        $("#divDejaAmi").click(function() {
            if (confirm("Voulez vous supprimer "+prenomPersonne+ " " + nomPersonne +" de votre liste d'amis ?")) {
                $.ajax({
                    cache : false,
                    url : "../data/supprimerAmi",
                    type : "POST",
                    async:false,
                    data: ({
                        id: $idUtilisateur,
                        id_ami: idPersonne
                   }),
            
                    success : function(retVal, statut){

                    },
             
                    error : function(retVal, statut, erreur){
             
                    }
                 });
                 recupererAmisEtPromotion();
            } 
        });
    }
    else { // promotion
        idPersonne = elId.substring(10);
        for(var i = 0;i<promotion.length;i++)
        {
            if(promotion[i].id == idPersonne)
            {
                indexPersonne = i;
            }
        }

        nomPersonne = promotion[indexPersonne].nom;
        prenomPersonne = promotion[indexPersonne].prenom;
        emailPersonne = promotion[indexPersonne].email;
        avatarPersonne = promotion[indexPersonne].avatar;

        if(avatarPersonne == "")
        {
            avatarPersonne = "public/images/photo_profil/avatar-defaut.png";
            promotion[indexPersonne].avatar = "public/images/photo_profil/avatar-defaut.png";
        }

        if($("#customTooltip").length)
        {
            $("#customTooltip").remove();
        }
        div = $("<div />");
        div.attr({id: 'customTooltip', class: 'personTooltip'});
        div.css({top: event.pageY, left: posX});
        div.html("<div id='conteneurTooltip'><div><div class='textLabelAmi'>"+prenomPersonne + " " + nomPersonne +"</div><div class='textLabelAmi'>"+emailPersonne+"</div><div id='divAjoutAmi'><img id='iconeAjoutAmi' src='../public/images/icones/ajouter-ami-white.png' alt=''/></div></div><div><img class='avatarAmi' src='../"+avatarPersonne+"' alt=''/></div></div>");
        $("#boiteFenetre").append(div);
    }


    // Gestion des clicks sur amis et ajouter amis

    
        
    $("#customTooltip").mouseleave(supPopUp);

    function supPopUp()
    {
        $("#customTooltip").remove();
    }
}

function closePersonTooltipAmi()
{
    if(!$('#customTooltip').is(":hover"))
    {
        $("#customTooltip").remove();
    }
}

function keyEnterListenerOnMessageInput()
{
    var champsTexte = document.getElementById("barreEnvoiMessage");
    champsTexte.onkeypress = function(e) {
        e = e || window.event;
        var codeCaractere = (typeof e.which == "number") ? e.which : e.codeCaractere;
        if (codeCaractere == 13) {
            $("#barreEnvoiMessage").val("");


        }
    };
}

function containerInit()
{
    window.onload=function(){  
        $('#boiteFenetre').css('height', $(window).height()-150 + 'px');
    }
    window.onresize = resizeContainers();
}

function resizeContainers()
{
        $(window).resize(function() {
            var sH = $(window).height();
            $('#boiteFenetre').css('height', sH-150 + 'px');
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