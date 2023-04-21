const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const cors = require("cors");
app.use(cors());

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/news-categories', (req, res) => {
    res.send(categories)
    console.log(req)
})
app.get("/news", (req, res) => {
    res.send(news)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === "08") {
        res.send(news)
    }
    else {

        const category = news.filter(n => n.category_id === id);
        res.send(category)
    }
})
app.get('/news/:id', (req, res) => {
    // http://localhost:5000/category/07
    const id = req.params.id;
    console.log(req.params.id) //07
    const singleNews = news.find(n => n.category_id === id);
    res.send(singleNews)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})