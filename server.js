// import libraries 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/index');
const mongoose  = require('mongoose');


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
//     res.send('hello there go to /test')
// })

// routes

app.use('/', routes);


// server listen

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})