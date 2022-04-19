const express = require('express')
const app = express()
let { people } = require('./data')

//static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({ extended: false }))

//parse json
app.use(express.json())

//To GET/read data
app.get('/api/people', (req, res) => {
    res.status(200).json({success:true,data:people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success:false,msg:'Name is required'})
    }
    res.status(201).json({success:true,person:name})
})

app.post('/login', (req, res) => {
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`<h1>Welcome ${name}</h1>`)
    }
    res.status(200).send('<h1>Please provide info</h1>')
})


app.listen(4000, () => {
    console.log('Server is running on port 4000......')
})