const url = 'mongodb://localhost:27017/learnyoumongo';
const mongo = require('mongodb').MongoClient;

mongo.connect(url, (err, db) => {
   if (err) throw err;
   let users = db.collection('users');
    users.update({
        username: "tinatime"
    }, {
        $set: {
            age: 40
        }
    }, (err, data) => {
        if(err) throw err;
    });
   
   db.close();
});

