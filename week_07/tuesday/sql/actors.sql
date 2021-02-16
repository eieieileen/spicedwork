DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    id SERIAL primary key,
    name VARCHAR(255) NOT NULL,
    age INT,
    number_of_oscars VARCHAR
);

INSERT INTO actors (name, age,  number_of_oscars) VALUES ('Leonardo DiCaprio', '41', 1);
INSERT INTO actors (name, age,  number_of_oscars) VALUES ('Jennifer Lawrence', '25', 1);
INSERT INTO actors (name, age,  number_of_oscars) VALUES ('Samuel L. Jackson', '67', 0);
INSERT INTO actors (name, age,  number_of_oscars) VALUES ('Meryl Streep', '66', 3);
INSERT INTO actors (name, age,  number_of_oscars) VALUES ('John Cho', '43', 0);

-- Which actors have more than one oscar?
SELECT name FROM actors WHERE number_of_oscars > '1';

-- -- Which actors are older than 30 years old?
SELECT name FROM actors WHERE age > '30';