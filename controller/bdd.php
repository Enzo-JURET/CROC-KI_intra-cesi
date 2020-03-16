<?php

class dbController
{
    private $conn;

    // Le constructeur renvoie une instance de la base de données qui sert à lancer les requêtes
    function __construct()
    {
        $connection = $this->connectBdd();

        if(!empty($connection))
        {
            $this->conn = $connection;
        }
    }

    function connectBdd()
    {
        include '../config/config.php';
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        $connection = mysqli_connect($host,$login,$password,$database);
        mysqli_set_charset($connection, "utf8");
        return $connection;
    }

    function getConn()
    {
        return $this->conn;
    }

    function executeQuery($query)
    {
        return $query->execute();
    }

    function executeSelectQuery($query)
    {
        $query->execute();

        $meta = $query->result_metadata();
        while($field = $meta->fetch_field())
        {
            $params[] = &$row[$field->name];
        }

        call_user_func_array(array($query, 'bind_result'), $params);

        while($query->fetch())
        {
            foreach($row as $key => $val)
            {
                $c[$key] = $val;
            }
            $resultset[] = $c;
        }

        $this->freeStatement($meta);

        if (!empty($resultset))
        {
            return $resultset;
        }
        else {
            return "";
        }
    }

    function closeQuery()
    {
        mysqli_close($this->conn);
    }

    function freeStatement($query)
    {
        mysqli_free_result($query);
    }
}
?>