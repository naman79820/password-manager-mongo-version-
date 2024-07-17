const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const bodyParser = require('body-parser')
 const dotenv =require('dotenv')
 dotenv.config()
 app.use(bodyParser.json())
 app.use(cors())

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'PasswordManager';
client.connect();

app.get('/', async(req, res) => {

  const db = client.db(dbName);
  const collection = db.collection('Password Manager');
   const findResult = await collection.find({}).toArray();
  res.json(findResult);
})

app.post('/', async(req, res) => {
  
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection('Password Manager');
   const findResult = await collection.insertOne(password)  
  res.send({sent:"true" , result: findResult});
})

app.delete('/', async(req, res) => {
  
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection('Password Manager');
   const findResult = await collection.deleteOne(password)
  res.send({sent:"true" , result: findResult});
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})