

// import the payer model
const Payer = require('../models/Payer');





const payerController = {
    //get payer
    getPayer(req,res) {
        Payer.find().then(data => {res.json(data)}).catch(err => res.status(500).json(err))

    },
    // create payer
    createPayer(req,res){
        Payer.create({
            payer: req.body.payer,
            points: req.body.points
        }
        ).then(data => {
            res.json(data);
        }).catch(err => {
            res.status(500).json(err);
        })
    }
    
}


module.exports = payerController;