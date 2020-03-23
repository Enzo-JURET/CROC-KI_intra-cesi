
<?php



/*test de co a la base*/
include '../config/config.php';
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$connection = mysqli_connect($host, $login, $password, $database);
mysqli_set_charset($connection, "utf8");



/*

$sql="SELECT * FROM `actualite`";
//$sql="SELECT * FROM coursphp where identifiant=:identifiant and mdp=:mdp";

$requete=$base->prepare($sql);
//$requete->bindValue(":identifiant",$identifiant);
//$requete->bindValue(":mdp",$mdp);
$requete->execute();
/*
$resultat=$requete->rowCount();

if($resultat==1)
{
    echo"connexion reussite"; 
}
else
{
    echo"erreur connexion"; 
    
}
*/

$result = $connection->query("SELECT act.* , per.nom_personne as auteur,per.avatar_personne as image_profil FROM actualite as act inner join personne as per on act.id_personne=per.id_personne  ");
/*foreach ($result as $row) {

    //var_dump($row);

    echo $row['description_actualite'] . ' contenu';
}*/

unset($base);

?>