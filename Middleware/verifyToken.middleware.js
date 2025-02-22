const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token){
        return res.status(401).send('Access Denied');
    }else{
        try{
            console.log('Token: ', token);
            const verified = jwt.verify(token, process.env.JWT_SECRET);
            req.user = verified;
            next();
        }catch(err){
            res.status(400).send('Invalid Token');
        }
    }
};

module.exports = verifyToken;