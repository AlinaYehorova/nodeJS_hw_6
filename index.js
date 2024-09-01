import express from 'express'
import db from './db.js'

const app = express()
const port = process.env.PORT || 3070

app.get('/products', (req, res) => {

  try {
 const [rows] = db.query('SELECT * FROM products')
 res.json(rows)

  } catch (e) {
   res.status(500).send('Error retrieving products')
  }
  res.send('Hello World!');
})

app.post('/products', (req, res) => {
const {name, price} = req.body

if (!name || !price) {
  return res.status(400).send('Name and Price are required')
}

  try {
    db.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price])
  } catch (e) {
    res.status(500).send('Error adding product')
  }
})


app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
})

