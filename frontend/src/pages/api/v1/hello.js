// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbClient from "@/dbConnection/db";
import { v4 as uuid } from 'uuid';
const fs = require('fs');

const dbName = 'jej-world';
const host = 'localhost';
const port = 27017;

const client = new dbClient(host, port, dbName);

export default async function handler(req, res) {
  if (req.method === 'GET'){
  const resp = client.db.collection('products').find({}).toArray()
  await resp.then(response => {
    res.status(200).json(response)
  })
}

  if (req.method === "POST") {
    const filename = uuid();
    const pathDir = './data/products'
    fs.mkdir(pathDir, {recursive: true}, (error) => {
      if (error) return res.status(400).send({ error: error.message });
      return true;
    })
    res.status(200).json({status: "OK"})
  }
  
  }
