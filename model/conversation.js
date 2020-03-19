var amis = [];

$( document ).ready(function() {
    containerInit();
    $("#barreEnvoiMessage").focus();

    keyEnterListenerOnMessageInput();
    
    recupererAmis();
});

function recupererAmis (){
    $idUtilisateur = getCookie("id");
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
                document.getElementById("amis").innerHTML += "<p id='ami_"+amis[i].id_ami+"' class='labelAmi'>" + amis[i].prenom_ami + " " + amis[i].nom_ami + "</p>";
            }
            $(".labelAmi").mouseenter(openPersonTooltip).mouseleave(closePersonTooltip);

        },
 
        error : function(retVal, statut, erreur){
 
        }
     });
}


function openPersonTooltip(event)
{
    var target = $(event.target);
    var elId = target.attr('id');

    var idAmi = elId.substring(4);
    console.log(idAmi);
    var indexAmi = 0;
    for(var i = 0;i<amis.length;i++)
    {
        if(amis[i].id_ami == idAmi)
        {
            indexAmi = i;
        }
    }
    
    var nomAmi = amis[indexAmi].nom_ami;
    var prenomAmi = amis[indexAmi].prenom_ami;
    var emailAmi = amis[indexAmi].email_ami;
    var avatarAmi = amis[indexAmi].avatar_ami;

    console.log(emailAmi);

    posX = event.pageX-50;

    if($("#customTooltip").length)
    {
        $("#customTooltip").remove();
    }
    div = $("<div />");
    div.attr({id: 'customTooltip', class: 'personTooltip'});
    div.css({top: event.pageY, left: posX});
    div.html("<div id='conteneurTooltip'><div id='identiteAmi'>"+ prenomAmi + " " + nomAmi +"</div><div id='containerAvatar'><img class='avatarAmi' src='../"+ avatarAmi +"' alt=''></div></div>");
    $("#boiteFenetre").append(div);
        
    //$("#customTooltip").mouseleave(supPopUp);

    function supPopUp()
    {
        $("#customTooltip").remove();
    }
}

function closePersonTooltip()
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