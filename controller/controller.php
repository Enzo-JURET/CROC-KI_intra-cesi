<?php
    require_once '../config/config.php';

    var_dump( conf::getLogin() ) ;
    
    function connect_db()
    {
        $dsn="mysql:dbname=".conf::getDatabase().";host=".conf::getHostname();
        try
        {
            $connexion=new PDO($dsn,conf::getLogin(),conf::getPassword());
        }
        catch(PDOException $e)
        {
            printf("Echec connexion : %s\n",
            $e->getMessage());
            exit();
        }
        return $connexion;
    }
?>