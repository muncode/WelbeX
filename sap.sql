-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 18 2020 г., 03:11
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `sap`
--

-- --------------------------------------------------------

--
-- Структура таблицы `sap`
--

CREATE TABLE `sap` (
  `date` date NOT NULL,
  `name` varchar(32) NOT NULL,
  `col` int(11) NOT NULL,
  `distance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sap`
--

INSERT INTO `sap` (`date`, `name`, `col`, `distance`) VALUES
('2020-05-14', 'Alex', 2, 22),
('2020-05-15', 'John', 3, 33),
('2020-05-15', 'Zac', 4, 44),
('2020-05-13', 'Henry', 1, 11),
('2020-05-16', 'Петя', 5, 55),
('2020-05-17', 'Маша', 6, 66),
('2020-05-12', 'Коля', 7, 77),
('2020-05-10', 'Саша', 8, 88),
('2020-05-10', 'Игорь', 9, 99),
('2020-05-17', 'Саша', 10, 100),
('2020-05-18', 'Катя', 11, 111);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
