const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res

app.use(logger, authorize) // they are being executed in order of placement


app.get('/', (req, res) => {   
    res.send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.get('/api/products', (req, res) => {   
    res.send('<h1>Products</h1>')
})

app.get('/api/items', (req, res) => {
    res.send('<h1>items</h1>')
})


app.listen(4000, () => {
    console.log('Server is running on port 4000......')
})