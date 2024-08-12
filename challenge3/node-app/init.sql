CREATE DATABASE IF NOT EXISTS testdb;
USE testdb;

CREATE TABLE IF NOT EXISTS books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  published_date DATE
);

INSERT INTO books (title, author, published_date) VALUES
('Book 1', 'Author 1', '2023-01-01'),
('Book 2', 'Author 2', '2023-02-01');
