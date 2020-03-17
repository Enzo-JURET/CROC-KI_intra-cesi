<img id="iconeCentral" class="iconeCentral" src="../public/images/icones/menu.png">
<nav id="NavBar" class="col-sm-12 navbar NavBar">
    <a href="../view/profil.php"><img class="iconeBarre" src="../public/images/icones/profil.png" alt="Profil"></a>
    <a href="../view/conversation.php"><img class="iconeBarre" src="../public/images/icones/groupes.png" alt="Profil"></a>
    <script type="text/javascript">
    	function deconnexion() {
    		deleteCookie("etat_connexion");
    	}

    	function deleteCookie(name) {
    		value = "";
    		days = -1;
    		if (days) {
    			var date = new Date();
    			date.setTime(date.getTime() + (days * 24 * 60 *60 * 1000));
    			var exprires = "; exprires=" + date.toGMTString();
    		}
    		else var exprires = "";
    		document.cookie = name + "=" + value + exprires + "; path=/";
    	}
    </script>
    <a onclick="deconnexion()" href="../view/connexion.php"><img id="deconnexion" class="iconeBarre" src="../public/images/icones/deconnexion.png" alt="Profil"></a>
</nav>