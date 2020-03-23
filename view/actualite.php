<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <title>Actualite</title>
    <link rel="stylesheet" href="../public/css/bootstrap/bootstrap.min.css" type="text/css" />
        <link rel="stylesheet" href="../public/css/header.css" type="text/css" />
    <link rel="stylesheet" href="../public/css/filactu.css" type="text/css" />

    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
        <script type="text/javascript" src="../public/js/bootstrap/bootstrap.js"></script>
    <script type="text/javascript" src="../public/js/header.js"></script>
    <script type="text/javascript" src="../model/test_connexion.js"></script>
        <script>
            checkConnection();
            preparation();
        </script>
<script type="text/javascript" src="../model/filactu.js"></script>
</head>


<body>
<?php require('../view/header.php'); ?>

    
    <div class="card text-white bg-dark   mb-3 position-fixed w-25" >
        <div class="card-body">

              <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  
                <a id="menu_Tout" class="nav-link active"  data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" >Tout afficher</a>
                <a id="menu_Information"  class="nav-link "  data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Information</a>
                <a id="menu_Evenement" class="nav-link"  data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Evenement</a>
              </div>






              
        </div>
      </div>

    <div id="contenu" class="col-10 w-75 offset-3">

       
    </div>

</body>

</html>