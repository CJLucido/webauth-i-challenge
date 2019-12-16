const express = require('express')
//also need the db

const registerRouter = require('../02-api-register/register-router');
const authRouter = require('../03-api-auth/auth-router');
const usersRouter = require('../04-api-users/users-router');

const router = express.Router()


router.use('/users', usersRouter)
router.use('/register', registerRouter)
router.use('/login', authRouter)

router.get('/', (req,res)=>{
    res.json({api: "SOON"})
})



module.exports = router;