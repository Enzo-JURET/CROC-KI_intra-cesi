$( document ).ready(function() {
    containerInit();
    $("#barreEnvoiMessage").focus();

    keyEnterListenerOnMessageInput();
    

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
    
}