// import libraries 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mongoose  = require('mongoose');
const payerRoute = require('./routes/payerRoute.js');
const spendRoute = require('./routes/spendRoute.js');

// middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// connect mongoose 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/payer", {

    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set("debug", true);

// send a get

// app.get('/', (req,res) => {
//     res.send('hello there')
// })

// routes

app.use('/api/payer', payerRoute);
app.use('/api/spend', spendRoute);



// server listen

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})