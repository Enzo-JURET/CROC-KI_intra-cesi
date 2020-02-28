$( document ).ready(function() {
	console.log("debut script");
    $('#iconeCentral').mouseenter(function() {
        console.log("checkpoint 1");
        $("#iconeCentral").css("visibility","hidden")
        $("#NavBar").css("visibility","visible");
        $("#NavBar").slideDown("slow").delay(800).fadeIn(400);
    }), $('#NavBar').mouseleave(function() {
        console.log("checkpoint 1");
        $("#NavBar").css("visibility","hidden")
        $("#iconeCentral").css("visibility","visible");    
    });
});