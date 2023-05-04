const express = require('express');
const app = express();
const data = require('./Data/chef.json');
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Vai This Is Food App!')
})
app.get('/chef', (req, res) => {
    res.send(data)
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const chef = data.find(n => n.chef_id === id);
    res.send(chef);
})

app.listen(port, () => console.log(`Foody BD listening on port ${port}!`))
