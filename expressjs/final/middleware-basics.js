const express = require('express')
const app = express()
const logger = require('./logger')


// req => middleware => res

app.get('/', logger, (req, res) => {   
    res.send('<h1>Home Page</h1>')
})

app.get('/about', logger, (req, res) => {
    res.send('<h1>About Page</h1>')
})


app.listen(4000, () => {
    console.log('Server is running on port 4000......')
})