<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="utf-8">

        <link rel="stylesheet" href="../public/css/bootstrap/bootstrap.min.css" type="text/css" />
        <link rel="stylesheet" href="../public/css/header.css" type="text/css" />
        <link rel="stylesheet" href="../public/css/conversation.css" type="text/css" />

        <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
        <script type="text/javascript" src="../public/js/header.js"></script>
        <script type="text/javascript" src="../model/conversation.js"></script>
        <script type="text/javascript" src="../model/test_connexion.js"></script>
        <script>
            checkConnection();
        </script>
    </head>
    <body>
    <?php require('../view/header.php'); ?>

    <div id="boiteFenetre" class="col-sm-12">
        <div id="boiteContact" class="col-sm-3 boitesPrincipales">
            <div id="bandeauContact" class="bandeauTitre">Contacts</div>
            <div id="conteneurContact" class="conteneur">
                <div id="bandeauAmis" class="bandeauTypeContact">
                    <div id="titreAmis" class="titreTypeContact">Amis</div>
                </div>
                <div id="amis">
                    
                </div>
                <div id="bandeauAmis" class="bandeauTypeContact"> 
                    <div id="titrePromotion" class="titreTypeContact">Promotion</div>
                </div>
                <div id="promotion">

                </div>
            </div>
        </div>

        <div id ="boiteMessagerie" class="col-sm-6 boitesPrincipales">
            <div id="bandeauMessage" class="bandeauTitre">Conversation avec Enzo Juret</div>
            <div id="conteneurMessage" class="conteneur">
                <div id="corpsConteneurMessage">

                </div>
            </div>
            <div id="barreConteneurMessage">
                <input id="barreEnvoiMessage" class="form-control" type="text" placeholder="Aller hop un ptit message">
            </div>
        </div>

        <div id ="boiteGroupe" class="col-sm-3 boitesPrincipales">
            <div id="bandeauGroupe" class="bandeauTitre">Groupes</div>
            <div id="conteneurGroupe" class="conteneur">
                <div id="divGroupePrive">
                    <div id="bandeauGroupePrive" class="bandeauTypeGroupe">
                        <div class="titreTypeGroupe">Groupes privés</div>
                    </div>
                    <div id="conteneurGroupePrive" class="conteneurTypeGroupe">
                        <p class="ligneGroupe">RIL 2019</p>
                    </div>
                </div>
                <div id="divGroupePublic">
                    <div id="bandeauGroupePublic" class="bandeauTypeGroupe">
                        <div class="titreTypeGroupe">Groupes publics</div>
                    </div>
                    <div id="conteneurGroupePublic" class="conteneurTypeGroupe">

                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
</html>