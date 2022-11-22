-- Active: 1669116292634@@127.0.0.1@5432@shop
CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  img VARCHAR(100)
);
INSERT INTO products(name, description, price) VALUES ('iPhone', 'Best phone', 1500);
INSERT INTO products(name, description, price) VALUES ('Tesla', 'Best car', 150000);
INSERT INTO products(name, description, price) VALUES ('Macbook', 'Best computer', 3000);