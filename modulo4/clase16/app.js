const express = require('express');
const app = express();
const path = require('node:path');

app.listen(3000, () => console.log(`Server ullllp: http://localhost:3000`));



app.get('/', (req, res) =>{
    const pathHome = path.join(__dirname, 'views/home.html');
    res.sendFile(pathHome);
} )

