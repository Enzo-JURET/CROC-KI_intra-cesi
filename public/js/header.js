$( document ).ready(function() {
	console.log("debut script");
	var x = document.getElementById("iconeCentral");
	x.mouseover(function() {
    	console.log("debut de la fonction mouseover");
    	$(".iconeCentral").hide();
    	$(".NavBar").show();
    })
    /**$(".iconeCentral").mouseover(function() {
    	console.log("debut de la fonction mouseover");
    	$(".iconeCentral").hide();
    	$(".NavBar").show();
    })**/
});