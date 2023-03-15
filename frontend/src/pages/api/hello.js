// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "@/dbConnection/db"
const db = client.db("jej-world");


export default async function handler(req, res) {
  const resp = await db.collection('categories').find({}).toArray()
  res.status(200).json(resp)
}
