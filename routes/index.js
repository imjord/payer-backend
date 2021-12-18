const router = require('express').Router;


const {
    getPayer,
    createPayer
} = require('../controllers/PayerController');


router.route('/').get(getPayer).post(createPayer);


module.exports = router;