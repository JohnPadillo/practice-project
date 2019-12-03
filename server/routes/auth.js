const router = require('express').Router();
const User = require('../models/User');

router.post('/register', (req, res) => {
    console.log(req.body);
    // let { name, email , password } = req.body;
        let name = req.body.name;
        User.create({
            name,
            email,
            password
        })
    //     .then(user => {
    //         res.send(`${user}`)
    //         console.log('Registered Successfully')
    //     })
    //     .catch(error => {
    //         res.send(error)
    //         res.sendStatus(400)
    //     }) 
})

router.get('/register', (req, res) => {
    User.findAll()
    .then(users => {
        console.log(users)
        res.sendStatus(200)
    })
    .catch(err => console.log(err))
})

module.exports = router;