// import mongoose
const mongoose = require('mongoose');


//create our mongoose schema 
const PayerSchema = new mongoose.Schema({
    
    payer: String, 
    points: Number,
},
   {
       timestamps: true
   }



)


// create mongoose model 

const Payer = mongoose.model('Payer', PayerSchema);



// export model to be used in routes 

module.exports = Payer;