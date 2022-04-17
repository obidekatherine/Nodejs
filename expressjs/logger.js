const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    //res.send('<h1>Hello World</h1>')
    next()
}
 module.exports = logger;