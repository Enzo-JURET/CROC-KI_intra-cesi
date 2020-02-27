$( document ).ready(function() {

	console.log("debut script");
	//$("#iconeCentral").mousemove(function() {
    $('#iconeCentral').mouseenter(function() {
        // le curseur passe sur l'élément
        console.log("checkpoint 1");
        $("#iconeCentral").css("visibility","hidden")
        $("#NavBar").css("visibility","visible");
        $("#NavBar").slideDown("slow").delay(800).fadeIn(400);
    }), $('#NavBar').mouseleave(function() {
        console.log("checkpoint 1");
        $("#NavBar").css("visibility","hidden")
        $("#iconeCentral").css("visibility","visible");    
    });
    /*,function() {
    // le curseur sort de l'élément
    console.log("checkpoint 1");
    $("#NavBar").css("visibility","hidden")
    $("#iconeCentral").css("visibility","visible");*/

    });
//});