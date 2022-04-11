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