<?php
    require_once 'bdd.php';

    class Handler
    {
        
        function HandlerController($type)
        {
            switch($type) {
                case "getSomething":
                    if($_SERVER['REQUEST_METHOD'] === 'POST')
                    {
                        $result = $this->getSomething();
                    }
                break;
                case "authentification":
                    if($_SERVER['REQUEST_METHOD'] === 'POST')
                    {
                        $result = $this->Authentification();
                    }
                break;
                case "modification_profil":
                    if($_SERVER['REQUEST_METHOD'] === 'POST')
                    {
                        $result = $this->Modification_profil();
                    }
                break;
                case "fil_actualite":
                    if($_SERVER['REQUEST_METHOD'] === 'POST')
                    {
                    $result = $this-> fil_actualite();
                    }

                break;
                case "ajout_actualite":
                    if($_SERVER['REQUEST_METHOD'] === 'POST')
                    {
                        $result = $this->ajout_actualite();
                    }
                break;
                case "supprimerAmi":
                    if($_SERVER['REQUEST_METHOD'] === 'POST')
                    {
                        $result = $this->supprimerAmi();
                    }
                break;
                case "envoyerDemandeAmi":
                    if($_SERVER['REQUEST_METHOD'] === 'POST')
                    {
                        $result = $this->envoyerDemandeAmi();
                    }
                break;
                case "choixReponseDemandeAmi":
                    if($_SERVER['REQUEST_METHOD'] === 'POST')
                    {
                        $result = $this->choixReponseDemandeAmi();
                    }
                break;
                case "etat_connexion":
                    if($_SERVER['REQUEST_METHOD'] === 'POST')
                    {
                        $result = $this->Etat_connexion();
                    }
                break;
                case "creerGroupe":
                    if($_SERVER['REQUEST_METHOD'] === 'POST')
                    {
                        $result = $this->creerGroupe();
                    }
                break;
            }
            return $result;
        }

        function getSomething()
        {
            $result = [];
            $tabResulat = [];
            $tabRetour = [];
            $tmp = [];
            if(isset($_POST['clef']))
            {
                $clef = $_POST["clef"];

                switch($clef)
                {
                    case "groupes":
                        $idUser = $_POST["idUser"];

                        $dbcontroller = new dbController();
                        $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT id_groupe FROM association_groupe_personne WHERE id_personne = ?");
                        mysqli_stmt_bind_param($stmt,'s',$idUser);
                        $resultat = $dbcontroller->executeSelectQuery($stmt);
                        
                        if($resultat != '')
                        {
                            for($i=0;$i<count($resultat);$i++)
                            {
                                array_push($tabResulat,$resultat[$i]["id_groupe"]);
                            }

                            for($i=0;$i<count($tabResulat);$i++)
                            {
                                $stmt = mysqli_prepare($dbcontroller->getConn(),
                                "SELECT id_groupe, nom_groupe, description_groupe, avatar_groupe, status_groupe 
                                FROM groupe 
                                WHERE id_groupe = ?");
                                mysqli_stmt_bind_param($stmt,'s',$tabResulat[$i]);
                                $tmp = $dbcontroller->executeSelectQuery($stmt);
                                for($f=0;$f<count($tmp);$f++)
                                {
                                    $id = $tmp[$f]["id_groupe"];
                                    $nom_groupe = $tmp[$f]["nom_groupe"];
                                    $description = $tmp[$f]["description_groupe"];
                                    $avatar = $tmp[$f]["avatar_groupe"];
                                    $status = $tmp[$f]["status_groupe"];
                                }
                                $tabRetour[$i] = array("id"=>$id,"nom_groupe"=>$nom_groupe,"description"=>$description,"avatar"=>$avatar,"status"=>$status);
                            }     
                        }
                        else {
                            $tabRetour = "";
                        }
                                  
                        $dbcontroller->closeQuery();
                        return json_encode($tabRetour);
                    break;
                    case "infos_utilisateur":

                        $idUser = $_POST["idUser"];

                        $dbcontroller = new dbController();
                        $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT P.nom_personne, P.prenom_personne, P.e_mail_personne, P.description_personne, P.telephone_personne, P.lienLinkIn_personne, P.lienInstagram_personne, P.lienTwitter_personne, P.lienFacebook_personne, P.telephone_personne, (SELECT libelle_promotion FROM `promotion` WHERE id_promotion=P.id_promotion) AS libelle_promotion, P.id_role, P.avatar_personne, P.fond_ecran_profil_personne, P.connecte_personne FROM personne P WHERE id_personne = ?");
                        mysqli_stmt_bind_param($stmt,'s',$idUser);
                        $resultat = $dbcontroller->executeSelectQuery($stmt);
                        $dbcontroller->closeQuery();
                        return json_encode($resultat);

                    break;
                    case "amisEtPromotion" : 
                        $idUser = $_POST["idUser"];
                        $promotionUser = $_POST["promotionUser"];

                        $dbcontroller = new dbController();
                        $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT id_personne
                            FROM personne
                            WHERE id_promotion = ?
                            AND id_personne != ?");
                        mysqli_stmt_bind_param($stmt,'ss',$promotionUser,$idUser);
                        $resultat = $dbcontroller->executeSelectQuery($stmt);
                        
                        for($i=0;$i<count($resultat);$i++)
                        {
                            array_push($tabResulat,$resultat[$i]["id_personne"]);
                        }

                        $tabRetour = [];
                        $compteurAmis = 0;
                        $compteurPromotion = 0;
                        for($i=0;$i<count($tabResulat);$i++)
                        {
                            $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT id_personne, id_personne_ami
                            FROM ami
                            WHERE id_personne = ?
                            AND id_personne_ami = ?");
                            mysqli_stmt_bind_param($stmt,'ss',$idUser,$tabResulat[$i]);
                            $tmp = $dbcontroller->executeSelectQuery($stmt);
                            
                            if($tmp != '') // ami
                            {
                                $stmt = mysqli_prepare($dbcontroller->getConn(),
                                "SELECT id_personne,prenom_personne,nom_personne,e_mail_personne,avatar_personne,demandesAmi_personne
                                FROM personne
                                WHERE id_personne = ?");
                                mysqli_stmt_bind_param($stmt,'s',$tabResulat[$i]);
                                $tmp = $dbcontroller->executeSelectQuery($stmt);

                                $tabRetour["amis"][$compteurAmis]["id"] = $tmp[0]["id_personne"];
                                $tabRetour["amis"][$compteurAmis]["prenom"] = $tmp[0]["prenom_personne"];
                                $tabRetour["amis"][$compteurAmis]["nom"] = $tmp[0]["nom_personne"];
                                $tabRetour["amis"][$compteurAmis]["email"] = $tmp[0]["e_mail_personne"];
                                $tabRetour["amis"][$compteurAmis]["avatar"] = $tmp[0]["avatar_personne"];
                                $tabRetour["amis"][$compteurAmis]["demandesAmi"] = $tmp[0]["demandesAmi_personne"];
                                $compteurAmis+=1;
                                
                            }
                            else { // promotion
                                $stmt = mysqli_prepare($dbcontroller->getConn(),
                                "SELECT id_personne,prenom_personne,nom_personne,e_mail_personne,avatar_personne,demandesAmi_personne
                                FROM personne
                                WHERE id_personne = ?");
                                mysqli_stmt_bind_param($stmt,'s',$tabResulat[$i]);
                                $tmp = $dbcontroller->executeSelectQuery($stmt);
                                
                                $tabRetour["promotion"][$compteurPromotion]["id"] = $tmp[0]["id_personne"];
                                $tabRetour["promotion"][$compteurPromotion]["prenom"] = $tmp[0]["prenom_personne"];
                                $tabRetour["promotion"][$compteurPromotion]["nom"] = $tmp[0]["nom_personne"];
                                $tabRetour["promotion"][$compteurPromotion]["email"] = $tmp[0]["e_mail_personne"];
                                $tabRetour["promotion"][$compteurPromotion]["avatar"] = $tmp[0]["avatar_personne"];
                                $tabRetour["promotion"][$compteurPromotion]["demandesAmi"] = $tmp[0]["demandesAmi_personne"];
                                $compteurPromotion+=1;
                            }
                        }

                        $dbcontroller->closeQuery();
                        return json_encode($tabRetour);
                    break;

                    case "competences":

                        $idUser = $_POST["idUser"];

                        $dbcontroller = new dbController();
                        $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT titre_competence1, titre_competence2, titre_competence3, titre_competence4, titre_competence5, valeur_competence1, valeur_competence2, valeur_competence3, valeur_competence4, valeur_competence5 FROM competences WHERE id_personne = ?");
                        mysqli_stmt_bind_param($stmt,'s',$idUser);
                        $resultat = $dbcontroller->executeSelectQuery($stmt);
                        $dbcontroller->closeQuery();
                        return json_encode($resultat);

                    break;
                    case "demandesAmi" :
                        $idUser = $_POST["idUser"];

                        $dbcontroller = new dbController();
                        $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT demandesAmi_personne AS demandes
                            FROM personne
                            WHERE id_personne = ?");
                        mysqli_stmt_bind_param($stmt,'s',$idUser);
                        $resultat = $dbcontroller->executeSelectQuery($stmt);

                        $tabIdRequetes = explode(';',$resultat[0]["demandes"]);

                        for($i=0;$i<count($tabIdRequetes)-1;$i++)
                        {
                            $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT id_personne as id, nom_personne as nom, prenom_personne as prenom 
                            FROM personne 
                            WHERE id_personne = ?");
                            mysqli_stmt_bind_param($stmt,'s',$tabIdRequetes[$i]);
                            $tmp = $dbcontroller->executeSelectQuery($stmt);

                            for($f=0;$f<count($tmp);$f++)
                            {
                                $id = $tmp[$f]["id"];
                                $nom = $tmp[$f]["nom"];
                                $prenom = $tmp[$f]["prenom"];
                            }
                            $tabRetour[$i] = array("id"=>$id,"nom"=>$nom,"prenom"=>$prenom);
                        }

                        $dbcontroller->closeQuery();
                        return json_encode($tabRetour);
                    break;
                }
                return $result;
            }
        }

        function Authentification()
        {
            $retour=[];
            $email = $_POST["email"];
            $password = $_POST["password"];
            $dbcontroller = new dbController();

            $stmt = mysqli_prepare($dbcontroller->getConn(),
                "SELECT id_personne, e_mail_personne, password_personne, nom_personne, prenom_personne, id_role, id_promotion FROM personne WHERE e_mail_personne = ?");
            mysqli_stmt_bind_param($stmt,'s',$email);
            $resultat = $dbcontroller->executeSelectQuery($stmt);
            $dbcontroller->closeQuery();
            
            if (($resultat[0]["e_mail_personne"] == $email) && ($resultat[0]["password_personne"] == $password)){
                
                $retour["id"] = $resultat[0]["id_personne"];    
                $retour["email"] = $email;
                $retour["password"] = $password;
                $retour["nom"] = $resultat[0]["nom_personne"];
                $retour["prenom"] = $resultat[0]["prenom_personne"];
                $retour["role"] = $resultat[0]["id_role"];
                $retour["promotion"] = $resultat[0]["id_promotion"];
                $retour["etat"] = true;

            }
            else {
                $retour["etat"] = false;
            }

            return json_encode($retour);
        }

        //À modifier
        function Modification_profil()
        {
            $retour=[];
            $id_personne = $_POST["id"];
            $description = $_POST["description"];
            $telephone = $_POST["telephone"];
            $linkedin = $_POST["linkedin"];
            $facebook = $_POST["facebook"];
            $instagram = $_POST["instagram"];
            $twitter = $_POST["twitter"];

            $titre_comp1 = $_POST["titre_comp1"];
            $valeur_comp1 = $_POST["valeur_comp1"];
            $titre_comp2 = $_POST["titre_comp2"];
            $valeur_comp2 = $_POST["valeur_comp2"];
            $titre_comp3 = $_POST["titre_comp3"];
            $valeur_comp3 = $_POST["valeur_comp3"];
            $titre_comp4 = $_POST["titre_comp4"];
            $valeur_comp4 = $_POST["valeur_comp4"];
            $titre_comp5 = $_POST["titre_comp5"];
            $valeur_comp5 = $_POST["valeur_comp5"];

            $dbcontroller = new dbController();
            $stmt = mysqli_prepare($dbcontroller->getConn(),
                "SELECT id_personne FROM competences WHERE id_personne = ?");
            mysqli_stmt_bind_param($stmt,'s',$id_personne);
            $tmp = $dbcontroller->executeSelectQuery($stmt);

            if($tmp != '') {
                // Effectue la modification de tout les éléments
                $stmt = mysqli_prepare($dbcontroller->getConn(),
                    "UPDATE personne P, competences C
                     SET P.description_personne = ?,
                     P.telephone_personne = ?,
                     P.lienLinkIn_personne = ?,
                     P.lienInstagram_personne = ?,
                     P.lienTwitter_personne = ?,
                     P.lienFacebook_personne = ?,
                     C.titre_competence1 = ?,
                     C.valeur_competence1 = ?,
                     C.titre_competence2 = ?,
                     C.valeur_competence2 = ?,
                     C.titre_competence3 = ?,
                     C.valeur_competence3 = ?,
                     C.titre_competence4 = ?,
                     C.valeur_competence4 = ?,
                     C.titre_competence5 = ?,
                     C.valeur_competence5 = ?
                     WHERE P.id_personne = ? and C.id_personne = ?");
                mysqli_stmt_bind_param($stmt,'ssssssssssssssssss',$description, $telephone, $linkedin, $instagram, $twitter, $facebook, $titre_comp1, $valeur_comp1, $titre_comp2, $valeur_comp2, $titre_comp3, $valeur_comp3, $titre_comp4, $valeur_comp4, $titre_comp5, $valeur_comp5, $id_personne, $id_personne);
                $dbcontroller->executeQuery($stmt);
            }
            else {
                // Mise à jour de la table personne.
                $stmt = mysqli_prepare($dbcontroller->getConn(),
                    "UPDATE personne P
                     SET P.description_personne = ?,
                     P.telephone_personne = ?,
                     P.lienLinkIn_personne = ?,
                     P.lienInstagram_personne = ?,
                     P.lienTwitter_personne = ?,
                     P.lienFacebook_personne = ?
                     WHERE P.id_personne = ?;");
                mysqli_stmt_bind_param($stmt,'sssssss',$description, $telephone, $linkedin, $instagram, $twitter, $facebook, $id_personne);
                $dbcontroller->executeQuery($stmt);

                // Insertion des compétences
                $stmt = mysqli_prepare($dbcontroller->getConn(),
                    "INSERT INTO competences VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                mysqli_stmt_bind_param($stmt,'sssssssssss', $id_personne, $titre_comp1, $titre_comp2, $titre_comp3, $titre_comp4, $titre_comp5, $valeur_comp1, $valeur_comp2, $valeur_comp3, $valeur_comp4, $valeur_comp5);
                $dbcontroller->executeQuery($stmt);                
            }
            $dbcontroller->closeQuery();
            //return $id_personne;
        }


        function fil_actualite()//
        {
           
            $tabRetour = [];//tableau a retourner
            $dbcontroller = new dbController();

            $result = mysqli_prepare($dbcontroller->getConn(),//
            "SELECT act.* , act.id_personne as identifiant_personne , CONCAT( per.nom_personne ,' ',per.prenom_personne )as auteur,per.avatar_personne as image_profil FROM actualite as act inner join personne as per on act.id_personne =per.id_personne  ORDER BY act.date_creation_actualite desc");
            $retour = $dbcontroller->executeSelectQuery($result);

            foreach ($retour as $key => $row) {//boucle sur chaque ligne

                $tabRetour[$key] = array("image_profil"=>$row['image_profil'],"auteur"=>$row['auteur'] 
                ,"id_actualite"=>$row['id_actualite'], "titre_actualite"=>$row['titre_actualite'] 
                ,"description_actualite"=>$row['description_actualite'] , "status_actualite"=>$row['status_actualite']
                , "date_creation_actualite"=>$row['date_creation_actualite'] ,"identifiant_personne"=>$row['identifiant_personne']
                , "chemin_image_actualite"=>$row['chemin_image_actualite'],"date_evenement_actualite"=>$row['date_evenement_actualite']
                ,"status_evenement_actualite"=>$row['status_evenement_actualite']);//mets dans le tableau toute les donnée a recup dans la page

            }



            $dbcontroller->closeQuery();
            return json_encode($tabRetour);
          
        
        }
        function ajout_actualite()
        {
            
            $dbcontroller = new dbController();
            // Insertion de l'actualite
                $stmt = mysqli_prepare($dbcontroller->getConn(),
                    "INSERT INTO `actualite`  VALUES (NULL, ?, ?, ?, ?, CURRENT_DATE(), '', ?, '')");
                
                    mysqli_stmt_bind_param($stmt,'sssss',$_POST["status_actualite"] ,$_POST["titre_actualite"]
                 ,  $_POST["description_actualite"], $_POST["id_personne"] ,$_POST["date_evenement_actualite"] );

                $dbcontroller->executeQuery($stmt);                
            
            $dbcontroller->closeQuery();
        }

        function supprimerAmi()
        {
            $id_personne = $_POST["id"];
            $id_ami = $_POST["id_ami"];

            $dbcontroller = new dbController();

            $stmt = mysqli_prepare($dbcontroller->getConn(),
                "DELETE FROM ami
                WHERE id_personne = ?
                AND id_personne_ami = ?");
            mysqli_stmt_bind_param($stmt,'ss',$id_personne,$id_ami);
            $dbcontroller->executeQuery($stmt);

            $stmt = mysqli_prepare($dbcontroller->getConn(),
                "DELETE FROM ami
                WHERE id_personne = ?
                AND id_personne_ami = ?");
            mysqli_stmt_bind_param($stmt,'ss',$id_ami,$id_personne);
            $dbcontroller->executeQuery($stmt);

            $dbcontroller->closeQuery();
        }

        function envoyerDemandeAmi()
        {
            $id_personne = $_POST["id"];
            $id_ami_a_ajouter = $_POST["id_ami_a_ajouter"];

            $dbcontroller = new dbController();

            $stmt = mysqli_prepare($dbcontroller->getConn(),
                "SELECT demandesAmi_personne
                FROM personne
                WHERE id_personne = ?");
            mysqli_stmt_bind_param($stmt,'s',$id_ami_a_ajouter);
            $tmp = $dbcontroller->executeSelectQuery($stmt);

            $demandesExistantes = $tmp[0]["demandesAmi_personne"];
            if( $demandesExistantes == null)
            {
                $demandesExistantes = "";
            }
            else {
                $demandesExistantes = explode(';',$demandesExistantes);
            }

            $pretexte = ""; 
            if(($demandesExistantes != "") && (!in_array($id_personne,$demandesExistantes)))
            {
                $pretexte = implode(';',$demandesExistantes) . $id_personne . ';';
            }
            else {
                if($demandesExistantes == "")
                {
                    $pretexte = $id_personne . ';';
                }
                else {
                    $pretexte = "dejaDemande";
                }
            }

            if(($pretexte != "dejaDemande") && ($pretexte != ""))
            {
                $stmt = mysqli_prepare($dbcontroller->getConn(),
                "UPDATE personne
                SET demandesAmi_personne = ?
                WHERE id_personne = ?");
                mysqli_stmt_bind_param($stmt,'ss',$pretexte,$id_ami_a_ajouter);
                $dbcontroller->executeQuery($stmt);
            }

            $dbcontroller->closeQuery();
        }

        function choixReponseDemandeAmi()
        {
            $choix = $_POST["choix"];
            $id_personne = $_POST["idUser"];
            $id_personne_qui_demande = $_POST["idPersonneQuiDemande"];

            $dbcontroller = new dbController();
            if($choix == "Oui")
            {
                // Ajout mutuel du statut amis
                $dateAuj = date('d m Y');
                var_dump($dateAuj);
                $stmt = mysqli_prepare($dbcontroller->getConn(),
                    "INSERT INTO ami (id_personne, id_personne_ami, date_rencontre)
                    VALUES 
                    (? , ? , ?),
                    (? , ? , ?)");
                mysqli_stmt_bind_param($stmt,'ssssss',$id_personne,$id_personne_qui_demande,$dateAuj,$id_personne_qui_demande,$id_personne,$dateAuj);
                $dbcontroller->executeQuery($stmt);                
            }

            // Supression de la demande d'amis dans tout les cas

            $stmt = mysqli_prepare($dbcontroller->getConn(),
                "SELECT demandesAmi_personne as demandes
                FROM personne
                WHERE id_personne = ?");
            mysqli_stmt_bind_param($stmt,'s',$id_personne);
            $resultat = $dbcontroller->executeSelectQuery($stmt);

            $tmp = explode(';',$resultat[0]["demandes"]);
            $index = array_search($id_personne_qui_demande,$tmp);
            unset($tmp[$index]);
            $tmpJoin = implode(';',$tmp);

            $stmt = mysqli_prepare($dbcontroller->getConn(),
                "UPDATE personne
                SET demandesAmi_personne = ?
                WHERE id_personne = ?");
            mysqli_stmt_bind_param($stmt,'ss',$tmpJoin,$id_personne);
            $dbcontroller->executeQuery($stmt);    

            $dbcontroller->closeQuery();
        }

        function Etat_connexion()
        {
            $id_personne = $_POST["id"];
            $etat_connexion = $_POST["etat"];

            $dbcontroller = new dbController();
            $stmt = mysqli_prepare($dbcontroller->getConn(),
            "UPDATE personne
                SET connecte_personne = ?
                WHERE id_personne = ?");
            mysqli_stmt_bind_param($stmt,'ss', $etat_connexion, $id_personne);
            $dbcontroller->executeQuery($stmt);
            $dbcontroller->closeQuery();
        }

        function creerGroupe()
        {
            /*$id_personne = $_POST["idUser"];
            $id_personne_pour_conversation = $_POST["id_personne_pour_conversation"];
            $status = $_POST["status"];

            if($status == "prive")
            {
                $status = 1;
            }
            else {
                $status = 0;
            }

            $dbcontroller = new dbController();

            // Récupération de la liste des groupes de l'utilisateur
            $stmt = mysqli_prepare($dbcontroller->getConn(),
                "SELECT id_groupe
                FROM association_groupe_personne
                WHERE id_personne = ?");
            mysqli_stmt_bind_param($stmt,'s',$id_personne);
            $resultat = $dbcontroller->executeSelectQuery($stmt);
            
            for($i=0;$i<count($resultat);$i++)
            {
                array_push($tabResulat,$resultat[$i]["id_groupe"]);
            }

            for($i=0;$i<count($tabResulat);$i++)
            {

            }
            var_dump($tabResulat);*/
        }
    }
?>