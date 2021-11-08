const express = require('express');
const app = express();
const port = 3000;
const dataVis = require('./dataVis');
const willard = require('./willard')

app.use('/dataVis', dataVis);
// TODO: Add your own router
app.use('/willard', willard)



app.listen(port, () => console.log(`Example app listening on port ${port}!`));