const express = require('express');
const app = express();
const data = require('./Data/chef.json');
const cors = require('cors');
const port = 3000;

app.use(cors());



app.listen(port, () => console.log(`Foody BD listening on port ${port}!`))
