CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO INCREMENT,
    burger_name VARCHAR(20) NOT NULL,
    devoured: BOOLEAN DEFAULT false,
    date TIMESTAMP,
    PRIMARY KEY (id)
);