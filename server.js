// import libraries 
const express = require('express');
const app = express();
const PORT = 3000 || 5000;
const routes = require('./routes/index');


// middleware

app.use(express.json());



// send a get

// app.get('/', (req,res) => {
//     res.send('hello there')
// })

// routes

app.use('/', routes);


// server listen

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})