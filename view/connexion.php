<!DOCTYPE html>
<html>
<head>
	<title>Accueil</title>
	<link rel="stylesheet" href="../public/css/bootstrap/bootstrap.min.css" type="text/css"/>
    <link rel="stylesheet" href="../public/css/header.css" type="text/css"/>
    <link rel="stylesheet" href="../public/css/connexion.css" type="text/css"/>
    <link rel="stylesheet" href="../public/css/style.css" type="text/css"/>
    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="../public/js/header.js"></script>
    <script type="text/javascript" src="../model/connexion.js"></script>
</head>
<body class="background">
	<form id="form-connexion">
	<div class="row page-profil">
		<div id="block-profil" class="col-sm-4 offset-sm-4">
			<h2 class="title">
				<br>
				Connectez-vous !
			</h2>
		<div class="row page-profil">
			<div class="col-sm-10 offset-sm-1">
				<p>
					<input id="email" class="champ" type="text" placeholder="Entrer votre Email" name="email" required>
				</p>
				<p>
					<input id="password" class="champ" type="password" placeholder="Entrer le mot de passe" name="password" required>
				</p>
			</div>
		</div>
		<div class="row page-profil">
			<div class="col-sm-8 offset-sm-2">
				<p>
					<input type="submit" id="valider_connexion" class="bouton-login" value='LOGIN'>
				</p>
			</div>
		</div>
	</div>
	</form>
</body>
</html>