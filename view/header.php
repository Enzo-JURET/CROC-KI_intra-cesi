<script type="text/javascript" src="../model/header.js"></script>
<img id="iconeCentral" class="iconeCentral" src="../public/images/icones/menu.png">
<nav id="NavBar" class="col-sm-12 navbar NavBar">
    <a onclick="chargementProfil()" href="../view/profil.php"><img class="iconeBarre" src="../public/images/icones/profil.png" alt="Profil"></a>
    <a href="../view/conversation.php"><img class="iconeBarre" src="../public/images/icones/groupes.png" alt="Profil"></a>
    <a href="../view/actualite.php"><img class="iconeBarre iconeTechnic" src="../public/images/icones/actualite2.png" alt="Profil"></a>
    <input type="search" id="barre-recherche" name="q" aria-label="rechercher une personne" value="Entrer une adresse mail">
    <input id="bouton-rechercher" class="bouton-rechercher" onclick="rechercherPersonne()" type="submit" name="rechercher" value="Rechercher">
    <a onclick="deconnexion()" href="../view/connexion.php"><img id="deconnexion" class="iconeBarre" src="../public/images/icones/deconnexion.png" alt="Profil"></a>
</nav>