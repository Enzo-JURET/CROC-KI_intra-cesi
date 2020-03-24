var amis = [];
var promotion = [];
var groupes = [];

var timeoutToolTip;
var timeoutMenuGroupe;

$( document ).ready(function() {
    containerInit();
    $("#barreEnvoiMessage").focus();

    recupererAmisEtPromotion();

    recupererGroupes();


    setInterval(function(){ 
        recupererAmisEtPromotion(); 
    }, 10000);
    
});

function recupererGroupes()
{
    $idUtilisateur = getCookie("id");
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

            document.getElementById("conteneurGroupePrive").innerHTML = "";
            document.getElementById("conteneurGroupePublic").innerHTML = "";
            for(var i = 0 ; i < groupes.length ; i++)
            {
                if(groupes[i].status == 1) // privé
                {
                    document.getElementById("conteneurGroupePrive").innerHTML += "<div id='ligneGroupe"+groupes[i].id+"' class='ligneGroupe' title='"+groupes[i].description+"' onclick='holdCliqueGroupe(this)'>"+groupes[i].nom_groupe+"</div><br/>";
                }
                else { // = 0 donc public

                }
            }

        },
 
        error : function(retVal, statut, erreur){
        }
     });
}

// Fonction qui 
function holdCliqueGroupe(elem)
{
    var idElem = elem.getAttribute("id");
    var contenu = $("#"+idElem).text();
    var idgroupe = idElem.substring(11);

    actualiserMessages(idgroupe);
     afficherMessages();

     clearTimeout(timeoutMenuGroupe);
     clearTimeout(timeoutToolTip);
     timeoutMenuGroupe =  setInterval(function(){ 
        actualiserMessages(idgroupe);
        afficherMessages();
    }, 5000);
    
     document.getElementById("bandeauMessage").innerHTML = contenu;

    keyEnterListenerOnMessageInput(idgroupe);
}

// Récupère les contacts (amis et promotion) pour mettre à jours les variables globales puis
// rafraichi les affichages en appelant afficherAmis(), afficherDemandesAmi() et afficherPromotion()
// On réassocie également aux nouvelles lignes ajoutés (contact) l'évènement mouseenter() pour ouvrir
// la tooltip personnalisé lors de l'entré de la souris sur la ligne, et l'évènement mouseleave() pour 
//fermer la tooltip lorsque la souris sort de la ligne, sauf si la souris est sur la tooltip, dans ce
// là la tooltip sera fermé quand la souris sortira et de la ligne, et de la tooltip
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
            
            amis = $donnees["amis"];
            promotion = $donnees["promotion"];

            afficherAmis();
            afficherDemandesAmi();
            afficherPromotion();
            $(".labelConnaissance").mouseenter(openPersonTooltipAmi).mouseleave(closePersonTooltipAmi);


        },
 
        error : function(retVal, statut, erreur){
 
        }
     });
}

// Récupère les demandes d'amis et les affiches dans l'encart des demandes d'amis.
// Construit la ligne pour chaque demande avec le bouton accepter et le bouton refuser et y associe
// la méthode holdCliqueChoixBoutonDemandeAmi() pour récupérer le choix de l'utilisateur
function afficherDemandesAmi()
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
            clef:'demandesAmi',
            idUser: $idUtilisateur
       }),

        success : function(retVal, statut){            
            $demandes = JSON.parse(retVal);
            document.getElementById("invitation_ami").innerHTML = "";
            $oui = "oui";
            $non = "non";
            if($demandes != null)
            {
                for(var i = 0; i < $demandes.length;i++)
                {
                    document.getElementById("invitation_ami").innerHTML += "<div id='demande_"+$demandes[i].id+"' class='ligneInvitAmi'><div class='labelDemandeAmi'>" + $demandes[i].prenom + " " + $demandes[i].nom + "</div><div class='divBoutonsChoix'><img id='boutonOui"+$demandes[i].id+"' class='iconeChoix' onclick='holdCliqueChoixBoutonDemandeAmi("+$demandes[i].id+",this)' src='../public/images/icones/reponse_oui.png' alt='Oui' /><img id='boutonNon"+$demandes[i].id+"' class='iconeChoix' onclick='holdCliqueChoixBoutonDemandeAmi("+$demandes[i].id+",this)' src='../public/images/icones/reponse_non.png' alt='Non' /></div></div><br/>";
                }
            }
            
        },
 
        error : function(retVal, statut, erreur){
 
        }
     });
}

