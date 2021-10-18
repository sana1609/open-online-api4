CREATE DATABASE Node_API_DB;

--\c into Node_API_DB

CREATE TABLE city(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(255),
);