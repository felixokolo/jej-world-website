// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbClient from "@/dbConnection/db";
import formidable from 'formidable';
import multiparty from "multiparty"
import { useEffect } from "react";
const dbName = 'jej-world';
/* const host = '127.0.0.1';
const port = 27017; */
const client = new dbClient(dbName);



/* export const config = {
  api: {
    bodyParser: false,
  }
}; */

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
  /* resp[0].products.forEach((product) => {
    product.url = `${process.env['BASE_URL']}/api/v1/images/${product.id}`
    console.log(product);
  }) */

  return res.status(200).json(resp)
}

  if (req.method === "POST") {
    console.log(req.body)
    const resp = await client.db.collection('products').updateOne(
      {"category": "Fabrics"},
      { $push: { "products": req.body } }
    )
    res.status(200).json(resp)
  /*
    const form = new multiparty.Form()
    const data = await new Promise((resolve, reject) => {
    form.parse(req, function (err, fields, files) {
      if (err) reject({ err })
      resolve({ fields, files })
    })
  })

  console.log(`Form data: `, data)

  return res.status(200).json({ data }) */
  
  /*
  fs.mkdir(pathDir, {recursive: true}, (error) => {
    if (error) return res.status(400).send({ error: error.message });
    return true;
  })
  
    
    options.uploadDir = pathDir;
    options.filename = (name, ext, path, form) => {
    return filename;
  }; 
  options.multiples = true;
  //options.fileWriteStreamHandler = () => fileWriter
    const form = formidable(options);
    const formData = new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          reject("error");
        }
        resolve({ fields, files });
      });
    });
    const { fields, files } = await formData;*/
    /* const new_path = `${pathDir}/${filename}.${files.image[0].originalFilename.split('.').pop()}`;
    fs.rename(filePath, new_path, () => {
      console.log(new_path)
    });
    fields.url = new_path;
    fields.id = filename;
    fields.mimetype = files.image[0].mimetype;
    const resp = await client.db.collection('products').updateOne(
      {"category": "Fabrics"},
      { $push: { "products": fields } }
    ) */


    /* 
    const body = req.body;
    const image = body.image;
    const buff = Buffer.from(image, 'base64');
    
    fs.writeFile(filePath, buff, (err) => {
      if (err) return res.status(400).send({ error: err.message });
    })
    body.url = filePath;
    console.log(body); 
    res.status(200).json({status: "OK"})*/
  }

  if (req.method === 'DELETE') {
    console.log("in Delete")
    const form = formidable();
    const formData = new Promise((resolve, reject) => {
      form.parse(req, async (err, fields) => {
        if (err) {
          reject("error");
        }
        resolve({ fields });
      });
    });
    const { fields } = await formData;
    let resp = await client.db.collection('products').find({}).toArray()
    const filtered = resp[0].products.filter((ele) => {
      return fields.selected.includes(ele.id)
    })

    filtered.forEach((ele) => {
      fs.unlink(ele.url, (err) => {
        return res.status(400).send({ err: err.message });
      })
      console.log(ele.url)
    })
    resp = await client.db.collection('products').updateOne(
      {"category": "Fabrics"},
      { $pull: { "products": {"id": { $in: fields.selected}} } }
    )
    res.status(200).json(resp)
    console.log(fields);
    //res.status(400).json(fields)
  }
  
  }