// Fonction qui gère le clique sur un bouton valider ou refuser la demande d'ami
// Le choix 'oui' ou 'non' est récupéré grâce à l'id de l'élément qui déclenche l'évènement
// l'id est de la forme boutonOui7 , l'id est 7 donc je récupère que la fin de l'id
function holdCliqueChoixBoutonDemandeAmi(idPersonneQuiDemande,elem)
{
    $idUtilisateur = getCookie("id");

    var idElem = elem.getAttribute("id");
    var choix = idElem.substring(6,9);

    $.ajax({
        cache : false,
        url : "../data/choixReponseDemandeAmi",
        type : "POST",
        async:false,
        data: ({
            choix:choix,
            idUser: $idUtilisateur,
            idPersonneQuiDemande:idPersonneQuiDemande
        }),
                    
        success : function(retVal, statut){
            recupererAmisEtPromotion();
        },
                     
        error : function(retVal, statut, erreur){
                     
        }
    });
}

// Affiche les contacts amis dans l'encart amis
function afficherAmis()
{
    document.getElementById("amis").innerHTML = "";
    if(amis != null)
    {
        for(var i=0;i<amis.length;i++)
        {
            document.getElementById("amis").innerHTML += "<p id='ami_"+amis[i].id+"' class='labelConnaissance'>" + amis[i].prenom + " " + amis[i].nom + "</p>";
        }
    }
}

