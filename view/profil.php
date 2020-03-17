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
</head>
<body class="background">
	<?php require('../view/header.php'); ?>
	<div class="row page-profil">
		<div id="block-profil" class="col-sm-10 offset-sm-1">
			<img id="image-banniere" class="img-fluid" src="../public/images/banniere-test.jpg">
			<img id="image-profil" src="../public/images/avatar-test.jpg">
			<div class="row">
				<div class="col-sm-3 offset-sm-3">
					<p id="pseudo-info">
						Enzo JURET
					</p>
					<p id="promo-info">	
						Promotion : 
						<a href="../view/index.php">RIL-PROMO-201</a>
					</p>
				</div>
				<div class="image-envoi-message col-sm-1 offset-sm-1 boutons-info-profil-demander-en"></div>
				<div class="image-ajouter-ami col-sm-1 offset-sm-1 boutons-info-profil-demander-en"></div>
			</div>
			<div class="row">
				<div class="col-sm-4 offset-sm-1">
					<p id="titre-description">
						Description :
					</p>
					<hr id="ligne-description">
					<p id="description-info">
						Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
					</p>
				</div>
				<div class="col-sm-3">
					<div id="bandeau-info">
						Liste des groupes
					</div>
					<div class="liste-info">
						<p>
							<a href="../view/profil.php">RIL-PROMO-201</a><br>
							CROC-KI<br>
							KIKENDIM<br>
							<a href="../view/profil.php">Les 24H du code</a><br>
						</p>
					</div>
				</div>
				<div class="col-sm-3">
					<div id="bandeau-info">
						Liste d'amis
					</div>
					<div class="liste-info">
						<p>
							<a href="../view/profil.php">Kévin LEHOUX</a><br>
							<a href="../view/profil.php">Justin BAHIER</a><br>
							<a href="../view/profil.php">Kilian POITOU</a><br>
							<a href="../view/profil.php">Dimitri LEVILLAIN</a><br>
							<a href="../view/profil.php">Allan LENOGUE</a><br>
							<a href="../view/profil.php">Sam ROY</a><br>
							<a href="../view/profil.php">Bryan DELMAS</a><br>
							<a href="../view/profil.php">Dimitri CIRON</a><br>
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
					<p id="info-contact-profil">
						<a href="../view/profil.php">enzo.juret@viacesi.fr</a>
					</p>
					<p id="info-contact-profil">
						<a href="../view/profil.php">0663865914</a>
					</p>
					<p class="titre-reseaux-sociaux">
						Réseaux Sociaux :
					</p>
					<hr id="ligne-reseaux-sociaux">
					<p>
						<a href="../view/profil.php"><img class="premier-icones-reseaux-sociaux" src="../public/images/icones/linkedin.png"></a>
						<a href="../view/profil.php"><img class="icones-reseaux-sociaux" src="../public/images/icones/facebook.png"></a>
						<a href="../view/profil.php"><img class="icones-reseaux-sociaux" src="../public/images/icones/instagram.png"></a>
						<a href="../view/profil.php"><img class="icones-reseaux-sociaux" src="../public/images/icones/twitter.png"></a>
					</p>
				</div>
				<div class="col-sm-6 offset-sm-1">
					<div id="bandeau-info">
						Compétences de l'élève
					</div>
					<div class="liste-info">
						<p>
							<label class="barre-progress-info" for="file">PHP</label>
							<progress id="file" max="100" value="20"> 20% </progress>
						</p>
						<p>
							<label class="barre-progress-info" for="file">Python</label>
							<progress id="file" max="100" value="60"> 20% </progress>
						</p>
						<p>
							<label class="barre-progress-info" for="file">Java</label>
							<progress id="file" max="100" value="50"> 20% </progress>
						</p>
						<p>
							<label class="barre-progress-info" for="file">HTML</label>
							<progress id="file" max="100" value="80"> 20% </progress>
						</p>
						<p>
							<label class="barre-progress-info" for="file">CSS (feuille de style)</label>
							<progress id="file" max="100" value="70"> 20% </progress>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>