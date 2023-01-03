const path = require('path');
const fs = require('fs');
const db = require('./db');

const productsPath = path.join(__dirname, './products.json');
const productsJSON = fs.readFileSync(productsPath, 'utf-8');
const { products } = JSON.parse(productsJSON);

products.forEach(async (product) => {
  const { name, description, price, img } = product; 
  const insertSQL = 'INSERT INTO products(name, description, price, img) VALUES($1, $2, $3, $4)';
  const values = [name, description, price, img];

  await db.query(insertSQL, values);
});
