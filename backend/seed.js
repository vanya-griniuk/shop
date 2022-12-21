const path = require('path');
const fs = require('fs');
const db = require('./db');

const productsPath = path.join(__dirname, './products.json');
const productsJSON = fs.readFileSync(productsPath, 'utf-8');
const { products } = JSON.parse(productsJSON);

const bracketify = (value) => (typeof value === 'string') ? `'${value}'` : value;
const stringify = (values) => values.map(bracketify).join(', ');

products.forEach((product) => {
  const { name, description, price, img } = product; 
  const values = [name, description, price, img];

  db.query(`INSERT INTO products(name, description, price, img) VALUES(${stringify(values)})`);

});








