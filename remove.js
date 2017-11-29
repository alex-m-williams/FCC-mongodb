const url = 'mongodb://localhost:27017/' + process.argv[2];
const mongo = require('mongodb').MongoClient;

mongo.connect(url, (err, db) => {
   if (err) throw err;
   let colName = process.argv[3];
   colName = db.collection(colName);
   colName.remove({
       _id: process.argv[4]
   }, (err) => {
      if (err) throw err; 
   });

   
   db.close();
});

