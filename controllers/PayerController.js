// import library 
const router = require('express').Router;

// import the payer model
const Payer = require('../models/Payer');


// get payer

router.get('/', (req,res) => {
    Payer.findAll().then(data => {res.json(data)}).catch(err => res.status(500).json(err))
})

// add transaction 
router.post('/', (req,res) => {
    Payer.create({
        payer: req.body.payer,
        points: req.body.points
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    })
})


module.exports = router;