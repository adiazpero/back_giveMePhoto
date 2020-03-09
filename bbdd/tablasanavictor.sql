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


-- Volcando estructura de base de datos para appfotografia
CREATE DATABASE IF NOT EXISTS `appfotografia` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `appfotografia`;

-- Volcando estructura para tabla appfotografia.cursos
CREATE TABLE IF NOT EXISTS `cursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(60) NOT NULL,
  `duracion` time NOT NULL,
  `nivel` enum('iniciacion','medio','avanzado') NOT NULL,
  `precio` decimal(6,0) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla appfotografia.cursos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;

-- Volcando estructura para tabla appfotografia.pedido
CREATE TABLE IF NOT EXISTS `pedido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `direccion` varchar(60) NOT NULL,
  `telefono` int(9) unsigned NOT NULL DEFAULT 0,
  `fechapedido` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fk_usuario` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario` (`fk_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla appfotografia.pedido: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;

-- Volcando estructura para tabla appfotografia.pedido_cursos
CREATE TABLE IF NOT EXISTS `pedido_cursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_pedido` int(11) NOT NULL,
  `fk_cursos` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pedido` (`fk_pedido`),
  KEY `fk_cursos` (`fk_cursos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla appfotografia.pedido_cursos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `pedido_cursos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido_cursos` ENABLE KEYS */;

-- Volcando estructura para tabla appfotografia.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` enum('camara','objetivo','accesorio') NOT NULL,
  `marca` varchar(30) NOT NULL,
  `modelo` varchar(30) NOT NULL,
  `resolucion` float unsigned DEFAULT NULL,
  `focal` varchar(50) DEFAULT NULL,
  `iso` int(20) DEFAULT NULL,
  `peso` float NOT NULL,
  `precio` float unsigned NOT NULL,
  `stock` int(10) unsigned NOT NULL,
  `altura` varchar(25) DEFAULT NULL,
  `tecnicanaturaleza` int(1) NOT NULL DEFAULT 0,
  `tecnicanocturna` int(1) NOT NULL DEFAULT 0,
  `tecnicaretraro` int(1) NOT NULL DEFAULT 0,
  `tecnicamacro` int(1) NOT NULL DEFAULT 0,
  `imagen1` varchar(100) NOT NULL,
  `imagen2` varchar(100) NOT NULL,
  `imagen3` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla appfotografia.productos: ~24 rows (aproximadamente)
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT IGNORE INTO `productos` (`id`, `categoria`, `marca`, `modelo`, `resolucion`, `focal`, `iso`, `peso`, `precio`, `stock`, `altura`, `tecnicanaturaleza`, `tecnicanocturna`, `tecnicaretraro`, `tecnicamacro`, `imagen1`, `imagen2`, `imagen3`) VALUES
	(1, 'camara', 'nikon', 'D3500', 24.2, '', 12800, 365, 350, 10, '-', 0, 0, 0, 1, 'https://images-na.ssl-images-amazon.com/images/I/81E6bLCTYyL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71rBCPiCDiL._SL1500_.jpg', 'https://natigomezmorales.com/wp-content/uploads/2019/05/macro-8.jpg'),
	(3, 'camara', 'nikon', 'coolpix', 16, '35-135', 6400, 500, 300, 10, '-', 1, 0, 1, 1, 'https://images-na.ssl-images-amazon.com/images/I/91%2BBDENUjUL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91mqyXaHL9L._SL1500_.jpg', 'https://nl.letsgodigital.org/uploads/2019/01/coolpix-b600.jpg'),
	(4, 'camara', 'nikon ', 'D5600', 24.7, '', 25600, 450, 700, 10, '-', 1, 0, 1, 0, 'https://images-na.ssl-images-amazon.com/images/I/81OXkfWNa3L._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/718sJMJwrhL._SL1500_.jpg', 'https://www.fotonostra.com/fotografia/fotos/elretrato.jpg'),
	(5, 'camara', 'nikon', 'D750', 24.3, '', 51200, 840, 1200, 10, '-', 1, 1, 1, 1, 'https://images-na.ssl-images-amazon.com/images/I/81hX14JYLpL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/7168je-uNOL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81hVybl0U2L._SL1500_.jpg'),
	(6, 'camara', 'canon', 'EOS 2000D', 24.1, '', 6400, 380, 325, 10, '-', 0, 0, 0, 1, 'https://images-na.ssl-images-amazon.com/images/I/718wPji6vSL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71wOZwtLMxL._SL1500_.jpg', 'https://cdn.shopify.com/s/files/1/1801/1563/articles/jill-heyer-5576_2048x2048.jpg?v=1516744881'),
	(7, 'camara', 'canon', 'EOS 77D', 24.2, '', 25600, 540, 580, 10, '-', 1, 0, 1, 0, 'https://images-na.ssl-images-amazon.com/images/I/91re8M%2BtB-L._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81ipxDetYzL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81ipxDetYzL._SL1500_.jpg'),
	(8, 'camara', 'canon', 'EOS 90D', 32.5, '', 521200, 700, 1300, 10, '-', 1, 1, 1, 1, 'https://images-na.ssl-images-amazon.com/images/I/61zcWNrv65L._SL1080_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/41OXEcpYypL.jpg', 'https://www.dzoom.org.es/wp-content/uploads/2014/03/8120144357_d15ee9ee8f_b-810x540.jpg'),
	(9, 'camara', 'sony', 'RX10', 20.2, '24-200', 25600, 760, 599, 10, '-', 1, 0, 1, 1, 'https://images-na.ssl-images-amazon.com/images/I/51hndsnPofL._SL1014_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51iwipS53DL._SL1014_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51IUfm2F0AL.jpg'),
	(10, 'camara', 'sony', 'alpha 7', 24.3, '', 25600, 415, 799, 10, '-', 1, 1, 1, 0, 'https://images-na.ssl-images-amazon.com/images/I/51T%2BPr5F9JL.jpg', 'https://images-na.ssl-images-amazon.com/images/I/41r7LlJgrTL.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71q1kVxEDdL._SL1200_.jpg'),
	(11, 'camara', 'sony ', 'alpha 7s', 12.2, '', 102400, 910, 2000, 10, '-', 1, 1, 1, 1, 'https://images-na.ssl-images-amazon.com/images/I/71C1Zp4lTSL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61W%2BleFdbDL._SL1200_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71Qq7giq7LL._SL1200_.jpg'),
	(12, 'camara', 'olympus', 'm10', 16.1, '', 25600, 340, 580, 10, '-', 1, 0, 1, 0, 'https://images-na.ssl-images-amazon.com/images/I/91Qro4jz5yL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81QkNmr3F3L._SL1500_.jpg', 'https://aprenderfotografia.online/wp-content/uploads/2019/07/Curso-de-sesion-fotografica-en-estudio-'),
	(13, 'camara', 'panasonic', 'fz330', 12.1, '26-600', 6400, 550, 475, 10, '-', 1, 0, 1, 1, 'https://images-na.ssl-images-amazon.com/images/I/91vN5YilrvL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81Qv18qJInL._SL1500_.jpg', 'https://i.ytimg.com/vi/Zj7Kly2Lyuc/hqdefault.jpg'),
	(14, 'objetivo', 'nikkor', '35', 0, '35', 0, 200, 199, 5, '-', 1, 1, 0, 0, 'https://images-na.ssl-images-amazon.com/images/I/41FtgQymFDL.jpg', 'https://fotodelrecuerdo.com.mx//media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95', 'https://images2.alphacoders.com/737/737444.jpg'),
	(15, 'objetivo', 'niklkor', '50', 0, '50', 0, 185, 250, 5, '-', 1, 0, 1, 0, 'https://images-na.ssl-images-amazon.com/images/I/71wDQDl8Q9L._SL1500_.jpg', 'https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/450_1000.jpg', 'https://image.freepik.com/foto-gratis/retrato-blanco-negro-joven-africana_87414-4007.jpg'),
	(16, 'objetivo', 'nikkor', '18-140', 0, '18-140', 0, 490, 360, 5, '-', 1, 0, 1, 1, 'https://images-na.ssl-images-amazon.com/images/I/81wLywkALLL._SL1500_.jpg', 'https://cdn.pixabay.com/photo/2019/10/23/20/52/eye-4572820_960_720.jpg', 'https://cdn.hswstatic.com/gif/lake-freeze-horses-orig.jpg'),
	(17, 'objetivo', 'canon', '35', 0, '35', 0, 210, 250, 5, '-', 1, 1, 0, 0, 'https://images-na.ssl-images-amazon.com/images/I/81JxVniYtxL._SL1500_.jpg', 'https://cdn.pixabay.com/photo/2019/12/09/17/00/lion-4683920_960_720.jpg', 'https://blog.foto24.com/wp-content/uploads/2015/08/fotografia-nocturna-urbana-destacada-758x502.jpg'),
	(18, 'objetivo', 'canon', '85', 0, '85', 0, 425, 380, 5, '-', 1, 0, 1, 0, 'https://images-na.ssl-images-amazon.com/images/I/61GvpXJzoNL._SL1000_.jpg', 'https://d2t54f3e471ia1.cloudfront.net/laimagen9/multimedia/galerias/fotos/2897980_341.jpg', 'https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/10/17/Recortada/img_jelcacho_20181017-111257_'),
	(19, 'objetivo', 'canon', '18-135', 0, '18-135', 0, 454, 400, 5, '-', 1, 0, 1, 1, 'https://images-na.ssl-images-amazon.com/images/I/811XCG-cNVL._SL1500_.jpg', 'https://s1.1zoom.me/big0/546/Dandelions_Ladybugs_493387.jpg', 'https://i.blogs.es/ab4693/ejercicios-basicos-aprender-fotografia-1/450_1000.jpeg'),
	(20, 'objetivo', 'sony', '16-50', 0, '16-50', 0, 116, 170, 5, '-', 1, 1, 1, 0, 'https://images-na.ssl-images-amazon.com/images/I/51Cv3EGOMsL._SL1014_.jpg', 'https://andanafoto.com/wp-content/uploads/2016/02/Fotografia_callejera_y_moda_en_ANDANA_foto_21.jpg', 'https://www.dzoom.org.es/wp-content/uploads/2015/04/Preparando-salida-nocturna-12-1024x1024.jpg'),
	(21, 'objetivo', 'sony', '55-210', 0, '55-210 ', 0, 345, 210, 5, '-', 1, 0, 1, 1, 'https://images-na.ssl-images-amazon.com/images/I/71mnhrbHzkL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91vgGLkdnrL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61tvWKgE2tL._SL1400_.jpg'),
	(22, 'objetivo', 'olympus', '45', 0, '45', 0, 116, 195, 5, '-', 1, 1, 1, 0, 'https://images-na.ssl-images-amazon.com/images/I/81pkSp1rE9L._SL1500_.jpg', 'https://blog.foto24.com/wp-content/uploads/2016/04/luces-estelas-coches-destacada-758x474.jpg', 'https://aprender.zoner.es/wp-content/uploads/2017/10/header-1-640x360.jpg'),
	(23, 'accesorio', 'k&f', 'tm2324', 0, '', 0, 1.36, 69, 5, '46-156cm', 1, 1, 1, 1, 'https://images-na.ssl-images-amazon.com/images/I/61Xa8%2BUwSuL._SL1000_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61vRj5Q2vSL._SL1000_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61dyl9drzNL._SL1000_.jpg'),
	(24, 'accesorio', 'newer', 'B234', 0, '', 0, 1.24, 26, 5, '56-142cm', 1, 0, 1, 1, 'https://images-na.ssl-images-amazon.com/images/I/71d4Fur03%2BL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71JE3j28-HL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/712MDNtb4cL._SL1500_.jpg'),
	(25, 'accesorio', 'manfroto', 'basic', 0, '', 0, 0.5, 17, 5, '42-127cm', 1, 0, 1, 0, 'https://images-na.ssl-images-amazon.com/images/I/71IB16BjVtL._SL1500_.jpg', 'https://www.dzoom.org.es/wp-content/uploads/2018/06/fotografo-tripode-teleobjetivo-tripode-velocidad', '0https://st.focusedcollection.com/14026668/i/650/focused_179048016-stock-photo-spain-valdovino-portr');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;

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

-- Volcando datos para la tabla appfotografia.usuarios: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