// Affiche les contacts promotion dans l'encart promotion
function afficherPromotion() 
{
    document.getElementById("promotion").innerHTML = "";
    if(promotion != null)
    {
        for(var i=0;i<promotion.length;i++)
        {
            document.getElementById("promotion").innerHTML += "<p id='promotion_"+promotion[i].id+"' class='labelConnaissance'>" + promotion[i].prenom + " " + promotion[i].nom + "</p>";
        }
    }
}
// Fonction qui gère la tooltip personnalisé qui se déclenche en survolant un contact
// Elle gère aussi les évènements qui y sont associés (demandes d'amis, supression amis, voir profil
// ouvrir discussion) => tout part de cette tooltip pour gérer le 'réseau social'
function openPersonTooltipAmi(event)
{
    $idUtilisateur = getCookie("id");
    $nomUser = getCookie("nom_personne");
    $prenomUser = getCookie("prenom_personne");

    var target = $(event.target);
    var elId = target.attr('id');

    var idPersonne = 0;
    var indexPersonne = 0;

    $cheminImageAjoutAmi = "";

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
        div.html("<div id='conteneurTooltip'><div><div class='textLabelAmi'>"+prenomPersonne + " " + nomPersonne +"</div><div class='textLabelAmi'>"+emailPersonne+"</div><div id='divIconesGestion'><div id='divDejaAmi'><img id='iconeDejaAmi' class='iconeTooltip' title='Supprimer de votre liste d&apos;amis' src='../public/images/icones/friends-white.png' alt=''/></div><div id='divAfficherProfil'><img id='idImgAfficherProfil' class='iconeTooltip' title='Afficher le profil' src='../public/images/icones/profil-white.png' alt='Profil' /></div><div id='divEnvoyerMessage'><img id='iconeEnvoyerMessage' class='iconeTooltip' title='Démarrer une conversation / Envoyer un message' src='../public/images/icones/open-conversation-white.png' alt=''/></div></div></div><div><img class='avatarAmi' src='../"+avatarPersonne+"' alt=''/></div></div>");
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
        demandesAmi = promotion[indexPersonne].demandesAmi;

        if(avatarPersonne == "") // Si la personne n'a pas de photo de profil, on prend celle de base
        {
            avatarPersonne = "public/images/photo_profil/avatar-defaut.png";
            promotion[indexPersonne].avatar = "public/images/photo_profil/avatar-defaut.png";
        }
        
        if(demandesAmi != "" && demandesAmi != null)
        {
            $tabIdDemandesAmi = demandesAmi.split(';');
            if($tabIdDemandesAmi.includes($idUtilisateur))
            {
                $cheminImageAjoutAmi = "../public/images/icones/ok-white.png";
            }
            else {
                $cheminImageAjoutAmi = "../public/images/icones/ajouter-ami-white.png";
            }
        }
        else {
            $cheminImageAjoutAmi = "../public/images/icones/ajouter-ami-white.png";
        }

        if($("#customTooltip").length)
        {
            $("#customTooltip").remove();
        }
        div = $("<div />");
        div.attr({id: 'customTooltip', class: 'personTooltip'});
        div.css({top: event.pageY, left: posX});
        div.html("<div id='conteneurTooltip'><div><div class='textLabelAmi'>"+prenomPersonne + " " + nomPersonne +"</div><div class='textLabelAmi'>"+emailPersonne+"</div><div id='divIconesGestion'><div id='divAjoutAmi'><img id='iconeAjoutAmi' class='iconeTooltip' title='Envoyer une invitation d&apos;amis' src='"+$cheminImageAjoutAmi+"' alt=''/></div><div id='divAfficherProfil'><img id='idImgAfficherProfil' class='iconeTooltip' title='Afficher le profil' src='../public/images/icones/profil-white.png' alt='Profil' /></div><div id='divEnvoyerMessage'><img id='iconeEnvoyerMessage' class='iconeTooltip' title='Démarrer une conversation / Envoyer un message' src='../public/images/icones/open-conversation-white.png' alt=''/></div></div></div><div><img class='avatarAmi' src='../"+avatarPersonne+"' alt=''/></div></div>");
        $("#boiteFenetre").append(div);

        $("#divAjoutAmi").click(function() {
            if (confirm("Demander "+prenomPersonne+ " " + nomPersonne +" en ami ?")) {
                $.ajax({
                    cache : false,
                    url : "../data/envoyerDemandeAmi",
                    type : "POST",
                    async:false,
                    data: ({
                        id: $idUtilisateur,
                        id_ami_a_ajouter: idPersonne
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


    // Gestion des clicks sur amis et ajouter amis

    // voir profil
    $("#divAfficherProfil").click(function() {
        setCookie("affichage_profil_id" ,idPersonne);
        window.location = "../view/profil.php";
    });

    // Ouvrir conversation 
    $("#divEnvoyerMessage").click(function(){
        supPopUp();
        $.ajax({
            cache : false,
            url : "../data/getSomething",
            type : "POST",
            async:false,
            data: ({
                clef:'groupes',
                idUser: idPersonne
           }),
    
            success : function(retVal, statut){
                $groupesPersonneAQuiJeVeuxParler = JSON.parse(retVal);
                var ifExistGroupCommun = false;
                var idGroupe = 0;
                if($groupesPersonneAQuiJeVeuxParler != null);
                {
                    for(var i = 0 ; i < $groupesPersonneAQuiJeVeuxParler.length;i++)
                    {
                        for(var f = 0 ; f < groupes.length ; f++)
                        {
                            if((groupes[f]["id"] == $groupesPersonneAQuiJeVeuxParler[i]["id"]) && groupes[f]["status"]==1)
                            {
                                ifExistGroupCommun = true;
                                idGroupe = groupes[f]["id"];
                            }
                        }
                    }
                }
                if(!ifExistGroupCommun) // Pas de groupe commun donc on en créer un
                {                     
                    $.ajax({
                        cache : false,
                        url : "../data/creerGroupe",
                        type : "POST",
                        async:false,
                        data: ({
                            id1:$idUtilisateur,
                            nom1:$nomUser,
                            prenom1:$prenomUser,

                            id2:idPersonne,
                            nom2:nomPersonne,
                            prenom2:prenomPersonne,
                            status : "prive"
                       }),
                
                        success : function(retVal, statut){// Retourne l'id du groupe
                            idGroupe=retVal;
                        },
                 
                        error : function(retVal, statut, erreur){
                 
                        }
                     });
                }

                openGroupe(idGroupe);
            },
     
            error : function(retVal, statut, erreur){
            }
         });
         recupererGroupes();
    });
        
    $("#customTooltip").mouseleave(supPopUp);

    function supPopUp()
    {
        $("#customTooltip").remove();
    }
}

function openGroupe(idGroupe) // Ouvre la discussion en fonction de l'id du groupe et affiches les anciens et nouveaux messages 
{
    $donnees = [];
    $donneesMessages = [];
    $.ajax({
        cache : false,
        url : "../data/getSomething",
        type : "POST",
        async:false,
        data: ({
            clef:'getOneGroupe',
            idGroupe: idGroupe
       }),

        success : function(retVal, statut){            
            $donnees = JSON.parse(retVal);
        },
 
        error : function(retVal, statut, erreur){
 
        }
     });

     actualiserMessages(idGroupe);
     afficherMessages();

     clearTimeout(timeoutMenuGroupe);
     clearTimeout(timeoutToolTip);
     timeoutToolTip = setInterval(function(){ 
        actualiserMessages(idGroupe);
        afficherMessages();
    }, 5000);
    
    if($donnees[0].nom_groupe != null && $donnees[0].nom_groupe != "")
    {
        document.getElementById("bandeauMessage").innerHTML = $donnees[0].nom_groupe;
    }
    

    keyEnterListenerOnMessageInput(idGroupe);
    

}

function closePersonTooltipAmi()
{
    if(!$('#customTooltip').is(":hover"))
    {
        $("#customTooltip").remove();
    }
}

function keyEnterListenerOnMessageInput(idGroupe)
{
    var champsTexte = document.getElementById("barreEnvoiMessage");
    champsTexte.onkeypress = function(e) {
        e = e || window.event;
        var codeCaractere = (typeof e.which == "number") ? e.which : e.codeCaractere;
        if (codeCaractere == 13) {
            $contenuMessage = $("#barreEnvoiMessage").val();
            $idUtilisateur = getCookie("id");
            $("#barreEnvoiMessage").val("");

            $.ajax({
                cache : false,
                url : "../data/envoiMessageDansGroupe",
                type : "POST",
                async:false,
                data: ({
                    idGroupe: idGroupe,
                    idUser: $idUtilisateur,
                    contenuMessage: $contenuMessage
               }),
        
                success : function(retVal, statut){            
                    
                },
         
                error : function(retVal, statut, erreur){
         
                }
             });
            actualiserMessages(idGroupe);
            afficherMessages();

        }
    };
}

function actualiserMessages(idGroupe)
{
    $.ajax({
        cache : false,
        url : "../data/getSomething",
        type : "POST",
        async:false,
        data: ({
            clef:'getMessagesFromOneGroupe',
            idGroupe: idGroupe
       }),

        success : function(retVal, statut){            
            if(retVal != null)
            {
                $donneesMessages = JSON.parse(retVal);
            }

            
        },
 
        error : function(retVal, statut, erreur){
 
        }
     });
}

function getOnePersonToDisplay(id)
{
    $retour = "";
    $.ajax({
        cache : false,
        url : "../data/getSomething",
        type : "POST",
        async:false,
        data: ({
            clef:'getOnePerson',
            idPersonne: id
       }),

        success : function(retVal, statut){            
            if(retVal != null)
            {
                $laPersonne = JSON.parse(retVal);                
                $retour = $laPersonne[0].prenom_personne + " " + $laPersonne[0].nom_personne;
            }
            else {
                $retour = "";
            }

            
        },
 
        error : function(retVal, statut, erreur){
 
        }
     });
     return $retour;
}

function afficherMessages()
{
    $idUser = getCookie("id");
    if($donneesMessages != null)
     {          
        document.getElementById("corpsConteneurMessage").innerHTML = "";
        // id = corpsConteneurMessage
        for($i=0 ; $i<$donneesMessages.length;$i++)
        {
            if($donneesMessages[$i].id_personne == $idUser)
            {
                $classAAjouter = "classCouleurUser";
            }
            else {
                $classAAjouter = "classCouleurAutre";
            }
            $identite = getOnePersonToDisplay($donneesMessages[$i].id_personne);
            document.getElementById("corpsConteneurMessage").innerHTML += "<div class='conteneurDivsMessage'><div class='identiteAuteurMessage "+$classAAjouter+"'>"+$identite+"</div><div class='divMessage'>"+ $donneesMessages[$i].texte_message+"</div></div>";
        }
     }
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
            $('#boiteFenetre').css('height', sH-200 + 'px');
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