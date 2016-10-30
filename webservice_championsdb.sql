-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Loomise aeg: Okt 30, 2016 kell 11:15 PM
-- Serveri versioon: 5.6.26
-- PHP versioon: 5.5.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Andmebaas: `webservice_championsdb`
--

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `champions`
--

CREATE TABLE IF NOT EXISTS `champions` (
  `champions_id` int(10) unsigned NOT NULL,
  `name` varchar(14) CHARACTER SET utf8 NOT NULL,
  `role` varchar(16) CHARACTER SET utf8 NOT NULL,
  `winPercent` decimal(4,2) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;

--
-- Andmete tõmmistamine tabelile `champions`
--

INSERT INTO `champions` (`champions_id`, `name`, `role`, `winPercent`) VALUES
(1, 'totu', 'testing', '1.00'),
(10, 'Ashe', 'Adc', '49.00'),
(11, 'Jinx', 'Jinx', '50.12'),
(12, 'poop', 'pls', '21.00'),
(14, 'Ivern', 'Jungle', '50.15'),
(15, 'poop', 'poop', '34.12'),
(16, 'poop', 'poop', '34.12'),
(17, 'poop', 'poop', '34.12'),
(18, 'poop', 'poop', '34.12'),
(25, 'hello', 'my', '12.12'),
(29, 'fudge', 'off', '8.00'),
(30, 'musi', 'musi', '23.00'),
(31, 'kalli', 'kalli', '12.00'),
(32, 'pai', 'pai', '11.00');

--
-- Indeksid tõmmistatud tabelitele
--

--
-- Indeksid tabelile `champions`
--
ALTER TABLE `champions`
  ADD PRIMARY KEY (`champions_id`);

--
-- AUTO_INCREMENT tõmmistatud tabelitele
--

--
-- AUTO_INCREMENT tabelile `champions`
--
ALTER TABLE `champions`
  MODIFY `champions_id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
