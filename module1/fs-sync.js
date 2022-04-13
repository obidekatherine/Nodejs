//readfilesync
const {readFileSync, writeFileSync} = require('fs'); // reading two files or const fs = require('fs');

console.log('Start');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

//console.log(first, second);

writeFileSync('./content/result-sync.txt', 
`Here is it : ${first}, ${second}`, {flag: 'a'} //flag to great a new  value
) //created a file that did'nt exist

console.log('End');
console.log('Start again');


//Blocking code

const http = require('http')

const server = http.createServer((req, res)=> {
  if(req.url === '/') {
      res.end('Home Page')
  } 
  if(req.url === '/about') {
//BLOCKING CODE

for(let i = 0; i < 1000; i++){
    for(let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
    }
}
    res.end('about Page')
}

res.end('Error Page')
})


server.listen(5000, () => {
    console.log('server listening on port  5000....');
})