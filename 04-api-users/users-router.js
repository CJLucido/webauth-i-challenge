// GET users /api/users

const router = require('express').Router();

const bcrypt = require('bcryptjs')

const Users = require('./users-model')

router.get('/users', (req, res)=>{
    Users.findUsers()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json({error: `Internal, failed to retrieve users. ${err}`})
    })
})

//function validateLoggedIn(){}

module.exports = router;