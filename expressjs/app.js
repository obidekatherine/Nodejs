const express = require('express')
const app = express()
let { people } = require('./data')

//static assets
app.use(express.static('./methods-public'))
//To GET/read data
app.get('/api/people', (req, res) => {
    res.status(200).json({success:true,data:people})
})



app.listen(4000, () => {
    console.log('Server is running on port 4000......')
})