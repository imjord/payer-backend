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

module.exports = mongoose.model('Payer', PayerSchema);



// export model to be used in routes 

