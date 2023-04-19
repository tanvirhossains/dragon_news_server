const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const cors = require("cors");

app.use(cors());

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})