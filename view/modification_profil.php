<!DOCTYPE html>
<html>
<head>
	<title>Accueil</title>
	<link rel="stylesheet" href="../public/css/bootstrap/bootstrap.min.css" type="text/css"/>
    <link rel="stylesheet" href="../public/css/header.css" type="text/css"/>
    <link rel="stylesheet" href="../public/css/profil.css" type="text/css"/>
    <link rel="stylesheet" href="../public/css/style.css" type="text/css"/>
    <link rel="stylesheet" href="../public/css/modification_profil.css" type="text/css"/>
    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="../public/js/header.js"></script>
    <script type="text/javascript" src="../model/test_connexion.js"></script>
    <script>
    	checkConnection();
    </script>

</head>
<body class="background_modification_profil">
	<?php require('../view/header.php'); ?>
	<div class="row page-profil">
		<div id="block-profil" class="col-sm-10 offset-sm-1">
        <form id="form-modification">
            <h2 class="title">
                Modifier votre profil
            </h2>
            <div class="row modification_description">
                <div class="col-sm-10 offset-sm-1">
                    <p>
                        <h4>
                            Modifier votre bannière de profil :
                        </h4>
                    <p>
                    <div class="row">
                        <div class="col-sm-7">
                            <img id="image-banniere" class="img-fluid" src="../public/images/banniere-test.jpg">
                        </div>
                        <div class="col-sm-4">
                            <p>
                                Uploader votre image de bannière :
                            </p>
                            <p>
                                système d'upload d'image...
                            </p>
                        </div>
                    </div>
                    <p>
                        <h4>
                            Modifier votre image de profil :
                        </h4>
                    </p>
                    <div class="row">
                        <div class="col-sm-4">
                            <img id="image_profil" src="../public/images/avatar-test.jpg">
                        </div>
                        <div class="col-sm-4">
                            <p>
                                Uploader votre image de profil :
                            </p>
                            <p>
                                système d'upload d'image...
                            </p>
                        </div>
                    </div>
                    <p>
                        <h4>
                            Description de votre profil :
                        </h4>
                    </p>
                    <p>
                        <textarea id="story" name="story" rows="5">Description existante ...</textarea>
                    </p>
                    <p id="titre_info_supp">
                        <h4>
                            Informations supplémentaires :
                        </h4>
                    </p>
                </div>
            </div>
            <p>
            </p>
            <div class="row modification_info_supp">
                <div class="col-sm-5 offset-sm-1">
                    <p>
                        Email :
                    </p>
                    <p>
                        <input class="champ_info_supp" type="text" placeholder="Email existant ..." name="email" required>
                    </p>
                    <p id="titre_rs">
                        <h4>
                            Réseaux Sociaux :
                        </h4>
                    </p>
                </div>
                <div class="col-sm-6">
                    <p>
                        Numéro de téléphone :
                    </p>
                    <p>
                        <input type="text" placeholder="Numéro de téléphone existant ..." name="telephone" required>
                    </p>
                </div>
            </div>
            <div class="row modification_info_supp">
                <div class="col-sm-10 offset-sm-1">
                    <p>
                        <img class="icone_rs" src="../public/images/icones/linkedin.png">
                        <input type="text" placeholder="Lien vers votre page Linkedin" name="lien_linkedin">
                    </p>
                    <p>
                        <img class="icone_rs" src="../public/images/icones/facebook.png">
                        <input type="text" placeholder="Lien vers votre page Facebook" name="lien_facebook">
                    </p>
                    <p>
                        <img class="icone_rs" src="../public/images/icones/instagram.png">
                        <input type="text" placeholder="Lien vers votre page Instagram" name="lien_instagram">
                    </p>
                    <p>
                        <img class="icone_rs" src="../public/images/icones/twitter.png">
                        <input type="text" placeholder="Lien vers votre page Twitter" name="lien_twitter">
                    </p>
                </div>
            </div>
            <div class="row ligne_bouton-modifier">
                <div class="col-sm-8 offset-sm-2">
                    <p>
                        <input type="submit" id="valider_modification" class="bouton-modifier" value='MODIFIER'>
                    </p>
                </div>
		    </div>
        </form>
        </div>
	</div>
</body>
</html>