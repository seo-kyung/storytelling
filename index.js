const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Starting server at ${port}`)});
app.use(express.static('public'));
app.use(express.json({limit: '500mb' }));



const things = require('./public/api');
app.use('/database', things )

