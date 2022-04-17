const authorize = (req, res, next)=> {
    const {user} = req.query;
    if(user === 'katherine'){
        req.user = {name:'katherine', id:3}
        next()
     }
     else{
         res.status(401).send('<h1>Unauthorized</h1>')
     }
    console.log('Authorize middleware')
    next()
}

module.exports = authorize