# Nom du Site

### Membre du groupe
-Enzo JURET
-Kévin Lehoux
-Justin Bahier 

##  Les Actualités (by Justin BAHIER)
Cette partie permet d'afficher les actualite, de les supprimer et de créer des actualités.

### Page [actualite.php](http://localhost/CROC-KI_intra-cesi/view/actualite.php)
#### Fonctionnalités opérationnelles
- les actualites peuvent etre trier en fonction de leur type (information ou evenement).
- Les actualites de l'utilisateur peuvent aussi etre supprimer par l'utilisateur.
- Le menu permet aussi d'acceder a la page ajoutinformation.php  ou ajoutEvenement.php

#### Fonctionnalités manquantes ou/et non finis
-Tri en fonction des amis

### > Page ajoutinformation.php et ajoutEvenement.php

#### Fonctionnalité opérationnelle
- ces pages permettent d'ajouter dans la base de données des actualites 
- redirige ensuite vers la page Actualite.php

#### Fonctionnalité manquante ou/et non finis
-Message pour prévenir que l'ajout de l'actualité, c'est bien est fait sans erreur

---

## Profils utilisateurs (by Enzo JURET)
Les profils utilisateurs permettent de visualiser les profils des différents utilisateurs de ce site. Il permet entre autres de voir si l'utilisateur est connecté, ses différents amis/groupes, son mail et son numéro de téléphone au cas ou l'on souhaiterai le contacter par un autre moyen que la page conversation.php, ainsi que ses 5 domaines de compétences relier à un niveau en % (cela permet de savoir le niveau de maitrise de chaque compétence de l'utilisateur).

### Fichiers associés

- profil.php ([lien vers la page en local](http://localhost/CROC-KI_intra-cesi/view/profil.php))
- profil.js
- profil.css
- controller.php

#### Fonctionnalités opérationelles

##### > Affichage des éléments basiques de la page :

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

##### > Affichage des outils :

- Affichage de l'icone modifier_profil, forme d'écrou (s'affiche seulement sur la page, quand l'utilisateur connecté est l'utilisateur pointé par la page, et redirige vers la page modification_profil.php).

#### Fonctionnalités manquantes ou/et non finis

##### > Affichage des outils :

- Affichage de l'icone ajouter_ami, (s'affiche seulement sur la page, quand l'utilisateur connecté est différent de l'utilisateur pointé par la page, la fonctionnalitée ajouter un ami, n'a pas été effectué sur cette page, cependant elle existe dans la page conversation.php).

- Affichage de l'icone envoyer_message (seulement sur la page, quand l'utilisateur connecté est différent de l'utilisateur pointé par la page, la fonctionnalitée envoyer_message, n'a pas été effectué sur cette page, cependant elle existe dans la page conversation.php ).

##### > Affichage spécifique :

- Affichage de l'ensemble des fonctionnalités si le rôle de l'utilisateur connecté est "Administrateur" (cette fonctionnalité n'a pas été effectué puisque les rôles ne sont pas géré tout court).

---

## Modifier le profils utilisateurs (by Enzo JURET)
Page permettant de modifier les éléments de la page profils. Cette page est accéssible via la redirection de l'icone en forme d'écrou.

### Fichiers associés

- modification_profil.php ([lien vers la page en local](http://localhost/CROC-KI_intra-cesi/view/modification_profil.php))
- modification_profil.js
- modification_profil.css
- controller.php

#### Fonctionnalités opérationelles

##### > Chargement de la page et de tout ses éléments

Lors du chargement de la page modification_profil.php, les éléments suivants sont récupérés automatiquement depuis la base de données :

- Bannière du profil
- Avatar
- Description
- Numéro de téléphone
- Les liens vers les réseaux sociaux
- Les titres et les valeurs dans compétences

Tout ces éléments sont enregistré en base au format VARCHAR(255).

##### > Modification des éléments de la page profil

Les champs textes sont entièrement modifiable, cela permet à l'utilisateur d'avoir une page de profils personnalisées à son gôut. Afin de modifier les éléments en base de données il suffit, de modifier les champs que l'on souhaite modifier, puis de cliquer sur le bouton "MODIFIER", qui se trouve en bas de la page.

#### Fonctionnalités manquantes ou/et non finis

##### > Design de la page

Avec plus de temps, je pense que j'aurai pu faire un front plus propre et plus didactique pour cette page

##### > Modification des éléments de la page profil

- Le système d'upload des images (avatar et bannière), non pas eu le temps d'être réalisé. Avec cette configuration, il est impossible de changer sa photo de profil, n'y de changer sa bannière (cependant tout le reste l'est).

---

## Système de connexion au site (by Enzo JURET)
Page permettant à l'utilisateur de se connecter à son profil, cela va lui permettre d'accéder à toutes les pages du sites. Il est important également de savoir que vous ne pouvez pas accéder aux autres pages, si vous ne vous êtes pas connecté avec un profil qui se situe en base de données.

### Fichiers associés

- connexion.php ([lien vers la page en local](http://localhost/CROC-KI_intra-cesi/view/connexion.php))
- connexion.js
- connexion.css
- controller.php

#### Fonctionnalités opérationelles

##### > Connexion au site

La connexion est fonctionelle, elle permet aux utilisateurs d'êtres connectés grace à un cookie appelé "etat_connexion" égal à "true". Pour se connecté il suffit de rentrer son adresse email de la cesi (par exemple -> prenom.nom@viacesi.fr), ainsi que son mot de passe associé, et à la suite de ça, appuyer sur le bouton "LOGIN". L'ensemble des exceptions au nivea de la connexion son géré.


## La Navbar (by Enzo JURET)
La Navbar est une de barre navigation permettant d'accéder rapidement aux différentes pages du site, elle est accéssible sur toutes les pages en cliquant sur ce logo :
[mettre image ici] 

### Fichiers associés

- header.php
- header.js
- header.css
- controller.php

#### > Tutoriel d'utilisation de la navbar

Pour accéder à la navbar en haut de l'écran passer la souris sur ce logo :
[mettre image ici]

Les différents logos possèdes des liens vers des pages prédéfinis :

- Ce logo permet d'accéder à la page de profil de l'utilisateur connecté : [mettre image ici]
- Celui ci permet d'accéder à la page conversation : [mettre image ici]
- Celui la, les actualités : [mettre image ici]
- La barre de recherche permet de rechercher une personne grace à une adresse email de la CESI : [mettre image ici]
- Et pour finir, ce logo permet de se déconnecter (passer le cookie "etat_connexion" à false, et renvoi sur la page de connexion.php) : [mettre image ici]

---

## [Page conversation](http://localhost/CROC-KI_intra-cesi/view/conversation.php) (by Kévin LEHOUX)


L'onglet conversation permet à l'utilisateur de discuter avec sa promotion ou ses amis. Il peut par ailleurs envoyer des demandes d'amis aux personnes de sa promotion.
Si les personnes accepte sa demande d'ami, ils apparaitront dans la partit 'amis' des contacts. 

En survolant les contacts, une tooltip personnalisé apparait. Dedans on y retrouve l'identité de la personne que l'on survole, son adresse mail et sa photo de profil.
Dans le cas où cette personne est un ami, cette relation y sera représentée par un symbole. L'utilisateur, peut, depuis cette tooltip, supprimer de amis.
Dans le cas où cette personne est un contact de sa promotion ; à l'inverse, il peut lui envoyer une requête d'ami.
Les requêtes d'amis apparaissent dans le champ des requêtes d'amis.
La fréquence de rafraichissement des notifications de demandes d'amis est de 10s.
Dans cette même tooltip ; L'utilisateur a la possibilité d'aller visualiser le profil de la personne (vers page profil.php)
Et enfin, il peut décider d'ouvrir une conversation avec cette personne, qu'ils soient amis ou non.
Cela aura pour effet de lancer directement la conversation.

Cette conversation se retrouvera dans la liste des groupes privés de l'utilisateur sur la droite.
En cliquant sur un des éléments de sa liste de groupes privés, l'utilisateur peut voir le contenu de la conversation.
La fréquence de rafraichissement des messages est de 5s, on peut dire que c'est du temps réel et c'est de toute façon réduisable.

Au centre au trouve l'espace pour visualiser et envoyer les messages.
En haut se trouve le nom de la conversation que l'on a ouverte. Les noms des conversations sont constitués des prénoms et noms des participants.

Les groupes privés sont limités à 2 personnes (=messages privés) et les groupes publiques à autant qu'on veux.

### Fichiers :

#### php
- conversation.php
	- Fichier contenant l'html de ma page.
- controller.php
	- Reçois toute les requêtes ajax de l'application et retourne les résultats des requêtes sql traitées.
- bdd.php
	- Objet représentant la base de donnée.
- restcontroller.php
	- Récupérer les demandes du js et redirige vers le controller en appelant la fonction principale HandlerController() et récupère la variable précisé dans l'url.
- config.php
	- Contient la configuration pour se connecter à la base de donnée. Il faut paramétrer ce fichier avant d'utiliser l'application.
#### css
- conversation.css
	- Feuille de style de ma page.
#### js
- conversation.js
	- Fichier JS où je manipule mon DOM pour mettre à jour dynamiquement mes champs et lancer des requêtes ajax.
#### Autres
- .htacess
	- Permet de simplifier les liens vers mes requêtes php et d'y inclure une variable dans l'url.

### Fonctionnalités opérationnelles

#### > Listing des contacts :
- Amis
- Promotion

#### > Affichage du tooltip personnalisé lors du survol avec ses fonctionnalités
- Informations de bases sur la personne : Nom, prénom, adresse mail, avatar.
- En fonction du type de personne survolé :
	- Ami : Icone ami : Lors d'un clique, propose à l'utilisateur s'il veux retirer ce contact de sa list d'amis.
	- Contact de sa promotion : Icone ajout ami : Lors d'un clique, envoi une requête de demande d'ami à la personne.
- Icone voir profil de la personne 
	- Affiche la page de profil de la personne.
- Icone démarrer / Ouvrir une conversation :
	- Si aucun groupe privé n'éxistait avec la personne, en créer un et l'ajoute à la liste des groupes privés de l'utilisateur. Puis ouvre la discussion dans le menu central de discussion (affiche les messages déjà éxistant s'il y en a).

#### > Affichage des demandes d'amis dans le menu des demandes d'amis qui se situe parmit les contacts (entre amis et promotion).
- Rafraichis Je utomatique des demandes toute les 10 secondes. (modifiable dans le code)
- Possibilité d'accepter ou de refuser la demande :
	- En cas de réponse positive, ajoute immédiatement le contact parmis la liste d'amis.
	- Dans le cas contraire, supprime la demande.

#### > Affichage des groupes privés (=conversation privé)(2 personnes max)
- Lors d'un clique sur le nom d'un groupe privé, ouvre la discussion, affiche les messages éxistants s'il y en a, et modifie le nom d'entête de l'encart de message par le nom du groupe. (Le nom du groupe corresponsant au prenom et nom des participants)

#### > Envoyer message
- Sans ouvrir de conversation, écrire dans la barre et envoyer par le biais de la touche entrée ne produit rien.
- Après avoir ouvert une conversation, vous pouvez envoyer un message à l'interlocuteur en écrivant dans le champ prévu à cet effet, puis envoyer en appuyant sur la touche 'entrée'.

#### > Visualisation des messages
- Visualisation des nouveaux ET des anciens messages.
- Rafraichissement automatique des messages toute les 5 secondes donc on peut considérer que c'est du temps réel (modifiable dans le code).
- Distinction de couleur entre l'identité de l'envoyeur et celle du receveur.

### Fonctionnalitées manquantes et/ou non finis

#### > Listing des contacts par ordre alpabétique

#### > Notification de réception de messages :
Non fais mais même principe que pour les notifications de réception de demande d'amis qui elles sont opérationnelles.

#### > Groupes publiques :
Pas dutout géré dans les conversations, des dicussions entre 2 personnes (privés) uniquement sont possibles.

#### > Contacts : 
Les contacts sont constitués uniquement des personnes de la promotion d'utilisateur et de ses amis. L'utilisateur n'a pas accès aux autres personnes présente sur le site, il ne peut donc pas ajouter des personnes en amis qui ne sont pas de sa promotion.

#### > Date des messages :
Les messages sont datés dans la base de donnée, mais le format ne me plaît pas et je n'ai pas pris le temps de modifié ça donc j'ai préféré ne pas le mettre à l'affichage des messages.

#### > Fichiers dans conversations
Possibilité d'envoyer des fichiers dans les conversations => Pas dutout pris en charge pour le moment.

#### > Conversation avec emoji / gif
Possibilité d'envoyer des emojis/gifs dans les conversations => Pas dutout pris en charge pour le moment.
	
#### > Chat par socket ??
Ce chat utilise uniquement la base de donnée et du rafraichissement de contenu périodique par manque de temps et de connaissances pour mettre en places des sockets.

#### > Barre de recherche dans les contacts pour rechercher des personnes hors de la promotion et pouvoir les ajouter en ami.

#### > Groupe paramétrables :
- Nom de groupe
- Avatar de groupe
- Personnalisation des couleurs etc...

#### > Beaucoup de grosses et petites fonctionnalités (comme celles citées ci-dessus) sont manquantes par manque de temps <


