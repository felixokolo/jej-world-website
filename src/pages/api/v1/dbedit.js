import { v4 as uuid } from 'uuid';
const dbName = 'jej-world';
const client = new dbClient(dbName);


export default async function handler(req, res) {
  if (req.method === 'GET'){
  let resp = await client.db.collection('products').find({}).toArray()
  if (resp.length === 0) {
    await client.db.collection('products').insertOne(
      {
        category: 'Fabrics',
        products: []
      }
    )
    resp = await client.db.collection('products').find({}).toArray()
  }
  return res.status(200).json(resp)
}

  if (req.method === "POST") {
    console.log(req.body)
    const details = {...req.body, id: uuid()}
    const resp = await client.db.collection('products').updateOne(
      {"category": "Fabrics"},
      { $push: { "products": details } }
    )
    res.status(200).json(resp)
  }

  if (req.method === 'DELETE') {
    console.log("in Delete")
    let resp = await client.db.collection('products').find({}).toArray()
    const filtered = resp[0].products.filter((ele) => {
      return req.body.selected.includes(ele.id)
    })
    resp = await client.db.collection('products').updateOne(
      {"category": "Fabrics"},
      { $pull: { "products": {"id": { $in: req.body.selected}} } }
    )
    res.status(200).json(resp)
    console.log(fields);
  }
  
  }
