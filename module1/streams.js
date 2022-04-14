const {createReadStream} = require('fs');

const stream = createReadStream('./module1/content/big.txt', {
    highWaterMark: 90000,
     encoding: 'utf8'}); //highwatermark control the size of the buffer in streams

stream.on('data', (result) => {
    console.log(result)
})

stream.on('data', (result) => {
    console.log(result);
})