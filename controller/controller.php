<?php
    require_once 'bdd.php';

    class Handler
    {
        
        function HandlerController($type)
        {
            switch($type) {
                case "amis":
                    if($_SERVER['REQUEST_METHOD'] === 'POST')
                    {
                        $result = $this->getFriends();
                    }
                break;
                case "authentification":
                    if($_SERVER['REQUEST_METHOD'] === 'POST')
                    {
                        $result = $this->Authentification();
                    }
                break;
            }
            return $result;
        }

        function getFriends()
        {
            $dbcontroller = new dbController();

            $stmt = mysqli_prepare($dbcontroller->getConn(),
                "SELECT *
                FROM personne");
            $personne = $dbcontroller->executeSelectQuery($stmt);
            $dbcontroller->closeQuery();
            return json_encode($personne);
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
    }
?>