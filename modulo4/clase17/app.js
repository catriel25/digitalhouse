const express = require('express');
const app = express();
const path = require('path');

app.listen(3030, () => console.log('Server up at: http://localhost:3030'))

app.use(express.static('public'));

app.get('/', function(req, res){
    htmlPath = path.join(__dirname, '/views/home.html');
    res.sendFile(htmlPath);
})
