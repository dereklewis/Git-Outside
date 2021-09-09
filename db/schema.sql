DROP DATABASE IF EXISTS campground_db;
CREATE DATABASE campground_db;

USE campground_db;


CREATE TABLE campground (
    id INT NOT NULL AUTO_INCREMENT,
    campground_name VARCHAR(30) NOT NULL,
    state VARCHAR(2) NOT NULL,
    city VARCHAR(30) NOT NULL,
    amenities BOOLEAN NOT NULL,
    accessibility BOOLEAN NOT NULL,
    price VARCHAR(12) NOT NULL,
    review_text VARCHAR(500)
    rating INT NOT NULL, 
    PRIMARY KEY(state)
);