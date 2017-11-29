const url = 'mongodb://localhost:27017/learnyoumongo';
const mongo = require('mongodb').MongoClient;


const inputage = process.argv[2];
mongo.connect(url, (err, db) => {
   if (err) throw err;
   let parrots = db.collection('parrots');
   parrots.count({
       age: {
           $gt: +inputage
       }
   }, (err, count) => {
      if (err) throw err;
      console.log(count);
   });

   
   db.close();
});

