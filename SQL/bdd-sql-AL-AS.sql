-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------
--
-- Structure de la table `categorie_age`
--

CREATE TABLE `categorie_age` (
  `categorie` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
--
-- Contenu de la table `categorie_age`
--

INSERT INTO `categorie_age` (`categorie`) VALUES
('Ancien'),
('Benjamin'),
('Cadet'),
('Féminine'),
('Junior'),
('Minime'),
('Poussin'),
('Pupille'),
('Sénior'),
('Super Vétéran'),
('Vétéran');

-- --------------------------------------------------------
--
-- Structure de la table `categorie_valeur`
--

CREATE TABLE `categorie_valeur` (
  `categorie` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
--
-- Contenu de la table `categorie_valeur`
--

INSERT INTO `categorie_valeur` (`categorie`) VALUES
('1ere cat'),
('2eme  cat'),
('3eme  cat'),
('4eme  cat'),
('5eme  cat');

-- --------------------------------------------------------
--
-- Structure de la table `club`
--

CREATE TABLE `club` (
  `club` varchar(50) NOT NULL,
  `mail` varchar(150) NOT NULL,
  `code_insee` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
--
-- Contenu de la table `club`
--

INSERT INTO `club` (`club`, `mail`, `code_insee`) VALUES
('ABC PLOUESCAT', 'jlr@mental.com', 29185),
('AC GOUESNOU', 'mccall@serie.fr', 29061),
('CC BOURG BLANC', 'te@warnerbros.com', 29015),
('SAINT RENAN.I.V', 'ts@magnum.com', 29260);

-- --------------------------------------------------------
--
-- Structure de la table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `libelle` varchar(150) NOT NULL,
  `date` date NOT NULL,
  `nb_tour` double NOT NULL,
  `distance` double NOT NULL,
  `nb_coureur` int(11) NOT NULL,
  `longueur_tour` double NOT NULL,
  `club` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
--
-- Contenu de la table `course`
--

INSERT INTO `course` (`id`, `libelle`, `date`, `nb_tour`, `distance`, `nb_coureur`, `longueur_tour`, `club`) VALUES
(1, 'Course Cycliste FSGT à GOUESNOU (29)', '2019-05-20', 12, 87.6, 50, 7.3, 'AC GOUESNOU');
INSERT INTO `course` (`id`, `libelle`, `date`, `nb_tour`, `distance`, `nb_coureur`, `longueur_tour`, `club`) VALUES
(2, 'Course Cycliste à BREST (29)', '2020-06-11', 4, 40, 150, 10, 'ABC PLOUESCAT');
INSERT INTO `course` (`id`, `libelle`, `date`, `nb_tour`, `distance`, `nb_coureur`, `longueur_tour`, `club`) VALUES
(3, 'Course Cycliste à PLOUESCAT (29)', '2020-02-26', 1, 150, 400, 150, 'ABC PLOUESCAT');

-- --------------------------------------------------------
--
-- Structure de la table `cycliste`
--

CREATE TABLE `cycliste` (
  `mail` varchar(100) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `num_licence` int(11) DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `valide` tinyint(1) DEFAULT NULL,
  `club` varchar(50) NOT NULL,
  `code_insee` int(11) NOT NULL,
  `categorie` varchar(150) NOT NULL,
  `categorie_categorie_valeur` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
--
-- Contenu de la table `cycliste`
--

INSERT INTO `cycliste` (`mail`, `nom`, `prenom`, `num_licence`, `date_naissance`, `valide`, `club`, `code_insee`, `categorie`, `categorie_categorie_valeur`) VALUES
('ac@fgt.com', 'LECORCHET', 'Aubane', 55602886, '1999-05-03', 0, 'CC BOURG BLANC', 29061, 'Sénior', '2eme  cat'),
('ac@hgt.fr', 'BAILLY', 'Mathéo', 55544762, '1999-08-17', 1, 'AC GOUESNOU', 29061, 'Sénior', '2eme  cat'),
('cl@team.gt', 'TRUONG', 'Héloise', 695576, '1970-02-15', 0, 'ABC PLOUESCAT', 29061, 'Vétéran', '2eme  cat'),
('dj@taem.com', 'DUDORET', 'Joël', 55654078, '1996-12-31', 1, 'ABC PLOUESCAT', 29185, 'Sénior', '1ere cat'),
('kc@pli.fr', 'KERMORGANT', 'Cyril', 695582, '0000-00-00', 0, 'SAINT RENAN.I.V', 29260, 'Vétéran', '3eme  cat'),
('lb@team.fr', 'LUCAS', 'Clairette', 267406, '1945-05-08', 0, 'ABC PLOUESCAT', 29185, 'Ancien', '1ere cat'),
('lg@team.fr', 'LE GLEAU', 'Alwena', 55477384, '1980-02-18', 1, 'AC GOUESNOU', 29015, 'Sénior', '1ere cat'),
('md@ilg.com', 'MOYSAN', 'Eva', 55537517, '1965-03-06', 1, 'ABC PLOUESCAT', 29015, 'Super Vétéran', '2eme  cat'),
('my@trez.fr', 'MEVEL', 'Yann', 369676, '1972-10-10', 1, 'AC GOUESNOU', 29061, 'Vétéran', '1ere cat'),
('pc@uti.fr', 'PREVOT', 'Christophe', 55654078, '1956-08-09', 1, 'CC BOURG BLANC', 29061, 'Super Vétéran', '3eme  cat'),
('sjm@rest.ft', 'SALIOU', 'Jean Marc', 135645, '1961-08-06', 1, 'AC GOUESNOU', 29185, 'Vétéran', '2eme  cat'),
('tb@opf.com', 'TIRILLY', 'Bertrand', 674243, '1973-12-25', 0, 'SAINT RENAN.I.V', 29260, 'Vétéran', '5eme  cat');

-- --------------------------------------------------------
--
-- Structure de la table `participe`
--

CREATE TABLE `participe` (
  `mail` varchar(100) NOT NULL,
  `id` int(11) NOT NULL,
  `place` varchar(15) NOT NULL,
  `dossart` varchar(15) NOT NULL,
  `point` int(11) NOT NULL,
  `temps` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
--
-- Contenu de la table `participe`
--

INSERT INTO `participe` (`mail`, `id`, `place`, `dossart`, `point`, `temps`) VALUES
('ac@fgt.com', 1, '1', '55', 15, '02:04:04'),
('ac@hgt.fr', 1, '2', '76', 10, '02:07:04'),
('cl@team.gt', 1, '3', '81', 8, '02:14:04'),
('dj@taem.com', 1, '4', '55', 7, '02:24:04'),
('kc@pli.fr', 1, '5', '21', 4, '02:34:04'),
('lb@team.fr', 1, '6', '18', 3, '02:44:04');

-- --------------------------------------------------------
--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `mail` varchar(150) NOT NULL,
  `nom` varchar(150) NOT NULL,
  `prenom` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `admin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
--
-- Contenu de la table `user`
--

INSERT INTO `user` (`mail`, `nom`, `prenom`, `password`, `admin`) VALUES
('jlr@mental.com', 'Thered', 'John', 'smiley', 0),
('mccall@serie.fr', 'Hunter', 'Rick', 'deedee', 0),
('te@warnerbros.com', 'Egeri', 'Tom', 'thecat', 1),
('ts@magnum.com', 'Sailec', 'Tom', 'higgins', 0);

-- --------------------------------------------------------
--
-- Structure de la table `ville`
--

CREATE TABLE `ville` (
  `code_insee` int(11) NOT NULL,
  `ville` varchar(50) NOT NULL,
  `code_postal` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
--
-- Contenu de la table `ville`
--

INSERT INTO `ville` (`code_insee`, `ville`, `code_postal`) VALUES
(29015, 'BOURG BLANC', '29860'),
(29061, 'GOUESNOU', '29850'),
(29185, 'PLOUESCAT', '29430'),
(29260, 'ST RENAN', '29290');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `categorie_age`
--
ALTER TABLE `categorie_age`
  ADD PRIMARY KEY (`categorie`);

--
-- Index pour la table `categorie_valeur`
--
ALTER TABLE `categorie_valeur`
  ADD PRIMARY KEY (`categorie`);

--
-- Index pour la table `club`
--
ALTER TABLE `club`
  ADD PRIMARY KEY (`club`),
  ADD UNIQUE KEY `club_user_AK` (`mail`),
  ADD KEY `club_ville0_FK` (`code_insee`);

--
-- Index pour la table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_club_FK` (`club`);

--
-- Index pour la table `cycliste`
--
ALTER TABLE `cycliste`
  ADD PRIMARY KEY (`mail`),
  ADD KEY `cycliste_club_FK` (`club`),
  ADD KEY `cycliste_ville0_FK` (`code_insee`),
  ADD KEY `cycliste_categorie_age1_FK` (`categorie`),
  ADD KEY `cycliste_categorie_valeur2_FK` (`categorie_categorie_valeur`);

--
-- Index pour la table `participe`
--
ALTER TABLE `participe`
  ADD PRIMARY KEY (`mail`,`id`),
  ADD KEY `participe_course0_FK` (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`mail`);

--
-- Index pour la table `ville`
--
ALTER TABLE `ville`
  ADD PRIMARY KEY (`code_insee`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `club`
--
ALTER TABLE `club`
  ADD CONSTRAINT `club_user_FK` FOREIGN KEY (`mail`) REFERENCES `user` (`mail`),
  ADD CONSTRAINT `club_ville0_FK` FOREIGN KEY (`code_insee`) REFERENCES `ville` (`code_insee`);

--
-- Contraintes pour la table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_club_FK` FOREIGN KEY (`club`) REFERENCES `club` (`club`);

--
-- Contraintes pour la table `cycliste`
--
ALTER TABLE `cycliste`
  ADD CONSTRAINT `cycliste_categorie_age1_FK` FOREIGN KEY (`categorie`) REFERENCES `categorie_age` (`categorie`),
  ADD CONSTRAINT `cycliste_categorie_valeur2_FK` FOREIGN KEY (`categorie_categorie_valeur`) REFERENCES `categorie_valeur` (`categorie`),
  ADD CONSTRAINT `cycliste_club_FK` FOREIGN KEY (`club`) REFERENCES `club` (`club`),
  ADD CONSTRAINT `cycliste_ville0_FK` FOREIGN KEY (`code_insee`) REFERENCES `ville` (`code_insee`);

--
-- Contraintes pour la table `participe`
--
ALTER TABLE `participe`
  ADD CONSTRAINT `participe_course0_FK` FOREIGN KEY (`id`) REFERENCES `course` (`id`),
  ADD CONSTRAINT `participe_cycliste_FK` FOREIGN KEY (`mail`) REFERENCES `cycliste` (`mail`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
