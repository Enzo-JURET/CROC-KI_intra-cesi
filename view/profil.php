<!DOCTYPE html>
<html>
<head>
	<title>Accueil</title>
	<link rel="stylesheet" href="../public/css/bootstrap/bootstrap.min.css" type="text/css"/>
    <link rel="stylesheet" href="../public/css/header.css" type="text/css"/>
    <link rel="stylesheet" href="../public/css/profil.css" type="text/css"/>
    <link rel="stylesheet" href="../public/css/style.css" type="text/css"/>
    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="../public/js/header.js"></script>
    <script type="text/javascript" src="../model/profil.js"></script>
    <script type="text/javascript" src="../model/test_connexion.js"></script>
    <script>
    	checkConnection();
    </script>

</head>
<body class="background_profil">
	<?php require('../view/header.php'); ?>
	<div class="row page-profil">
		<div id="block-profil" class="col-sm-10 offset-sm-1">
			<img id="image-banniere" class="img-fluid" src="../public/images/bannieres/banniere-defaut.jpg">
			<img id="image-profil" src="../public/images/photo_profil/avatar-defaut.png">
			<div class="row">
				<div class="col-sm-3 offset-sm-2">
					<p id="pseudo-info">
						Prénom + Nom utilisateur
					</p>
					<p id="promo-info">	
						Promotion : ?
					</p>
				</div>
				<div id="ajouter-ami" class="col-sm-1 offset-sm-1 boutons-info-profil-demander-en">
					<a href="conversation.php">
						<img class="icones-outils" alt="Ajouter en tant que ami" src="../public/images/icones/ajouter-ami-color.png"></a>
					</a>
				</div>
				<div id="envoyer-message" class="col-sm-1 boutons-info-profil-demander-en">
					<a href="conversation.php">
						<img class="icones-outils" alt="Envoyer un message à cette utilisateur" src="../public/images/icones/avion-papier-color.png"></a>
					</a>
				</div>
				<div id="modifier-profil" class="col-sm-1 boutons-info-profil-demander-en">
					<a href="modification_profil.php">
						<img class="icones-outils" alt="Parametrez votre profil en cliquant ici" src="../public/images/icones/parametre-color.png"></a>
					</a>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-4 offset-sm-1">
					<p id="titre-description">
						Description :
					</p>
					<hr id="ligne-description">
					<p id="description-info">
						Si vous voyez ce message, cela veut dire que vous n'avez pas réussi à charger la page de profil...
					</p>
				</div>
				<div class="col-sm-3">
					<div id="bandeau-info">
						Liste des groupes
					</div>
					<div class="liste-info">
						<p id="liste-groupes">
							
						</p>
					</div>
				</div>
				<div class="col-sm-3">
					<div id="bandeau-info">
						Liste d'amis
					</div>
					<div class="liste-info">
						<p id="liste-amis">
							
						</p>
					</div>
				</div>
			</div>
			<div id="info-contact" class="row">
				<div class="col-sm-3 offset-sm-1">
					<p id="titre-info-contact-profil">
						Informations supplémentaires :
					</p>
					<hr id="ligne-info-contact">
					<p id="email">
						Adresse Email
					</p>
					<p id="telephone">
						Numéro de téléphone
					</p>
					<br>
					<p class="titre-reseaux-sociaux">
						Réseaux Sociaux :
					</p>
					<hr id="ligne-reseaux-sociaux">
					<p>
						<a href="../view/profil.php" id="linkedin"><img class="premier-icones-reseaux-sociaux" src="../public/images/icones/linkedin.png"></a>
						<a href="../view/profil.php" id="facebook"><img class="icones-reseaux-sociaux" src="../public/images/icones/facebook.png"></a>
						<a href="../view/profil.php" id="instagram"><img class="icones-reseaux-sociaux" src="../public/images/icones/instagram.png"></a>
						<a href="../view/profil.php" id="twitter"><img class="icones-reseaux-sociaux" src="../public/images/icones/twitter.png"></a>
					</p>
				</div>
				<div class="col-sm-6 offset-sm-1">
					<div id="bandeau-info">
						Compétences de l'élève
					</div>
					<div class="liste-info">
						<p>
							<label class="barre-progress-info" for="file">Compétence n°1</label>
							<progress id="file" max="100" value="20"> 20% </progress>
						</p>
						<p>
							<label class="barre-progress-info" for="file">Compétence n°2</label>
							<progress id="file" max="100" value="60"> 20% </progress>
						</p>
						<p>
							<label class="barre-progress-info" for="file">Compétence n°3</label>
							<progress id="file" max="100" value="50"> 20% </progress>
						</p>
						<p>
							<label class="barre-progress-info" for="file">Compétence n°4</label>
							<progress id="file" max="100" value="80"> 20% </progress>
						</p>
						<p>
							<label class="barre-progress-info" for="file">Compétence n°5</label>
							<progress id="file" max="100" value="70"> 20% </progress>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>