const path = require('path')
const fs = require('fs')
const http = require('http');
const db = require('./db');

const hostname = '127.0.0.1';
const port = 3001;

// const productsPath = path.join(__dirname, './products.json') 
// const products = fs.readFileSync(productsPath, 'utf-8') 

const server = http.createServer(async (req, res) => {
  const { rows: products } = await db.query('SELECT * FROM products');

  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(products));
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})