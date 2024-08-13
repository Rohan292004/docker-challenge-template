const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 8080;

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'testdb',
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.get('/api/books', (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


app.get('/api/books/:id', (req, res) => {
  const bookId = req.params.id;
  db.query('SELECT * FROM books WHERE id = ?', [bookId], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
