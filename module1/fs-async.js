//async
const {readFile, writeFile} = require('fs'); // reading two files or const fs = require('fs');
//callback is called when we are done

console.log('Start!');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const firstTxt = result;
    readFile('./content/second.txt', 'utf8',(err,result)=> {
        if(err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `Hello World! : ${firstTxt}, ${second}`, (err, result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log('Task Done!')
        })   
    })
})
console.log('Start Next One!');


//setInterval is asynchronous

setInterval(()=> {
    console.log('Hello World!');
}, 2000)
console.log('I will run first');

//process stays alive unless {1} kill process CONTROL + C or Unexpected Error


//setTimeout is asynchronous

//started operating system process
console.log('First');
setTimeout(()=> {
    console.log('Second');
}, 0)
console.log('Third');
//completed and exited operating system procress

