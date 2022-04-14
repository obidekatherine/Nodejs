var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    //const text = fs.readFileSync('./module1/content/big.txt', 'utf8')
   // res.end(text) 
   //using this method made the data big intead of sending back to large instance, send it back in chunks using the method below

   const fileStream = fs.createReadStream('./module1/content/big.txt', 'utf8');
   fileStream.on('open', () => {
fileStream.pipe(res)
   })
   fileStream.on('error', (err) => {
       res.end(err)
   })
})
.listen(5000)