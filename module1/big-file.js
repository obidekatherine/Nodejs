const {writeFileSync} = require('fs')

for (let i = 0; 1 < 10000; i++) {
    writeFileSync('./module1/content/big.txt', `hello world ${i}\n`, {flag: 'a'})
}