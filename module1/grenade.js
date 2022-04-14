const num1 = 10;
const num2 = 20;

function addNum(){
    console.log(`the sum is : ${num1 + num2}`);
}
addNum();

//loaddash example
/*const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);*/


const {readFile, writeFile} = require('fs').promises
/*const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)*/

/*const getText = (path) => {
    return new Promise((resolve, reject) => {

        readFile(path, 'utf8', (err, data)=> {
            if(err) {
                reject(err)
            }else {
                resolve(data);
            }
        })

    })
}*/

const start = async() =>{
    try {
        const first = await readFile('./module1/content/first.txt', 'utf8')
        const second = await readFile('./module1/content/second.txt', 'utf8')

        await writeFile('./module1/content/result-grenade.txt', `Hello World! This is Awesome! : ${first} ${second}`, {flag: 'a'})

        console.log(first, second);       
    } catch (error) {        
    }
    console.log(error);
}
start()

/*getText('./module1/content/first.txt')
.then((result)=> console.log(result))
.catch((err) => console.log(err))*/
