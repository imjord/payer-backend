const router = require('express').Router();


const {
    getPayer,
    createPayer,
    takePay
} = require('../controllers/PayerController');


router.route('/').get(getPayer).post(createPayer);

// for ids 

router.route("/:id").put(takePay);


module.exports = router;