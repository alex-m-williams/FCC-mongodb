const url = 'mongodb://localhost:27017/learnyoumongo';
const mongo = require('mongodb').MongoClient;

mongo.connect(url, (err, db) => {
   if (err) throw err;
   let docs = db.collection('docs');
   let obj = {firstName: process.argv[2], lastName: process.argv[3]};
   docs.insert(obj, (err, data) => {
       if (err) throw err;
       console.log(JSON.stringify(obj));
   });
   
   db.close();
});

