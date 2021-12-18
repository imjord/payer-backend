// import libraries 
const express = require('express');
const app = express();
const PORT = 3000 || 5000;



// middleware

app.use(express.json());



// send a get

app.get('/', (req,res) => {
    res.send('hello there')
})

// server listen

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})