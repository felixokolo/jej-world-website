import dbClient from "@/dbConnection/db";
import { v4 as uuid } from 'uuid';
const dbName = 'jej-world';
const client = new dbClient(dbName);


export default async function handler(req, res) {
  if (req.method === 'GET'){
  let resp = await client.db.collection(req.query.collection).find({}).toArray()
  if (resp.length === 0 && req.query.collection === 'products') {
    await client.db.collection(req.query.collection).insertOne(
      {
        category: 'Fabrics',
        [req.query.collection]: []
      }
    )
    resp = await client.db.collection(req.query.collection).find({}).toArray()
  }
  return res.status(200).json(resp)
}

  if (req.method === "POST") {
    if (req.query.collection === 'products')
    {
      const id = uuid();
      const details = {...req.body, id, image: `/api/v1/images/${id}`}
      let resp = await client.db.collection(req.query.collection).updateOne(
      {"category": "Fabrics"},
      { $push: { [req.query.collection]: details } }
    )
    resp = await client.db.collection('images').insertOne({id, image: req.body.image})
    res.status(200).json(resp)
  }

  if (req.query.collection === "orders") {
    const details = {...req.body, id: uuid()}
      const resp = await client.db.collection(req.query.collection).insertOne(details)
    res.status(200).json(resp)
  }
  }

  if (req.method === 'DELETE') {
    let resp = await client.db.collection(req.query.collection).find({}).toArray()
    const filtered = resp[0].products.filter((ele) => {
      return req.body.selected.includes(ele.id)
    })
    resp = await client.db.collection(req.query.collection).updateOne(
      {"category": "Fabrics"},
      { $pull: { [req.query.collection]: {"id": { $in: req.body.selected}} } }
    )

    resp = await client.db.collection("images").deleteMany(
      {"id": { $in: req.body.selected}}
    )
    res.status(200).json(resp)
  }
  
  }
