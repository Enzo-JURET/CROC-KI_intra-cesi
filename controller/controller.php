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
                case "fil_actualite";
                $result = $this-> fil_actualite();

                break;
            }
            return $result;
        }

        function getSomething()
        {
            $result = [];
            $tabResulat = [];
            $tabRetour = [];
            if(isset($_POST['clef']))
            {
                $clef = $_POST["clef"];

                switch($clef)
                {
                    case "amis":
                        $idUser = $_POST["idUser"];

                        $dbcontroller = new dbController();
                        $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT id_personne_ami
                            FROM personne,ami
                            WHERE personne.id_personne = ami.id_personne
                            AND personne.id_personne = ?");
                        mysqli_stmt_bind_param($stmt,'s',$idUser);
                        $resultat = $dbcontroller->executeSelectQuery($stmt);
                        
                        for($i=0;$i<count($resultat);$i++)
                        {
                            array_push($tabResulat,$resultat[$i]["id_personne_ami"]);
                        }

                        for($i=0;$i<count($tabResulat);$i++)
                        {
                            $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT id_personne,prenom_personne,nom_personne,e_mail_personne,avatar_personne
                            FROM personne
                            WHERE id_personne = ?");
                            mysqli_stmt_bind_param($stmt,'s',$tabResulat[$i]);
                            $tmp = $dbcontroller->executeSelectQuery($stmt);
                            for($f=0;$f<count($tmp);$f++)
                            {
                                $id_ami = $tmp[$f]["id_personne"];
                                $prenom_ami = $tmp[$f]["prenom_personne"];
                                $nom_ami = $tmp[$f]["nom_personne"];
                                $email_ami = $tmp[$f]["e_mail_personne"];
                                $avatar_ami = $tmp[$f]["avatar_personne"];
                            }
                            $tabRetour[$i] = array("id_ami"=>$id_ami,"prenom_ami"=>$prenom_ami,"nom_ami"=>$nom_ami,"email_ami"=>$email_ami,"avatar_ami"=>$avatar_ami);
                        }               
                        $dbcontroller->closeQuery();
                        return json_encode($tabRetour);
                    break;
                    case "groupes":
                        $idUser = $_POST["idUser"];

                        $dbcontroller = new dbController();
                        $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT id_groupe FROM association_groupe_personne WHERE id_personne = ?");
                        mysqli_stmt_bind_param($stmt,'s',$idUser);
                        $resultat = $dbcontroller->executeSelectQuery($stmt);
                        
                        for($i=0;$i<count($resultat);$i++)
                        {
                            array_push($tabResulat,$resultat[$i]["id_groupe"]);
                        }

                        for($i=0;$i<count($tabResulat);$i++)
                        {
                            $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT nom_groupe FROM groupe WHERE id_groupe = ?");
                            mysqli_stmt_bind_param($stmt,'s',$tabResulat[$i]);
                            $tmp = $dbcontroller->executeSelectQuery($stmt);
                            for($f=0;$f<count($tmp);$f++)
                            {
                                $nom_groupe = $tmp[$f]["nom_groupe"];
                            }
                            $tabRetour[$i] = array("nom_groupe"=>$nom_groupe);
                        }               
                        $dbcontroller->closeQuery();
                        return json_encode($tabRetour);
                    break;
                    case "infos_utilisateur":

                        $idUser = $_POST["idUser"];

                        $dbcontroller = new dbController();
                        $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT P.nom_personne, P.prenom_personne, P.e_mail_personne, P.description_personne, P.telephone_personne, P.lienLinkIn_personne, P.lienInstagram_personne, P.lienTwitter_personne, P.lienFacebook_personne, P.telephone_personne, (SELECT libelle_promotion FROM `promotion` WHERE id_promotion=P.id_promotion) AS libelle_promotion, P.id_role, P.avatar_personne, P.fond_ecran_profil_personne FROM personne P WHERE id_personne = ?");
                        mysqli_stmt_bind_param($stmt,'s',$idUser);
                        $resultat = $dbcontroller->executeSelectQuery($stmt);
                        $dbcontroller->closeQuery();
                        return json_encode($resultat);

                    break;
                    case "promotion":
                        $idUser = $_POST["idUser"];
                        $promotionUser = $_POST["promotionUser"];

                        $dbcontroller = new dbController();
                        $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT id_personne_ami
                            FROM personne,ami
                            WHERE personne.id_personne = ami.id_personne
                            AND personne.id_personne = ?");
                        mysqli_stmt_bind_param($stmt,'s',$idUser);
                        $resultat = $dbcontroller->executeSelectQuery($stmt);
                        
                        for($i=0;$i<count($resultat);$i++)
                        {
                            array_push($tabResulat,$resultat[$i]["id_personne_ami"]);
                        }

                        for($i=0;$i<count($tabResulat);$i++)
                        {
                            $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT id_personne,prenom_personne,nom_personne,e_mail_personne,avatar_personne
                            FROM personne
                            WHERE id_personne != ?
                            AND id_promotion = ?");
                            mysqli_stmt_bind_param($stmt,'ss',$tabResulat[$i],$promotionUser);
                            $tmp = $dbcontroller->executeSelectQuery($stmt);
                            for($f=0;$f<count($tmp);$f++)
                            {
                                $id_personne = $tmp[$f]["id_personne"];
                                $prenom_personne = $tmp[$f]["prenom_personne"];
                                $nom_personne = $tmp[$f]["nom_personne"];
                                $email_personne = $tmp[$f]["e_mail_personne"];
                                $avatar_personne = $tmp[$f]["avatar_personne"];
                            }
                            $tabRetour[$i] = array("id_personne"=>$id_personne,"prenom_personne"=>$prenom_personne,"nom_personne"=>$nom_personne,"email_personne"=>$email_personne,"avatar_personne"=>$avatar_personne);
                        }               
                        $dbcontroller->closeQuery();
                        return json_encode($tabRetour);
                    break;
                    case "tout" : 
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

                        // là j'ai un tableau contenant toute les personnes de la promotion de la personne connecté. Maintenant il faut comparer chaque id ; Si l'id promotion est associé à l'id de la personne connecté dans la base ami, alors il va dans le tableau ami, sinon dans le tableau promotion (si la requête ne retourne rien)

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

            // Effectue la modification
            $dbcontroller = new dbController();
            $stmt = mysqli_prepare($dbcontroller->getConn(),
                "UPDATE personne
                 SET description_personne = ?,
                 telephone_personne = ?,
                 lienLinkIn_personne = ?,
                 lienInstagram_personne = ?,
                 lienTwitter_personne = ?,
                 lienFacebook_personne = ?
                 WHERE id_personne = ?");
            mysqli_stmt_bind_param($stmt,'sssssss',$description, $telephone, $linkedin, $instagram, $twitter, $facebook, $id_personne);
            $dbcontroller->executeQuery($stmt);
            $dbcontroller->closeQuery();
            //return $stmt;
        }

        function fil_actualite()
        {
            $tabRetour = [];
            $dbcontroller = new dbController();

            $result = mysqli_prepare($dbcontroller->getConn(),
            "SELECT act.* , per.nom_personne as auteur,per.avatar_personne as image_profil FROM actualite as act inner join personne as per on act.id_personne =per.id_personne");
            $retour = $dbcontroller->executeSelectQuery($result);

            foreach ($retour as $key => $row) {

                $tabRetour[$key] = array("image_profil"=>$row['image_profil'],"auteur"=>$row['auteur'] 
                ,"id_actualite"=>$row['id_actualite'], "titre_actualite"=>$row['titre_actualite'] 
                ,"description_actualite"=>$row['description_actualite'] , "status_actualite"=>$row['status_actualite']
                , "date_creation_actualite"=>$row['date_creation_actualite']
                , "chemin_image_actualite"=>$row['chemin_image_actualite'],"date_evenement_actualite"=>$row['date_evenement_actualite']
                ,"status_evenement_actualite"=>$row['status_evenement_actualite']);

            }



            $dbcontroller->closeQuery();
            //var_dump($tabRetour);
            return json_encode($tabRetour);
           // return "test";
        }
    }
?>