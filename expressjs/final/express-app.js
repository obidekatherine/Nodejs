const express = require('express');
const path = require('path');


const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/',(req, res)=> {
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})


app.all('*', (reg, res)=> {
    res.status(404).send('<h1>Server not found!</h1>')
})

app.listen(4000, ()=> {
    console.log('Server is running on port 4000....')
})