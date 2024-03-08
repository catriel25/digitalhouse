const express = require('express');
const app = express();
rutasMain = require('./routers/main.js');

app.listen (3000, () => {console.log('Server running')});
app.use(express.static('public'));

app.use('/', rutasMain);