<?php
include("../controller/requette_Actualite.php"); // on appelle le fichier 
foreach ($result as $row) {

if($row['status_actualite']=="event" )//0event et 1actu
{
?>


<div class="card    divEvent ">
    <div class="row no-gutters">
        <div class="col-2 alignement_center pt-4">
            <a href="../view/profil.php"><img src="<?php echo "../".$row['image_profil'].' ' ; ?>" class="avatar"></a>
          
           
            <p> <?php echo $row['auteur'].' ' ; ?></p>
        </div>
        <div class="col-10">
            <div class="card-body">
                <h5 class="card-title"><?php echo $row['titre_actualite'] ; ?> <img src="../public/images/icones/calendrier.png" class="icone_titre">  2020-03-16 </h5>
                <h5 class="card-title text-right">    </h5>
                <p class="card-text">
                   
                <?php
                if(strlen($row['description_actualite'] . '')<300)
                {
                    echo $row['description_actualite'] . '';

                }
                else if(strlen($row['description_actualite'] . '')>300) 
                {        echo substr($row['description_actualite'] . '',0 , 300).'....'; }
        
                
                
                ?>

              
                    <a href="../view/profil.php"><img src="../public/images/icones/plusblanc.png" class="detail"></a>
                </p>
                <p class="card-text"><small class="text-muted"><?php echo $row['date_creation_actualite'].' ' ; ?></small></p>

            </div>
        </div>
    </div>
</div>
<?php
}
else if ($row['status_actualite']=="actu")
{
?>

<div class="card mb-12  divActu">
    <div class="row no-gutters">
        <div class="col-md-2 alignement_center pt-4">
            <a href="../view/profil.php"><img src="<?php echo "../".$row['image_profil'].' ' ; ?>" class="avatar"></a>
            <p><?php echo $row['auteur'].' ' ; ?></p>
        </div>
        <div class="col-md-10">
            <div class="card-body">
                <h5 class="card-title"><?php echo $row['titre_actualite'] ; ?>  <img src="../public/images/icones/information.png" class="icone_titre">  </h5>
    
                <p class="card-text">
                    
                <?php
                if(strlen($row['description_actualite'] . '')<300)
                {
                    echo $row['description_actualite'] . '';

                }
                else if(strlen($row['description_actualite'] . '')>300) 
                {        echo substr($row['description_actualite'] . '',0 , 300); }
        
                
                
                ?>
                <a href="../view/profil.php"><img src="../public/images/icones/plusblanc.png" class="detail"></a>
                </p>
                <p class="card-text"><small class="text-muted"><?php echo $row['date_creation_actualite'].' ' ; ?> </small></p>

            </div>
        </div>
    </div>
</div>








<?php 


}





}
    //var_dump($row);

    
?>



