//login /api/login

const router = require('express').Router();

const bcrypt = require('bcryptjs')

const Users = require('../04-api-users/users-model')


router.post('/login', (req,res)=>{
    let {username, password} = req.body;

    Users.findUsersBy({username})
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                res.status(200).json({message: `Logged in, user id: ${user.id}`})
            }else{
                res.status(401).json({message: 'You shall not pass!'})
            }
        })
        .catch(err => {
            res.status(500).json({error: `Internal error: ${err}`})
        });
})

module.exports = router;