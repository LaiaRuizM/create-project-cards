CREATE DATABASE  IF NOT EXISTS `freedb_proyectos_y_ya_estaría` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `freedb_proyectos_y_ya_estaría`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: thatsallfolks
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `idAuthor` int NOT NULL AUTO_INCREMENT,
  `autor` varchar(100) NOT NULL,
  `job` varchar(1024) DEFAULT NULL,
  `image` longtext,
  PRIMARY KEY (`idAuthor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `idProject` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `slogan` varchar(1024) DEFAULT NULL,
  `repo` varchar(1024) DEFAULT NULL,
  `demo` varchar(1024) DEFAULT NULL,
  `technologies` varchar(1024) DEFAULT NULL,
  `description` varchar(1024) DEFAULT NULL,
  `photo` longtext,
  `fkProject` int NOT NULL,
  PRIMARY KEY (`idProject`),
  KEY `fkProject` (`fkProject`),
  CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`fkProject`) REFERENCES `projects` (`idProject`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-29 12:40:22

INSERT INTO authors (autor, job, image) VALUES ("Laia", "Web Developer", "https://drive.google.com/file/d/13Yl0CcsMR924KIztQbps1-zKtBVadHpB/view?usp=sharing"), 
("Laura", "Web Developer", "https://drive.google.com/file/d/13Yl0CcsMR924KIztQbps1-zKtBVadHpB/view?usp=sharing"),
("Vero", "Web Developer", "https://drive.google.com/file/d/13Yl0CcsMR924KIztQbps1-zKtBVadHpB/view?usp=sharing"),
("Titika", "Web Developer", "https://drive.google.com/file/d/13Yl0CcsMR924KIztQbps1-zKtBVadHpB/view?usp=sharing");

INSERT INTO projects (name, slogan, repo, demo, technologies, description, photo, fkProject) VALUES ("Proyectos y ya estaría", "pueeees, ya estaría!", "https://github.com/Adalab/project-promo-s-module-4-team-3", "http://beta.adalab.es/project-promo-s-module-3-team-3/", "HTML, SCSS, JS, REACT", "El mejor proyecto del mundo mundial", "https://drive.google.com/file/d/1XO6eHT3sCVi3wwCWJjFDpBHBUaap7pQf/view?usp=sharing", 1), 
("Proyectos y ya estaría", "pueeees, ya estaría!", "https://github.com/Adalab/project-promo-s-module-4-team-3", "http://beta.adalab.es/project-promo-s-module-3-team-3/", "HTML, SCSS, JS, REACT", "El mejor proyecto del mundo mundial", "https://drive.google.com/file/d/1XO6eHT3sCVi3wwCWJjFDpBHBUaap7pQf/view?usp=sharing", 2), 
("Proyectos y ya estaría", "pueeees, ya estaría!", "https://github.com/Adalab/project-promo-s-module-4-team-3", "http://beta.adalab.es/project-promo-s-module-3-team-3/", "HTML, SCSS, JS, REACT", "El mejor proyecto del mundo mundial", "https://drive.google.com/file/d/1XO6eHT3sCVi3wwCWJjFDpBHBUaap7pQf/view?usp=sharing", 3), 
("Proyectos y ya estaría", "pueeees, ya estaría!", "https://github.com/Adalab/project-promo-s-module-4-team-3", "http://beta.adalab.es/project-promo-s-module-3-team-3/", "HTML, SCSS, JS, REACT", "El mejor proyecto del mundo mundial", "https://drive.google.com/file/d/1XO6eHT3sCVi3wwCWJjFDpBHBUaap7pQf/view?usp=sharing", 4); 

SELECT * FROM authors;
SELECT * FROM projects;

SELECT authors.autor, authors.job, authors.image, projects.name, projects.slogan, projects.repo, projects.demo, projects.technologies, projects.description, projects.photo 
FROM authors INNER JOIN projects ON authors.idAuthor = projects.fkProject 
WHERE authors.idAuthor = 3;

