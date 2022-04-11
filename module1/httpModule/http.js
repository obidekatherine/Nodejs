const http = require('http');
//const { url } = require('inspector');

const server = http.createServer((reg, res)=> { // request response
if(reg.url === '/') {
    res.end('Hello World! Welcome to NodeJs')
}
if(reg.url === '/about') {
    res.end('Hello! This is about page')
}
res.end(
    `<h1>Oops!</h1>
    <p>Page not found</p>
    <a href="/">Go to Home</a>
 `)
    

    //res.write();
    //res.end()
})

server.listen(5000)