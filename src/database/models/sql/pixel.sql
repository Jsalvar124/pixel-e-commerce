DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `products`;
DROP TABLE IF EXISTS `categorias`;
DROP TABLE IF EXISTS `userCategoria`;

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `fullName` VARCHAR(255) NOT NULL,
   `userName` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `dateOfBirth` DATE NOT NULL,
   `address` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `avatar` VARCHAR(255),
   `categoriaId` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `titulo` VARCHAR(255) NOT NULL,
   `descripcionCorta` VARCHAR(255) NOT NULL,
   `longDesc` TEXT(2000) NOT NULL,
   `categoriaId` INT NOT NULL,
   `precio` DECIMAL NOT NULL,
   `descuento` INT,
   `img` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `categorias` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `userCategoria` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `categoria` TINYINT NOT NULL,
   PRIMARY KEY (`id`)
);


INSERT INTO `users` (`id`, `fullName`, `username`, `email`, `dateOfBirth`, `address`, `password`, `avatar`, `categoriaId`) VALUES ('1', 'Robert', 'dasdasda', 'juancarlos@perez.com', '2022-10-12', '131123', '$2a$10$OuXrhoTLoUc0KBy1bVkXYu87HspHCYkeMukz2OgAOGQ5ei7CobfYu', 'AVATAR-IMG1666652148084.jpg', '1');
INSERT INTO `users` (`id`, `fullName`, `username`, `email`, `dateOfBirth`, `address`, `password`, `avatar`, `categoriaId`) VALUES ('2', 'Juan Pérez', 'jperez22', 'jperez22@gmail.com', '2022-10-25', 'CALLE FALSA 123', '$2a$10$nD8O1wUiE1HagqGthphbhOpVTSeUYdaDKPH2BOuYTNGUZoBO44qAK', 'AVATAR-IMG1666680352762.png', '1');
INSERT INTO `users` (`id`, `fullName`, `username`, `email`, `dateOfBirth`, `address`, `password`, `avatar`, `categoriaId`) VALUES ('3', 'Julián Salvá', 'jsalvar124', 'jsalvar124@gmail.com', '2022-10-25', 'CALLE FALSA 123', '$2a$10$/nMv3/szyFgpO7m9ijoMNe5vejps.mHz6a34nJ1ep0NOZA7WOEorq', 'AVATAR-IMG1666747158036.jpg', '1');
INSERT INTO `users` (`id`, `fullName`, `username`, `email`, `dateOfBirth`, `address`, `password`, `avatar`, `categoriaId`) VALUES ('4', 'Pepe Pirulo', 'Pepepirulo', 'pepepirulo@gmail.com', '2022-11-15', 'CALLE FALSA 123', '$2a$10$H7sqactBlZLVRcsMTW3oou8OvQn3eZfsV9HMoDy5HGZ0MhIZRC0LK', 'AVATAR-IMG1668476119598.png', '1');
INSERT INTO `users` (`id`, `fullName`, `username`, `email`, `dateOfBirth`, `address`, `password`, `avatar`, `categoriaId`) VALUES ('5', 'Admin Pixel', 'adminPixel', 'admin@pixel.com', '2022-11-14', 'Pixel Headquarters, San Francisco', '$2a$10$pkIGr4QuB.xYeJZTsxNHSe6oh6bHnDjABDvZpOpj.7XewrrSzPnxm', 'AVATAR-IMG1668481166427.png', '2');
INSERT INTO `users` (`id`, `fullName`, `username`, `email`, `dateOfBirth`, `address`, `password`, `avatar`, `categoriaId`) VALUES ('6', 'Nahuel', 'nahuel22', 'nahu2@gmail.com', '2022-03-08', '233', '$2a$10$1ZcgHuKd2eG.vmLC/DEjKuTKzRiEXcaOdMqF/Nui/oF1O4KkClD9W', 'AVATAR-IMG1668547886213.png', '2');
INSERT INTO `users` (`id`, `fullName`, `username`, `email`, `dateOfBirth`, `address`, `password`, `avatar`, `categoriaId`) VALUES ('7', 'Nuevo Usuario', 'nuevoUsuario', 'nuevoUsuario@gmail.com', '2022-11-16', 'Cl 34 s 51 56', '$2a$10$pnTdECumUD.1ZtQWA5bQ8uwClGxOpovCpkqg8mY3WQEyKtsbW39ZK', 'AVATAR-IMG1668625494306.jpg', '1');
INSERT INTO `users` (`id`, `fullName`, `username`, `email`, `dateOfBirth`, `address`, `password`, `avatar`, `categoriaId`) VALUES ('8', 'juanjo', 'juanjo123', 'juanjo123@gmail.com', '2022-11-24', '1234', '$2a$10$/tVCdNbzD9vaFGAZMrQwP.I65ajLQ37XJX.lp9XgX8j6O.IdPNmTC', 'AVATAR-IMG1668634946520.jpg', '1');
INSERT INTO `users` (`id`, `fullName`, `username`, `email`, `dateOfBirth`, `address`, `password`, `avatar`, `categoriaId`) VALUES ('9', 'Joaquin Pala', 'joaco123', 'jtp123@gmail.com', '2022-11-15', '1234', '$2a$10$/9JkTDmXh5T5a1gem14qT.tpXoU88baDxu3cjXy4p3n3m77ot5PAO', 'AVATAR-IMG1668703131723.png', '1');
INSERT INTO `users` (`id`, `fullName`, `username`, `email`, `dateOfBirth`, `address`, `password`, `avatar`, `categoriaId`) VALUES ('10', 'Jorge Hernández', 'jormate', 'jorgelshz@gmail.com', '1971-12-13', 'CuchaCucha 124', '$2a$10$0Owyax0LQOeLaW5c/TiHyuMBRV4O6H0hCj7R47SzXfuYdfthPN9lC', 'AVATAR-IMG1668719028212.jpg', '1');
INSERT INTO `users` (`id`, `fullName`, `username`, `email`, `dateOfBirth`, `address`, `password`, `avatar`, `categoriaId`) VALUES ('11', 'joaco', 'joaco123', 'joaco@gmail.com', '2022-11-16', '123', '$2a$10$geoSbTLWHX1IK8xCMrh0BeSlkPG0S7jeW6WafmKyoS6XkKzVgUZbO', 'AVATAR-IMG1668734523751.png', '1');

INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('1', '1', 'Computador', 'Computador de escritorio', 'La laptop HP 245 sigue el ritmo de estilos de trabajo móviles gracias a un diseño delgado y ligero. La hermosa pantalla con su angosto borde y relación de pantalla y cuerpo grande brinda amplio espacio para trabajar o reproducir contenido.', '20000', '0', 'pc2.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('2', '1', 'Computador', 'Computador de escritorio', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '0', 'pc3.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('3', '1', 'Computador', 'Computador de escritorio', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '0', 'pc4.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('4', '2', 'Laptop', 'Notebook', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '30000', '10', 'asus.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('5', '2', 'Laptop', 'Notebook', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '30000', '0', 'bangho.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('6', '2', 'Laptop', 'Notebook', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '30000', '0', 'hp.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('7', '2', 'Laptop', 'Notebook', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '0', 'lenovo.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('8', '2', 'Macbook', 'Notebook', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '50000', '0', 'macbook.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('9', '5', 'Mouse redragon', 'Mouse redragon', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '25', 'mouse1.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('10', '5', 'Mouse redragon', 'Mouse económico', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '0', 'mouse2.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('11', '5', 'Mouse', 'Mouse', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '0', 'mouse3.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('12', '5', 'Mouse redragon', 'Mouse redragon', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '0', 'mouse4.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('13', '4', 'Teclado', 'Teclado gamer', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '0', 'teclado1.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('14', '4', 'Teclado', 'Teclado', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '40', 'teclado2.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('15', '4', 'Teclado', 'Teclado gamer', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '0', 'teclado3.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('16', '4', 'Teclado', 'Teclado', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '25', 'teclado4.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('17', '3', 'Monitor', 'Monitor', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '50', 'monitor1.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('18', '3', 'Monitor', 'Monitor LED', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '0', 'monitor2.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('19', '3', 'Monitor', 'Monitor LED', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '0', 'monitor3.png');
INSERT INTO `products` (`id`, `categoriaId`, `titulo`, `descripcionCorta`, `longDesc`, `precio`, `descuento`, `img`) VALUES ('20', '3', 'Monitor', 'Monitor', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '20000', '0', 'monitor4.png');


INSERT INTO `categorias` (`id`, `nombre`) VALUES ('1', 'Computadores');
INSERT INTO `categorias` (`id`, `nombre`) VALUES ('2', 'Notebooks');
INSERT INTO `categorias` (`id`, `nombre`) VALUES ('3', 'Monitores');
INSERT INTO `categorias` (`id`, `nombre`) VALUES ('4', 'Teclados');
INSERT INTO `categorias` (`id`, `nombre`) VALUES ('5', 'Mouse');

INSERT INTO `userCategoria` (`id`, `categoria`) VALUES ('1', '0');
INSERT INTO `userCategoria` (`id`, `categoria`) VALUES ('2', '1');

ALTER TABLE `users` ADD CONSTRAINT `FK_96afb63f-d4c9-4baa-8afc-5db485cd9ab8` FOREIGN KEY (`categoriaId`) REFERENCES `userCategoria`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_75a2a6d5-9ebc-4040-a28e-381bd9d4ab8f` FOREIGN KEY (`categoriaId`) REFERENCES `categorias`(`id`)  ; 

