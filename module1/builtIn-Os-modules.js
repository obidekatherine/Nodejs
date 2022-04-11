//BuiltIn modules in NodeJs

const os = require('os');
//info about current user

const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}

console.log(currentOS);


//path modules

const path = require('path');
console.log(path.sep); //path separator

const filePath = path.join('/content', 'subFolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'content', 'subFolder', 'test.txt');
console.log(absolute);