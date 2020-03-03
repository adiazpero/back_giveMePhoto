-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.11-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla appfotografia.pedido_cursos
CREATE TABLE IF NOT EXISTS `pedido_cursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_pedido` int(11) NOT NULL,
  `fk_cursos` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pedido` (`fk_pedido`),
  KEY `fk_cursos` (`fk_cursos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla appfotografia.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(30) NOT NULL DEFAULT '0',
  `modelo` varchar(30) NOT NULL DEFAULT '0',
  `resolucion` varchar(10) NOT NULL DEFAULT '0',
  `focal` varchar(10) NOT NULL DEFAULT '0',
  `iso` varchar(10) NOT NULL DEFAULT '0',
  `tipo` enum('30','60','90') NOT NULL,
  `peso` varchar(10) NOT NULL DEFAULT '0',
  `imagen1` varchar(100) NOT NULL DEFAULT '0',
  `imagen2` varchar(100) NOT NULL DEFAULT '0',
  `imagen3` varchar(100) NOT NULL DEFAULT '0',
  `precio` decimal(10,0) unsigned NOT NULL DEFAULT 0,
  `stock` int(10) unsigned NOT NULL DEFAULT 0,
  `tecnica` enum('naturaleza','nocturna','retrato','macro') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla appfotografia.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '0',
  `apellidos` varchar(50) NOT NULL DEFAULT '0',
  `email` varchar(60) NOT NULL DEFAULT '0',
  `telefono` int(9) NOT NULL DEFAULT 0,
  `fecharegistro` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `password` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
