const express = require('express')
const app = express()

app.get('/', (req, res) => {
 res.status(200).send('Hello World!')
})

app.get('/about', (req,res)=> {
    res.status(200).send('Hello! This is about page!')
})

app.all('*', (req, res)=>{
    res.status(404).send('<h1>Server not found!</h1>')
})

app.listen(4000, () => {
    console.log('Server is running on port 4000....')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
