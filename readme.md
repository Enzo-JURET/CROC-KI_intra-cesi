# Nom du Site

### Membre du groupe
-Enzo JURET
-Kévin Lehoux
-Justin Bahier 

##  Les Actualités (by Justin BAHIER)
Cette partie permet d'afficher les actualite, de les supprimer et de créer des actualités.

### Page actualite.php
#### Fonctionnalité opérationnelle
- les actualites peuvent etre trier en fonction de leur type (information ou evenement).
- Les actualites de l'utilisateur peuvent aussi etre supprimer par l'utilisateur.
- Le menu permet aussi d'acceder a la page ajoutinformation.php  ou ajoutEvenement.php

#### Fonctionnalité manquante ou/et non finis
-Tri en fonction des amis

### Page ajoutinformation.php et ajoutEvenement.php

#### Fonctionnalité opérationnelle
- ces pages permettent d'ajouter dans la base de données des actualites 
- redirige ensuite vers la page Actualite.php

#### Fonctionnalité manquante ou/et non finis
-Message pour prévenir que l'ajout de l'actualité, c'est bien est fait sans erreur

---

## Profils utilisateurs (by Enzo JURET)
Les profils utilisateurs permettent de visualiser les profils des différents utilisateurs de ce site. Il permet entre autres de voir si l'utilisateur est connecté, ses différents amis/groupes, son mail et son numéro de téléphone au cas ou l'on souhaiterai le contacter par un autre moyen que la page conversation.php, ainsi que ses 5 domaines de compétences relier à un niveau en % (cela permet de savoir le niveau de maitrise de chaque compétence de l'utilisateur).

### Page profil.php
Page qui affiche l'ensemble des éléments informationnelles d'un profil utilisateur.

#### Fonctionnalités opérationelles

##### Affichage des éléments basique de la page :

- Affichage de l'avatar de l'utilisateur.
- Affichage de la bannière de l'utilisateur.
- Affichage du nom et prénom de l'utilisateur.
- Affichage de l'état de connexion de l'utilisateur.
- Affichage de la description de l'utilisateur.
- Affichage des informations supplémentaire (emai, téléphone).
- Affichage des logos des réseaux sociaux (avec liens intégrés).
- Affichage des groupes dont l'utilisateur appartient;
- Affichage de la liste d'amis de l'utilisateur (affichage seulement des amis de sa promotion..).
- Affichage des 5 compétences de l'utilisateur.

L'entièreté de ces éléments sont récupérés directement depuis la base de données et sont chargés en front par la suite.

##### Affichage des outils :

- Affichage de l'icone modifier_profil, forme d'écrou (s'affiche seulement sur la page, quand l'utilisateur connecté est l'utilisateur pointé par la page, et redirige vers la page modification_profil.php).

#### Fonctionnalité manquante ou/et non finis

##### Affichage des outils :

- Affichage de l'icone ajouter_ami, (s'affiche seulement sur la page, quand l'utilisateur connecté est différent de l'utilisateur pointé par la page, la fonctionnalitée ajouter un ami, n'a pas été effectué sur cette page, cependant elle existe dans la page conversation.php).

- Affichage de l'icone envoyer_message (seulement sur la page, quand l'utilisateur connecté est différent de l'utilisateur pointé par la page, la fonctionnalitée envoyer_message, n'a pas été effectué sur cette page, cependant elle existe dans la page conversation.php ).

##### Affichage spécifique :

- Affichage de l'ensemble des fonctionnalités si le rôle de l'utilisateur connecté est "Administrateur"