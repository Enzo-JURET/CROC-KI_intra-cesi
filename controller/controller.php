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
                    case "infos_utilisateur":

                        $idUser = $_POST["idUser"];

                        $dbcontroller = new dbController();
                        $stmt = mysqli_prepare($dbcontroller->getConn(),
                            "SELECT description_personne, telephone_personne, lienLinkIn_personne, lienInstagram_personne, lienTwitter_personne, lienFacebook_personne FROM personne WHERE id_personne = ?");
                        mysqli_stmt_bind_param($stmt,'s',$idUser);
                        $resultat = $dbcontroller->executeSelectQuery($stmt);
                        $dbcontroller->closeQuery();
                        return json_encode($resultat);

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
    }
?>