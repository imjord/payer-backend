const router = require('express').Router();


const {
    takePay
} = require('../controllers/PayerController');


// spend route  with a already user id 


router.route('/:id').put(takePay);


module.exports = router;