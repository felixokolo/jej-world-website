const { MongoClient } = require('mongodb');

class dbClient {

  constructor(host, port, dbName) {
    const url = `mongodb://${host}:${port}`;
    this.client = new MongoClient(url);
    this.dbName = dbName;
    this.db = this.client.db(dbName);
    this.client.connect();
  }

  connect = async () => {
    this.client.connect((err, client) => {
      if (err) {
        console.log(err.message);
        this.db = false;
      }
      console.log('Connected successfully to db server');
      this.db = this.client.db(this.dbName);
      return this.db;
  })
  } 

}



export default dbClient;