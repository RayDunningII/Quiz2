const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const cors = require('cors');



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'quiz2'
});
 
connection.connect();
 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });
 

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/movie', (req,res) => {
    connection.query('SELECT * FROM movie', (err, movie) => {
        if(err){
            res.send('Ooos Error')
        } else {
            res.send(movie)
        }
    }) 
  });


  app.get('/movie/:id', (req,res) => {
    connection.query(`SELECT * FROM movie WHERE id=${req.params.id}`, (err, movie) => {
        if(err){
            res.send('error finding movies')
        } else {
            res.send(movie)
        }
    }) 
  });









app.get('/', (req, res) => res.send('Hello World!'))












app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))