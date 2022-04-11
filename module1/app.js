const {readFileSync, writeFileSync} = require('fs'); // reading two files or const fs = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

//console.log(first, second);

writeFileSync('./content/result-sync.txt', 
`Here is it : ${first}, ${second}`
) //created a file that did'nt exist