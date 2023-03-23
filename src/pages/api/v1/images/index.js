import { v4 as uuid } from 'uuid';
const Uploader = require('s3-streaming-upload').Uploader
const fs = require('fs');
const AWS = require('aws-sdk')
const { Readable } = require('stream')
import { tmpdir } from 'os';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  }
};


export default async function handler(req, res) {
const BUCKET_NAME = process.env['BUCKET_NAME']
const BUCKET_KEY = process.env['BUCKET_KEY']
const BUCKET_SECRET = process.env['BUCKET_SECRET']
const s3 = new AWS.S3({
  accessKeyId: process.env.BUCKET_KEY,
  secretAccessKey: process.env.BUCKET_SECRET
});


if (req.method === "POST") {
  //const filename = `${uuid()}.${req.headers['content-type'].split('/').pop()}`;
  const filename = `${uuid()}`;
  const pathDir = tmpdir();
  const filePath = `${pathDir}/${filename}`;
  const options = {}
  options.uploadDir = pathDir;
    options.filename = (name, ext, path, form) => {
    return filename;
  }; 
  options.multiples = true;
    const form = formidable();
    const formData = new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          reject("error");
        }
        resolve({ fields, files });
      });
    });
    const { fields, files } = await formData;
    console.log(fields)
    
}

}