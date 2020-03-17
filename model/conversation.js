$( document ).ready(function() {
    containerInit();
    $("#barreEnvoiMessage").focus();

    keyEnterListenerOnMessageInput();
    
    recupererAmis();
});

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

function recupererAmis (){
    $email = "kevin.lehoux@viacesi.fr";
    console.log("passage");
    var donnees = [];
    $.ajax({
        cache : false,
        url : "../data/amis",
        type : "POST",
        async:false,
        data: ({
            //type:'amis',
            //table: 'amis'
       }),

        success : function(retVal, statut){
            donnees = JSON.parse(retVal);
            console.log(donnees);
        },
 
        error : function(retVal, statut, erreur){
 
        }
     });
}