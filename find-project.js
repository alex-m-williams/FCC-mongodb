const url = 'mongodb://localhost:27017/learnyoumongo';
const mongo = require('mongodb').MongoClient;

let age = parseInt(process.argv[2]);
let resultsArr = [];
mongo.connect(url, (err, db) => {
   if (err) throw err;
   let parrots = db.collection('parrots');
   parrots.find({name: 1, age: 1, _id: 0}).toArray((err, result) => {
       if (err) throw err;
       result.filter(document => {
          if (document.age > age) {
              resultsArr.push(document);
          }
       });
       console.log(resultsArr);
   });
   db.close();
});