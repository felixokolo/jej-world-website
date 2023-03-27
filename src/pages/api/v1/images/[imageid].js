import { useRouter } from "next/router";
import dbClient from "@/dbConnection/db";
const fs = require('fs');

const dbName = 'jej-world';
const host = '127.0.0.1';
const port = 27017;
const client = new dbClient(dbName);


async function handler (req, res) {

  if (req.method === 'GET') {
    const { imageid } = req.query
    const resp = await client.db.collection('images').findOne({id: imageid})
    return res.send(resp.image)
    /* const result = resp.products.filter((value, index) => {
      return value.id === imageid
    }).pop()
    console.log(result)
    try {
      const file = fs.readFileSync(result.url);
      res.setHeader('Content-Type', result.mimetype);
      return res.send(file);
      console.log(file);
    }
    catch (err) {
      return res.status(404).send({ error: 'Not found' });
    } */
  }
}

export default handler;