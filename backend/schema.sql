CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR,
    password VARCHAR,
    role_id INTEGER REFERENCES roles(id),
);

CREATE TABLE errors (
    id SERIAL PRIMARY KEY,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);