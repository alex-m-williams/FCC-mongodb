const url = 'mongodb://localhost:27017/learnyoumongo';
const mongo = require('mongodb').MongoClient;

mongo.connect(url, (err, db) => {
   if (err) throw err;
   let sizeMatch = process.argv[2];
   let prices = db.collection('prices');
   prices.aggregate([
       {$match:{
           size: sizeMatch
       }},
       { $group: {
           _id: 'average',
           total: {
               $avg: '$price'
           }
       }}
    ]).toArray((err, results) => {
      if (err) throw err;
      console.log(Number(results[0].total).toFixed(2));
   });
    
   
   db.close();
});

