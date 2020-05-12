DROP DATABASE IF EXISTS quiz2;


CREATE DATABASE quiz2;



USE quiz2;


CREATE TABLE movie(
    id INT AUTO_INCREMENT,
    question TEXT,
    answers1 TEXT,
    answers2 TEXT,
    answers3 TEXT,
    answers4 TEXT,
    correct int,
    PRIMARY key (id)
)





