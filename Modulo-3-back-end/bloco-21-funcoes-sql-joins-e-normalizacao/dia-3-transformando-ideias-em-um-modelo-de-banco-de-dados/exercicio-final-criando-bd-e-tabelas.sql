#Exercício 1: 🚀 Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
#* Nome;
#* Espécie;
#* Sexo;
#* Idade;
#* Localização.
#Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.

#criando o bando de dados:

CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;

#criando as tabelas que necessito:

CREATE TABLE animal (
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    especie VARCHAR(100) NOT NULL,
    sexo VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    localização VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE gerente (
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE cuidador (
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
) ENGINE=InnoDB;

CREATE TABLE animal_cuidador (
	cuidador_id INT NOT NULL,
	animal_id INT NOT NULL,
    FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animal(animal_id)
) ENGINE=InnoDB;

