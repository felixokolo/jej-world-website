// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbClient from "@/dbConnection/db";
const dbName = 'jej-world';
const host = 'localhost';
const port = 27017;

const client = new dbClient(host, port, dbName);

export default function handler(req, res) {
  client.connect().then(
    () => {
      client.db.collection('products').find({}).toArray()
    })
    .then(
      (resp) => res.status(200).json(resp))
    }
