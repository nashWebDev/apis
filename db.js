const {MongoClient} = require('mongodb') //allows us to connect to database

let dbConnection;


module.exports = {
    //connects to db
    connectToDb: (cb) =>{
        MongoClient.connect('mongodb://localhost:27017/bookstore')//allows us to find db
        .then((client)=>{
          dbConnection = client.db()
          return cb()
        }).catch(
            (err) => {
                console.log(err)
                return cb(err)
            }
        )
    },
    //reurns db connection,allows for communication wiuth db
    getDb: () => dbConnection

}