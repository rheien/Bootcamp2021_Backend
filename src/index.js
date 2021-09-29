const express = require('express');

const bodyparser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
});

const port = 3000;

const library = {
    movies: 32,
    books: 2345678,
    games: 200
};

app.get('/healthcheck', (req, res) => res.json({ msg: 'hello world' }));

app.get("/library", (req, res) => {
    const mediaType = req.query.type;

    return res.send(`The media type: ${mediaType} has ${library[mediaType]} units`);
})

app.post("/printname", (req, res) => {
    const name = req.body.name
    const age = req.body.age

    return res.send(`name: ${name},age: ${age}`);
});

app.listen(port, () => console.log(`app listening on port ${port}`));