const router = require('express').Router();
const User = require('../models/User');


router.get('/register', (req, res) => {
    User.findAll()
    .then(users => {
        res.setHeader('content-type', 'application/json');
        // res.sendStatus(200)
        res.send(JSON.stringify(users));
        console.log(users)
    })
    .catch(err => console.log(err))
})

router.post('/register', (req, res) => {
    const data = {
        name: 'maica padillo',
        email: 'maica_padillo@gmail.com',
        password: '123456'
    }
    // const {
    //     name,
    //     email,
    //     password
    // } = JSON.stringify(req.body);
    // res.send(req.body);
    const { name, email, password} = data;
    console.log(data);
    
    User.create({
        name,
        email,
        password
    })
    .then(user => {
        res.setHeader('content-type', 'application/json')
        res.send(JSON.stringify(data));
        console.log(user)
    })
    .catch(err => {
        res.sendStatus(400)
        console.log(err)
    });
})

module.exports = router;