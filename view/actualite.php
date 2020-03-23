<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>Actualite</title>
    <link rel="stylesheet" href="../public/css/filactu.css" type="text/css" />
    <link rel="stylesheet" href="../public/css/header.css" type="text/css" />
    <link rel="stylesheet" href="../public/css/bootstrap/bootstrap.min.css" type="text/css" />


    <script type="text/javascript" src="../public/js/bootstrap/bootstrap.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="../public/js/header.js"></script>
    <script type="text/javascript" src="../model/test_connexion.js"></script>
        <script>
            checkConnection();
        </script>

</head>


<body>
<?php require('../view/header.php'); ?>
    <script type="text/javascript" src="../model/filactu.js"></script>
    <div class="card text-white bg-dark   mb-3 position-fixed w-25" >
        <div class="card-body">

              <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a id="menutout" click="menu(rien)"class="nav-link active textmenu" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" >tout</a>
                <a id="menuactu"  class="nav-link textmenu" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">actu</a>
                <a id="menuevent" class="nav-link textmenu" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">event</a>
              </div>
        </div>
      </div>

    <div id="contenu" class="col-10 w-75 offset-3">

        <?php
        include("fil_Actualite.php"); // on appelle le fichier
        ?>

    
    </div>
















</body>

</html>