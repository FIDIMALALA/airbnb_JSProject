-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 18 Février 2021 à 13:46
-- Version du serveur :  5.7.11
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `airbnbdb`
--
CREATE DATABASE IF NOT EXISTS `airbnbdb` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `airbnbdb`;

-- --------------------------------------------------------

--
-- Structure de la table `hotes`
--

DROP TABLE IF EXISTS `hotes`;
CREATE TABLE IF NOT EXISTS `hotes` (
  `IdHote` int(11) NOT NULL AUTO_INCREMENT,
  `NomHote` varchar(50) DEFAULT NULL,
  `PrenomHote` varchar(50) DEFAULT NULL,
  `DDNHote` date DEFAULT NULL,
  `EMailHote` int(11) DEFAULT NULL,
  `TelHote` varchar(10) DEFAULT NULL,
  `PaysHote` int(11) DEFAULT NULL,
  PRIMARY KEY (`IdHote`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `logement`
--

DROP TABLE IF EXISTS `logement`;
CREATE TABLE IF NOT EXISTS `logement` (
  `idLog` int(11) NOT NULL,
  `AdresseLog` varchar(100) DEFAULT NULL,
  `TypeLog` varchar(50) DEFAULT NULL,
  `NombreVoyageurLog` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
