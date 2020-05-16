const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const cors = require('cors');
// const password = require('../../mongoConfig');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))


// MongoClient.connect('mongodb://localhost', function (err, client) {
//   if (err) throw err;

//   var db = client.db('quiz3');

//   db.collection('quizzes').find().toArray((findErr, result) => {
//     if (findErr) throw findErr;
//     console.log(result);
//     client.close();
//   });
// }); 
app.get('/', (req,res) => {
  MongoClient.connect('mongodb://localhost', (err,client) => {
      if(err) console.error(err);
      const db = client.db('quiz3');
      db.collection('quizzes').find().toArray((err,result) => {
          if(err) console.error(err);
          console.log(result)
          res.send(result)

      });
    })
  })
    


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))