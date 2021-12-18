

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
    },
    // update points 
    takePay(req,res){
        Payer.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(data => {
          if (!data) {
            res.status(404).json({ message: 'No payer found with this id!' });
            return;
          }
          res.json(data);
        })
    }
    
}


module.exports = payerController;