const jwt = require('jsonwebtoken')
const user = require('../models/user')

// throwing error--user not defined
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismyclass')
        const user = await user.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate' })
        console.log(e)
    }
}

module.exports = auth