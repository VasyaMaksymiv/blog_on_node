const express = require('express');
const app = express();
app.set('viev engine', 'ejs');


app.get('/', (req, res) => res.send('Hello World'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));