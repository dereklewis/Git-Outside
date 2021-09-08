DROP DATABASE IF EXISTS campground_db;
CREATE DATABASE campground_db;

USE campground_db;


CREATE TABLE campground (
    id INT NOT NULL AUTO_INCREMENT,
    campground_name VARCHAR(30) NOT NULL,
    state VARCHAR(2) NOT NULL,
    city VARCHAR(30) NOT NULL,
    description VARCHAR(30) NOT NULL,
    accessibility BIT NOT NULL,
    price DECIMAL NOT NULL,
    review_text VARCHAR(500)
    rating INT NOT NULL, 
    PRIMARY KEY(state)
);