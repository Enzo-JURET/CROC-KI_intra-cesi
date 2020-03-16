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
    }
?>