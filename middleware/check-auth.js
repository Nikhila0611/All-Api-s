const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        console.log(req.headers);

        if (!req.headers.authorization) {
            throw new Error('Authorization header is missing');
        }

        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, "webBatch");
        req.userData = decode;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: "Auth failed: Invalid token" });
    }
};

