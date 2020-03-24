<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <title>Actualite</title>
    <link rel="stylesheet" href="../public/css/bootstrap/bootstrap.min.css" type="text/css" />
    <link rel="stylesheet" href="../public/css/header.css" type="text/css" />
    <link rel="stylesheet" href="../public/css/actualite.css" type="text/css" />

    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="../public/js/bootstrap/bootstrap.js"></script>
    <script type="text/javascript" src="../public/js/header.js"></script>
    <script type="text/javascript" src="../model/test_connexion.js"></script>
    <script type="text/javascript" src="../model/ajoutActualite.js"></script>

    <script>
        checkConnection();
    </script>
</head>


<body>
    <?php require('../view/header.php'); ?>


    <div class="card text-white bg-dark   mb-3 position-fixed w-25 mt-5">
        <div class="card-body">
            <a href="../view/ajoutinformation.php"> <button type="button" class="btn divActu btn-lg btn-block"><img src="../public/images/icones/plusblanc.png" class="plus"> Information</button></a>
            <a href="../view/actualite.php"> <button type="button" class="btn divEvent btn-lg btn-block"><img src="../public/images/icones/retour.png" class="plus"> Retour</button> </a>
        </div>
    </div>




    <div id="ajout" class="col-10 w-75 offset-3 pt-5">



        <form>

            <div class="card mb-12   divEvent ">
                <div class="row no-gutters">
                    <div class="col-md-2 alignement_center pt-4">
                        <a href="../view/profil.php"><img  id="image_profil" src="" class="avatar"></a>
                        <p id="pseudo"></p>
                        <img src='../public/images/icones/calendrier.png' class='icone_titre'> <input type="date" id="dateEvent" name="trip-start">
                    </div>
                    <div class="col-md-10">
                        <div class="card-body">
                            <input class="form-control" type="text" id="titre" placeholder="titre">
                            <p class="card-text">
                                <div class="form-group">
                                    <textarea class="form-control" id="description" placeholder="description" rows="3"></textarea>
                                </div>
                            </p>
                            <p class="card-text"><small id="date" class="text-muted"></small></p>
                            <button id="EnvoieEvenement" type="button" class="btn btn-light boutonEnvoi">Terminer <img src="../public/images/icones/iconeEnvoiNoir.png"></button>
                        </div>
                    </div>
                </div>
            </div>



        </form>


    </div>



</body>

</html>