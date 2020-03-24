-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 24 mars 2020 à 21:36
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `intra_cesi`
--

-- --------------------------------------------------------

--
-- Structure de la table `actualite`
--

DROP TABLE IF EXISTS `actualite`;
CREATE TABLE IF NOT EXISTS `actualite` (
  `id_actualite` int(11) NOT NULL AUTO_INCREMENT,
  `status_actualite` varchar(50) NOT NULL,
  `titre_actualite` varchar(500) NOT NULL,
  `description_actualite` varchar(5000) NOT NULL,
  `id_personne` int(11) NOT NULL,
  `date_creation_actualite` date NOT NULL,
  `chemin_image_actualite` varchar(255) NOT NULL,
  `date_evenement_actualite` date NOT NULL,
  `status_evenement_actualite` varchar(255) NOT NULL,
  PRIMARY KEY (`id_actualite`),
  KEY `actualite_personne_FK` (`id_personne`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `actualite`
--

INSERT INTO `actualite` (`id_actualite`, `status_actualite`, `titre_actualite`, `description_actualite`, `id_personne`, `date_creation_actualite`, `chemin_image_actualite`, `date_evenement_actualite`, `status_evenement_actualite`) VALUES
(1, 'event', 'fin confinement', 'le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker. ', 1, '2020-03-22', '', '2020-04-01', ''),
(2, 'actu', 'confinement', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum augue eleifend felis pulvinar sodales. Maecenas eu odio sed tellus scelerisque commodo fringilla id nisi. Duis non dignissim purus. Vivamus bibendum libero velit, a sollicitudin massa accumsan egestas. ', 2, '2020-03-16', '', '0000-00-00', '');

-- --------------------------------------------------------

--
-- Structure de la table `ami`
--

DROP TABLE IF EXISTS `ami`;
CREATE TABLE IF NOT EXISTS `ami` (
  `id_personne` int(11) NOT NULL,
  `id_personne_ami` int(11) NOT NULL,
  `date_rencontre` varchar(255) NOT NULL,
  PRIMARY KEY (`id_personne`,`id_personne_ami`),
  KEY `ami_personne0_FK` (`id_personne_ami`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ami`
--

INSERT INTO `ami` (`id_personne`, `id_personne_ami`, `date_rencontre`) VALUES
(1, 2, '2020-03-01'),
(1, 3, '2020-03-17'),
(1, 4, ''),
(1, 5, ''),
(1, 6, ''),
(1, 10, ''),
(2, 1, '2020-03-01'),
(2, 3, '24 03 2020'),
(2, 4, '24 03 2020'),
(2, 5, ''),
(2, 6, ''),
(2, 7, ''),
(2, 8, ''),
(2, 9, ''),
(2, 10, ''),
(2, 11, ''),
(3, 1, '2020-03-17'),
(3, 2, '24 03 2020'),
(3, 4, '24 03 2020'),
(4, 1, ''),
(4, 2, '24 03 2020'),
(4, 3, '24 03 2020'),
(4, 10, ''),
(4, 11, ''),
(5, 1, ''),
(5, 2, ''),
(5, 6, ''),
(5, 11, ''),
(6, 1, ''),
(6, 2, ''),
(6, 5, ''),
(6, 11, ''),
(7, 8, ''),
(7, 9, ''),
(8, 7, ''),
(8, 9, ''),
(9, 7, ''),
(9, 8, ''),
(10, 1, ''),
(10, 2, ''),
(11, 2, '');

-- --------------------------------------------------------

--
-- Structure de la table `association_groupe_personne`
--

DROP TABLE IF EXISTS `association_groupe_personne`;
CREATE TABLE IF NOT EXISTS `association_groupe_personne` (
  `id_groupe` int(11) NOT NULL,
  `id_personne` int(11) NOT NULL,
  PRIMARY KEY (`id_groupe`,`id_personne`),
  KEY `association_groupe_personne_personne0_FK` (`id_personne`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `association_groupe_personne`
--

INSERT INTO `association_groupe_personne` (`id_groupe`, `id_personne`) VALUES
(1, 1),
(5, 1),
(7, 1),
(1, 2),
(5, 2),
(7, 2),
(8, 2),
(5, 3),
(8, 3),
(3, 4),
(5, 4),
(6, 5),
(6, 6),
(2, 7),
(5, 7),
(2, 8),
(5, 8),
(2, 9),
(5, 9),
(4, 10),
(5, 10);

-- --------------------------------------------------------

--
-- Structure de la table `competences`
--

DROP TABLE IF EXISTS `competences`;
CREATE TABLE IF NOT EXISTS `competences` (
  `id_personne` int(11) NOT NULL,
  `titre_competence1` varchar(50) DEFAULT NULL,
  `titre_competence2` varchar(50) DEFAULT NULL,
  `titre_competence3` varchar(50) DEFAULT NULL,
  `titre_competence4` varchar(50) DEFAULT NULL,
  `titre_competence5` varchar(50) DEFAULT NULL,
  `valeur_competence1` varchar(3) DEFAULT NULL,
  `valeur_competence2` varchar(3) DEFAULT NULL,
  `valeur_competence3` varchar(3) DEFAULT NULL,
  `valeur_competence4` varchar(3) DEFAULT NULL,
  `valeur_competence5` varchar(3) DEFAULT NULL,
  KEY `id_personne` (`id_personne`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `competences`
--

INSERT INTO `competences` (`id_personne`, `titre_competence1`, `titre_competence2`, `titre_competence3`, `titre_competence4`, `titre_competence5`, `valeur_competence1`, `valeur_competence2`, `valeur_competence3`, `valeur_competence4`, `valeur_competence5`) VALUES
(2, 'HTML', 'CSS', 'C++', 'Python', 'JavaScript', '86', '70', '65', '60', '35'),
(1, 'JavaScript', 'HTML', 'CSS', 'Python', 'C++', '80', '90', '75', '55', '85'),
(3, 'Python', 'C++', 'JavaScript', 'HTML', 'CSS', '50', '45', '35', '80', '75');

-- --------------------------------------------------------

--
-- Structure de la table `document_partage`
--

DROP TABLE IF EXISTS `document_partage`;
CREATE TABLE IF NOT EXISTS `document_partage` (
  `id_document` int(11) NOT NULL AUTO_INCREMENT,
  `chemin_document` varchar(255) NOT NULL,
  `id_promotion` int(11) NOT NULL,
  PRIMARY KEY (`id_document`),
  KEY `document_partage_promotion_FK` (`id_promotion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `filiaire`
--

DROP TABLE IF EXISTS `filiaire`;
CREATE TABLE IF NOT EXISTS `filiaire` (
  `id_filiaire` int(11) NOT NULL AUTO_INCREMENT,
  `libelle_filiaire` varchar(255) NOT NULL,
  PRIMARY KEY (`id_filiaire`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `filiaire`
--

INSERT INTO `filiaire` (`id_filiaire`, `libelle_filiaire`) VALUES
(1, 'RIL'),
(2, 'RISR'),
(3, 'PILOTE');

-- --------------------------------------------------------

--
-- Structure de la table `groupe`
--

DROP TABLE IF EXISTS `groupe`;
CREATE TABLE IF NOT EXISTS `groupe` (
  `id_groupe` int(11) NOT NULL AUTO_INCREMENT,
  `nom_groupe` varchar(255) NOT NULL,
  `description_groupe` varchar(255) DEFAULT NULL,
  `avatar_groupe` varchar(255) DEFAULT NULL,
  `date_heure_creation_groupe` datetime DEFAULT NULL,
  `status_groupe` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_groupe`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `groupe`
--

INSERT INTO `groupe` (`id_groupe`, `nom_groupe`, `description_groupe`, `avatar_groupe`, `date_heure_creation_groupe`, `status_groupe`) VALUES
(1, 'CROC-KI', 'CROC-KI est un groupe de PFR', '', '2020-03-23 00:00:00', 0),
(2, 'Esperluettes', 'Groupe PFR', '', '2020-03-24 00:00:00', 0),
(3, 'SAMM', 'Groupe PFR', '', '2020-03-24 00:00:00', 0),
(4, 'MCMA_Dev', '', '', '2020-03-24 00:00:00', 0),
(5, 'LES-RIL', 'Groupe regroupant toutes les promotions RIL de la CESI Le Mans', '', '2020-03-24 00:00:00', 0),
(6, 'LES-RISR', 'Groupe regroupant toutes les promotions RISR de la CESI Le Mans', '', '2020-03-24 00:00:00', 0),
(7, 'Conversation entre Enzo JURET et Kévin LEHOUX', NULL, NULL, NULL, 1),
(8, 'Conversation entre Enzo JURET et Justin BAHIER', NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

DROP TABLE IF EXISTS `message`;
CREATE TABLE IF NOT EXISTS `message` (
  `id_message` int(11) NOT NULL AUTO_INCREMENT,
  `texte_message` varchar(255) NOT NULL,
  `date_heure_message` varchar(255) NOT NULL,
  `id_personne` int(11) NOT NULL,
  `id_groupe` int(11) NOT NULL,
  PRIMARY KEY (`id_message`),
  KEY `message_personne_FK` (`id_personne`),
  KEY `message_groupe0_FK` (`id_groupe`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `message`
--

INSERT INTO `message` (`id_message`, `texte_message`, `date_heure_message`, `id_personne`, `id_groupe`) VALUES
(1, 'Coucou', '24 03 2020 17 17 38', 2, 8),
(2, 'Bonjour, comment va tu ?', '24 03 2020 18 18 15', 3, 8),
(3, 'Oui et toi ?', '24 03 2020 18 18 35', 2, 8),
(4, 'Je t\'aime', '24 03 2020 18 18 45', 3, 8),
(5, 'Je ne suis pas gay', '24 03 2020 18 18 51', 2, 8);

-- --------------------------------------------------------

--
-- Structure de la table `nom_de_la_table`
--

DROP TABLE IF EXISTS `nom_de_la_table`;
CREATE TABLE IF NOT EXISTS `nom_de_la_table` (
  `id_competences_personne` int(11) NOT NULL,
  `id_personne` int(11) DEFAULT NULL,
  `titre_competence1` varchar(50) DEFAULT NULL,
  `titre_competence2` varchar(50) DEFAULT NULL,
  `titre_competence3` varchar(50) DEFAULT NULL,
  `titre_competence4` varchar(50) DEFAULT NULL,
  `titre_competence5` varchar(50) DEFAULT NULL,
  `valeur_competence1` int(3) DEFAULT NULL,
  `valeur_competence2` int(3) DEFAULT NULL,
  `valeur_competence3` int(3) DEFAULT NULL,
  `valeur_competence4` int(3) DEFAULT NULL,
  `valeur_competence5` int(3) DEFAULT NULL,
  PRIMARY KEY (`id_competences_personne`),
  KEY `id_personne` (`id_personne`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `personne`
--

DROP TABLE IF EXISTS `personne`;
CREATE TABLE IF NOT EXISTS `personne` (
  `id_personne` int(11) NOT NULL AUTO_INCREMENT,
  `nom_personne` varchar(255) NOT NULL,
  `prenom_personne` varchar(255) NOT NULL,
  `e_mail_personne` varchar(255) NOT NULL,
  `dateNaissance_personne` varchar(255) NOT NULL,
  `password_personne` varchar(255) NOT NULL,
  `avatar_personne` varchar(255) NOT NULL,
  `description_personne` text NOT NULL,
  `centres_interets_personne` varchar(255) NOT NULL,
  `sexe_personne` varchar(255) NOT NULL,
  `id_role` int(11) NOT NULL,
  `id_promotion` int(11) NOT NULL,
  `connecte_personne` varchar(255) NOT NULL DEFAULT 'false',
  `adresse_ip_personne` varchar(255) NOT NULL,
  `lienFacebook_personne` varchar(255) NOT NULL,
  `lienTwitter_personne` varchar(255) NOT NULL,
  `lienLinkIn_personne` varchar(255) NOT NULL,
  `lienInstagram_personne` varchar(255) NOT NULL,
  `telephone_personne` varchar(255) NOT NULL,
  `fond_ecran_profil_personne` varchar(255) NOT NULL,
  `demandesAmi_personne` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_personne`),
  KEY `personne_role_FK` (`id_role`),
  KEY `personne_promotion0_FK` (`id_promotion`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `personne`
--

INSERT INTO `personne` (`id_personne`, `nom_personne`, `prenom_personne`, `e_mail_personne`, `dateNaissance_personne`, `password_personne`, `avatar_personne`, `description_personne`, `centres_interets_personne`, `sexe_personne`, `id_role`, `id_promotion`, `connecte_personne`, `adresse_ip_personne`, `lienFacebook_personne`, `lienTwitter_personne`, `lienLinkIn_personne`, `lienInstagram_personne`, `telephone_personne`, `fond_ecran_profil_personne`, `demandesAmi_personne`) VALUES
(1, 'LEHOUX', 'Kévin', 'kevin.lehoux@viacesi.fr', '05/08/1999', 'motdepasse', 'public\\images\\photo_profil\\kevin.lehoux@viacesi.fr.png', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.', '', 'm', 1, 1, 'false', '', '', '', '', '', '0663568414', 'public\\images\\bannieres\\fond-kevin.lehoux@viacesi.fr.jpg', NULL),
(2, 'JURET', 'Enzo', 'enzo.juret@viacesi.fr', '25/11/1999', 'motdepasse', 'public\\images\\photo_profil\\enzo.juret@viacesi.fr.png', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.', '', 'M', 1, 1, 'true', '', 'https://www.facebook.com/enzo.juret', '', 'https://www.linkedin.com/in/enzo-juret-491622183/', 'https://www.instagram.com/enzo.juret/?hl=fr', '0663865914', 'public\\images\\bannieres\\fond-enzo.juret@viacesi.fr.jpg', NULL),
(3, 'BAHIER', 'Justin', 'justin.bahier@viacesi.fr', '', 'motdepasse', 'public\\images\\photo_profil\\justin.bahier@viacesi.fr.png', 'Actuellement étudiant à la CESI de Le Mans en Alternance, dans l\'entreprise BUISARD. ', '', 'm', 1, 1, 'true', '', '', '', '', '', '0754865112', 'public\\images\\bannieres\\fond-justin.bahier@viacesi.fr.jpg', ''),
(4, 'AGHARBI', 'Ayman', 'ayman.agharbi@viacesi.fr', '', 'motdepasse', 'public/images/photo_profil/ayman.agharbi@viacesi.fr.png', 'Mon talent décolle tel un avion !', '', 'm', 1, 1, 'false', '', '', '', '', '', '', 'public/images/bannieres/fond-ayman.agharbi@viacesi.fr.jpg', ''),
(5, 'POITOU', 'Kilian', 'kilian.poitou@viacesi.fr', '', 'motdepasse', 'public/images/photo_profil/kilian.poitou@viacesi.fr.png', 'Je suis un réseau et alors ?', '', 'm', 1, 2, 'false', '', '', '', '', '', '', 'public/images/bannieres/fond-kilian.poitou@viacesi.fr.jpg', NULL),
(6, 'LEVILLAIN', 'Dimitri', 'dimitri.levillain@viacesi.fr', '', 'motdepasse', 'public/images/photo_profil/dimitri.levillain@viacesi.fr.png', 'Je suis l\'ami et le collègue de classe de POITOU kilian', '', 'm', 1, 2, 'true', '', '', '', '', '', '', 'public/images/bannieres/fond-dimitri.levillain@viacesi.fr.jpg', NULL),
(7, 'CHERAMY', 'Arthur', 'arthur.cheramy@viacesi.fr', '', 'motdepasse', 'public/images/photo_profil/arthur.cheramy@viacesi.fr.png', 'Sympathique et incroyablement intelligent..', '', 'm', 1, 1, 'false', '', '', '', '', '', '0421124587', 'public/images/bannieres/fond-arthur.cheramy@viacesi.fr.jpg', NULL),
(8, 'POUPELIN', 'Alexis', 'alexis.poupelin@viacesi.fr', '', 'motdepasse', 'public/images/photo_profil/alexis.poupelin@viacesi.fr.png', 'Pro des frameworks, je suis là pour vous servir !', '', 'm', 1, 1, 'false', '', '', '', '', '', '0789581412', 'public/images/bannieres/fond-alexis.poupelin@viacesi.fr.jpg', NULL),
(9, 'CORGNIARD', 'Antoine', 'antoine.corgniard@viacesi.fr', '', 'motdepasse', 'public/images/photo_profil/antoine.corgniard@viacesi.fr.png', 'Je suis un fou dans ma tête !', '', 'm', 1, 1, 'false', '', '', '', '', '', '0112234578', 'public/images/bannieres/fond-antoine.corgniard@viacesi.fr.jpg', NULL),
(10, 'AZIBEIRO', 'Clément', 'clement.azibeiro@viacesi.fr', '', 'motdepasse', 'public/images/photo_profil/clement.azibeiro@viacesi.fr.png', 'JE SUIS JUSTE LE BOSS EN FAITE !', '', 'm', 1, 1, 'false', '', '', '', '', '', '0663524178', 'public/images/bannieres/fond-clement.azibeiro@viacesi.fr.jpg', NULL),
(11, 'BOURGOIN', 'Guillaume', 'guillaume.bourgoin@viacesi.fr', '', 'motdepasse', 'public/images/photo_profil/guillaume.bourgoin@viacesi.fr.png', 'Je suis le pilote de formation de la promotion RIL2019 et RISR2019.m', '', 'm', 1, 3, 'false', '', '', '', '', '', '0212456578', 'public/images/bannieres/fond-guillaume.bourgoin@viacesi.fr.jpg', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `promotion`
--

DROP TABLE IF EXISTS `promotion`;
CREATE TABLE IF NOT EXISTS `promotion` (
  `id_promotion` int(11) NOT NULL AUTO_INCREMENT,
  `libelle_promotion` varchar(255) NOT NULL,
  `annee_depart_promotion` year(4) NOT NULL,
  `annee_fin_promotion` year(4) NOT NULL,
  `id_filiaire` int(11) NOT NULL,
  PRIMARY KEY (`id_promotion`),
  KEY `promotion_filiaire_FK` (`id_filiaire`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `promotion`
--

INSERT INTO `promotion` (`id_promotion`, `libelle_promotion`, `annee_depart_promotion`, `annee_fin_promotion`, `id_filiaire`) VALUES
(1, 'RIL 2019', 2019, 2020, 1),
(2, 'RISR2019', 2019, 2020, 2),
(3, 'PILOTE', 2019, 2020, 3);

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id_role` int(11) NOT NULL AUTO_INCREMENT,
  `libelle_role` varchar(255) NOT NULL,
  `couleur_role` varchar(255) NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id_role`, `libelle_role`, `couleur_role`) VALUES
(1, 'alternant', '');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `actualite`
--
ALTER TABLE `actualite`
  ADD CONSTRAINT `actualite_personne_FK` FOREIGN KEY (`id_personne`) REFERENCES `personne` (`id_personne`);

--
-- Contraintes pour la table `ami`
--
ALTER TABLE `ami`
  ADD CONSTRAINT `ami_personne0_FK` FOREIGN KEY (`id_personne_ami`) REFERENCES `personne` (`id_personne`),
  ADD CONSTRAINT `ami_personne_FK` FOREIGN KEY (`id_personne`) REFERENCES `personne` (`id_personne`);

--
-- Contraintes pour la table `association_groupe_personne`
--
ALTER TABLE `association_groupe_personne`
  ADD CONSTRAINT `association_groupe_personne_groupe_FK` FOREIGN KEY (`id_groupe`) REFERENCES `groupe` (`id_groupe`),
  ADD CONSTRAINT `association_groupe_personne_personne0_FK` FOREIGN KEY (`id_personne`) REFERENCES `personne` (`id_personne`);

--
-- Contraintes pour la table `document_partage`
--
ALTER TABLE `document_partage`
  ADD CONSTRAINT `document_partage_promotion_FK` FOREIGN KEY (`id_promotion`) REFERENCES `promotion` (`id_promotion`);

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_groupe0_FK` FOREIGN KEY (`id_groupe`) REFERENCES `groupe` (`id_groupe`),
  ADD CONSTRAINT `message_personne_FK` FOREIGN KEY (`id_personne`) REFERENCES `personne` (`id_personne`);

--
-- Contraintes pour la table `personne`
--
ALTER TABLE `personne`
  ADD CONSTRAINT `personne_promotion0_FK` FOREIGN KEY (`id_promotion`) REFERENCES `promotion` (`id_promotion`),
  ADD CONSTRAINT `personne_role_FK` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`);

--
-- Contraintes pour la table `promotion`
--
ALTER TABLE `promotion`
  ADD CONSTRAINT `promotion_filiaire_FK` FOREIGN KEY (`id_filiaire`) REFERENCES `filiaire` (`id_filiaire`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
