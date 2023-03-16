const { MongoClient } = require('mongodb');

class dbClient {

  constructor(host, port, dbName) {
    const url = `mongodb://${host}:${port}`;
    this.client = new MongoClient(url);
    this.dbName = dbName;
  }

  connect = async () => {
    this.client.connect().then(() => {
      console.log('Connected successfully to db server');
      this.db = this.client.db(this.dbName);
  }).catch((error) => {
      console.log(error.message);
      this.db = false;
    }
  );
  } 

}



export default dbClient;