const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => console.log('Server up at: http://localhost:3000'));

app.use(express.static('public'));

app.get('/', (req, res) =>{
    pathHtml = path.join(__dirname, '/views/index.html');
    res.sendFile(pathHtml);
})
app.get('/create-product', (req, res) =>{
    pathHtml = path.join(__dirname, '/views/create-product.html');
    res.sendFile(pathHtml);
})