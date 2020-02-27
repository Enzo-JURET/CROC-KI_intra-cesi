#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: role
#------------------------------------------------------------

CREATE TABLE role(
        id_role      Int  Auto_increment  NOT NULL ,
        libelle_role Varchar (255) NOT NULL ,
        coleur_role  Varchar (255) NOT NULL
	,CONSTRAINT role_PK PRIMARY KEY (id_role)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: filiaire
#------------------------------------------------------------

CREATE TABLE filiaire(
        id_filiaire      Int  Auto_increment  NOT NULL ,
        libelle_filiaire Varchar (255) NOT NULL
	,CONSTRAINT filiaire_PK PRIMARY KEY (id_filiaire)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: promotion
#------------------------------------------------------------

CREATE TABLE promotion(
        id_promotion           Int  Auto_increment  NOT NULL ,
        libelle_promotion      Varchar (255) NOT NULL ,
        annee_depart_promotion Year NOT NULL ,
        annee_fin_promotion    Year NOT NULL ,
        id_filiaire            Int NOT NULL
	,CONSTRAINT promotion_PK PRIMARY KEY (id_promotion)

	,CONSTRAINT promotion_filiaire_FK FOREIGN KEY (id_filiaire) REFERENCES filiaire(id_filiaire)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: personne
#------------------------------------------------------------

CREATE TABLE personne(
        id_personne               Int  Auto_increment  NOT NULL ,
        nom_personne              Varchar (255) NOT NULL ,
        prenom_personne           Varchar (255) NOT NULL ,
        e_mail_personne           Varchar (255) NOT NULL ,
        dateNaissance_personne    Varchar (255) NOT NULL ,
        password_personne         Varchar (255) NOT NULL ,
        avatar_personne           Varchar (255) NOT NULL ,
        description_personne      Varchar (255) NOT NULL ,
        centres_interets_personne Varchar (255) NOT NULL ,
        sexe_personne             Varchar (255) NOT NULL ,
        id_role                   Int NOT NULL ,
        id_promotion              Int NOT NULL
	,CONSTRAINT personne_PK PRIMARY KEY (id_personne)

	,CONSTRAINT personne_role_FK FOREIGN KEY (id_role) REFERENCES role(id_role)
	,CONSTRAINT personne_promotion0_FK FOREIGN KEY (id_promotion) REFERENCES promotion(id_promotion)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: groupe
#------------------------------------------------------------

CREATE TABLE groupe(
        id_groupe                  Int  Auto_increment  NOT NULL ,
        nom_groupe                 Varchar (255) NOT NULL ,
        description_groupe         Varchar (255) NOT NULL ,
        avatar_groupe              Varchar (255) NOT NULL ,
        date_heure_creation_groupe Datetime NOT NULL ,
        status_groupe              Bool NOT NULL
	,CONSTRAINT groupe_PK PRIMARY KEY (id_groupe)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: message
#------------------------------------------------------------

CREATE TABLE message(
        id_message         Int  Auto_increment  NOT NULL ,
        texte_message      Varchar (255) NOT NULL ,
        date_heure_message Datetime NOT NULL ,
        id_personne        Int NOT NULL ,
        id_groupe          Int NOT NULL
	,CONSTRAINT message_PK PRIMARY KEY (id_message)

	,CONSTRAINT message_personne_FK FOREIGN KEY (id_personne) REFERENCES personne(id_personne)
	,CONSTRAINT message_groupe0_FK FOREIGN KEY (id_groupe) REFERENCES groupe(id_groupe)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: actualite
#------------------------------------------------------------

CREATE TABLE actualite(
        id_actualite                  Int  Auto_increment  NOT NULL ,
        titre_actualite               Varchar (255) NOT NULL ,
        chemin_actualite              Varchar (255) NOT NULL ,
        date_heure_creation_actualite Datetime NOT NULL ,
        status_actualite              Bool NOT NULL ,
        id_personne                   Int NOT NULL
	,CONSTRAINT actualite_PK PRIMARY KEY (id_actualite)

	,CONSTRAINT actualite_personne_FK FOREIGN KEY (id_personne) REFERENCES personne(id_personne)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: document_partage
#------------------------------------------------------------

CREATE TABLE document_partage(
        id_document     Int  Auto_increment  NOT NULL ,
        chemin_document Varchar (255) NOT NULL ,
        id_promotion    Int NOT NULL
	,CONSTRAINT document_partage_PK PRIMARY KEY (id_document)

	,CONSTRAINT document_partage_promotion_FK FOREIGN KEY (id_promotion) REFERENCES promotion(id_promotion)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: ami
#------------------------------------------------------------

CREATE TABLE ami(
        id_personne     Int NOT NULL ,
        id_personne_ami Int NOT NULL ,
        date_rencontre  Date NOT NULL
	,CONSTRAINT ami_PK PRIMARY KEY (id_personne,id_personne_ami)

	,CONSTRAINT ami_personne_FK FOREIGN KEY (id_personne) REFERENCES personne(id_personne)
	,CONSTRAINT ami_personne0_FK FOREIGN KEY (id_personne_ami) REFERENCES personne(id_personne)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: association_groupe_personne
#------------------------------------------------------------

CREATE TABLE association_groupe_personne(
        id_groupe   Int NOT NULL ,
        id_personne Int NOT NULL
	,CONSTRAINT association_groupe_personne_PK PRIMARY KEY (id_groupe,id_personne)

	,CONSTRAINT association_groupe_personne_groupe_FK FOREIGN KEY (id_groupe) REFERENCES groupe(id_groupe)
	,CONSTRAINT association_groupe_personne_personne0_FK FOREIGN KEY (id_personne) REFERENCES personne(id_personne)
)ENGINE=InnoDB;

