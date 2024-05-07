
const express = require('express');
const app = express();
app.use(express.static('public'))
const port = 4000;
const hostname = '127.0.0.1';
// respond with "hello world" when a GET request is made to the homepage

app.get('/', function(req,res){
 res.sendfile(__dirname + '/public/index.html');
}); 

app.listen(port, hostname,() => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
