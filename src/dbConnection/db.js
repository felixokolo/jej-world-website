const { MongoClient, ServerApiVersion } = require('mongodb');

class dbClient {

  constructor(dbName) {
    const uri = "mongodb+srv://pheelix:Sisterfaith21-@pheelix-projects.uzunbzh.mongodb.net/?retryWrites=true&w=majority";
      this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
      this.client.connect(err => {
        if (err) console.log('Error don happen')
    });
    this.dbName = dbName;
    //this.con = this.client.connect();
    this.db = this.client.db(dbName);
    //this.db = this.client.connect();
    console.log('Connected successfully to db server');
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